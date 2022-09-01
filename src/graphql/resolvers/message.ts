import { Resolvers } from '../../gql-types'

export default {
	Query: {
		async message(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.message.findUnique(input)
		},

		async messages(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.message.findMany(input)
		},

		async messagesCount(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.message.count(input)
		},
	},

	Mutation: {
		async sendMessage(_, { data }, { database, requireAuth }) {
			requireAuth()

			return await database.message.create({ data })
		},

		async toggleIsRead(_, { where }, { database, requireAuth }) {
			requireAuth()

			const message = await database.message.findUniqueOrThrow({ where })

			return await database.message.update({
				where,
				data: {
					isRead: !message.isRead,
				},
			})
		},

		async deleteMessage(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.message.delete(input)
		},
	},
} as Resolvers
