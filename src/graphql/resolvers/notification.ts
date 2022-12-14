import { PrismaClient } from '@prisma/client'
import { pubsub } from '../../context'
import { Resolvers } from '../../gql-types'
import Hash from '../../functions/hash'

const updateNotifications = async (database: PrismaClient, userId: string) => {
	const notifications = await database.notification.findMany({
		where: { user: { id: userId } },
	})

	pubsub.publish(Hash(`notifications_${userId}`), { notifications })
}

export default {
	Notification: {
		async connection({ connectionId }, _, { database, requireAuth, user }) {
			requireAuth()

			if (!connectionId) return null

			const connection = await database.connection.findUniqueOrThrow({
				where: { id: connectionId },
			})

			return await database.user.findUnique({
				where: {
					id:
						connection.user1 === user?.id ? connection.user2 : connection.user1,
				},
			})
		},

		async liveStream({ liveStreamId }, _, { database, requireAuth }) {
			requireAuth()

			if (!liveStreamId) return null

			return await database.liveStream.findUnique({
				where: { id: liveStreamId },
			})
		},
	},

	Subscription: {
		notifications: {
			subscribe: (_, __, { requireAuth, user, database }) => ({
				[Symbol.asyncIterator]: () => {
					requireAuth()

					setTimeout(async () => updateNotifications(database, user!.id), 0)

					return pubsub.asyncIterator(Hash(`notifications_${user!.id}`))
				},
			}),
		},
	},
} as Resolvers
