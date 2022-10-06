import { ApolloError } from '../../functions/errors'
import { Resolvers } from '../../gql-types'

export default {
	Class: {
		async educator({ educatorId }, _, { database }) {
			if (!educatorId) return null

			return await database.educator.findUnique({
				where: { id: educatorId },
			})
		},

		async course({ courseId }, _, { database }) {
			if (!courseId) return null

			return await database.course.findUnique({
				where: { id: courseId },
			})
		},
	},

	Query: {
		async class(_, input, { database }) {
			return await database.class.findUnique(input)
		},

		async classes(_, input, { database }) {
			return await database.class.findMany(input)
		},

		async classesCount(_, input, { database }) {
			return await database.class.count(input)
		},
	},

	Mutation: {
		async createClass(_, { data }, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.class.create({ data })
		},

		async createMyClass(
			_,
			{ data },
			{ database, requireAuth, educatorId, user },
		) {
			requireAuth(user?.role === 'EDUCATOR')

			return await database.class.create({
				data: {
					...data,
					educatorId,
				},
			})
		},

		async updateClass(
			_,
			{ data, where: { id } },
			{ database, requireAuth, user, educatorId },
		) {
			requireAuth(user?.role === 'EDUCATOR')

			const Class = await database.class.findUniqueOrThrow({ where: { id } })

			if (Class.educatorId !== educatorId) throw ApolloError('UNAUTHORIZED')

			return await database.class.update({ where: { id }, data })
		},

		async deleteClass(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.class.delete(input)
		},
	},
} as Resolvers
