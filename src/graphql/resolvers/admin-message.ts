import { Resolvers } from '../../gql-types'

export default {
	Query: {
		async adminMessage(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.message.findUnique(input)
		},

		async adminMessages(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.message.findMany(input)
		},

		async adminMessagesCount(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.message.count(input)
		},
	},

	Mutation: {
		async sendAdminMessage(_, { data }, { database, requireAuth }) {
			requireAuth()

			return await database.message.create({ data })
		},

		async adminMessageToggleIsRead(_, { where }, { database, requireAuth }) {
			requireAuth()

			const message = await database.message.findUniqueOrThrow({ where })

			return await database.message.update({
				where,
				data: {
					isRead: !message.isRead,
				},
			})
		},

		async deleteAdminMessage(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.message.delete(input)
		},
	},
} as Resolvers
