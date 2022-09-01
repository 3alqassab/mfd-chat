import { Prisma, PrismaClient } from '@prisma/client'
import { PubSub } from 'graphql-subscriptions'
import { Resolvers } from '../../gql-types'

const pubsub = new PubSub()

const updateChat = async (database: PrismaClient, chatId: string) => {
	const chat = await database.chat.findUnique({ where: { id: chatId } })

	pubsub.publish(`chat_${chatId}`, { chat })
}

const updateChats = async (database: PrismaClient, userId: string) => {
	const chats = await database.chat.findMany({
		where: { members: { some: { id: userId } } },
	})

	pubsub.publish(`chats_${userId}`, { chats })
}

export default {
	Chat: {
		async messages({ id }, input, { database }) {
			return await database.chatMessage.findMany({
				...input,
				where: { ...input.where, chatId: id },
				orderBy: { createdAt: 'desc' },
			})
		},

		async members({ id }, _, { database }) {
			return await database.user.findMany({
				where: { chats: { some: { id } } },
			})
		},
	},

	ChatMessage: {
		async sender({ senderId }, __, { database }) {
			return await database.user.findUnique({ where: { id: senderId } })
		},

		async chat({ chatId }, __, { database }) {
			return await database.chat.findUniqueOrThrow({
				where: { id: chatId },
			})
		},
	},

	Query: {
		async chats(_, input, { database, requireAuth, user }) {
			requireAuth()

			return await database.chat.findMany({
				...input,
				where: {
					...input.where,
					members: { some: { id: user?.id } },
				},
			})
		},

		async chatsCount(_, input, { database, requireAuth, user }) {
			requireAuth()

			return await database.chat.count({
				...input,
				where: {
					...input.where,
					members: { some: { id: user?.id } },
				},
			})
		},
	},

	Subscription: {
		chat: {
			subscribe: (_, { where: { id } }, { requireAuth, database }) => ({
				[Symbol.asyncIterator]: () => {
					requireAuth()

					setTimeout(async () => updateChat(database, id), 0)

					return pubsub.asyncIterator([`chat_${id}`])
				},
			}),
		},

		chats: {
			subscribe: (_, __, { requireAuth, user, database }) => ({
				[Symbol.asyncIterator]: () => {
					requireAuth()

					setTimeout(async () => updateChats(database, user!.id), 0)

					return pubsub.asyncIterator(`chats_${user?.id}`)
				},
			}),
		},
	},

	Mutation: {
		async sendMessageToChat(
			_,
			{ data: { chatId, content, type } },
			{ database, requireAuth, user },
		) {
			requireAuth()

			const data: Prisma.ChatMessageCreateInput = {
				chat: { connect: { id: chatId } },
				sender: { connect: { id: user!.id } },
				content: type === 'TEXT' ? content.trim() : content,
				type,
			}

			const message = await database.chatMessage.create({ data })

			await updateChat(database, chatId)
			await updateChats(database, user!.id)

			return message
		},
	},
} as Resolvers
