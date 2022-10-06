import { Resolvers } from '../../gql-types'

export default {
	Query: {
		async course(_, input, { database }) {
			return await database.course.findUnique(input)
		},

		async courses(_, input, { database }) {
			return await database.course.findMany(input)
		},

		async coursesCount(_, input, { database }) {
			return await database.course.count(input)
		},
	},

	Mutation: {
		async createCourse(_, { data }, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.course.create({ data })
		},

		async updateCourse(_, { data, where }, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.course.update({ where, data })
		},

		async deleteCourse(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.course.delete(input)
		},
	},
} as Resolvers
