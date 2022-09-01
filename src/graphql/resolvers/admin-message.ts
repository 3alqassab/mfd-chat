import { Prisma } from '@prisma/client'
import { Resolvers } from '../../gql-types'
import { validateEmail, validateMobile } from '../../functions/validate'

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
		async sendAdminMessage(
			_,
			{ data: { message, name, email, mobile } },
			{ database, requireAuth },
		) {
			requireAuth()

			validateEmail(email)
			validateMobile(mobile)

			const data: Prisma.MessageCreateInput = {
				message: message.trim(),
				name: name.trim(),
				email: email.trim(),
				mobile: mobile.trim(),
			}

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
