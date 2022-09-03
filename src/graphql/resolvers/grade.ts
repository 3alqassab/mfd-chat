import { Resolvers } from '../../gql-types'

export default {
	Grade: {
		async schools({ id }, _, { database }) {
			return await database.school.findMany({
				where: { grades: { some: { id } } },
			})
		},

		async students({ id }, _, { database, isAdmin }) {
			if (!isAdmin) return []

			return await database.student.findMany({
				where: { grade: { id } },
			})
		},
	},

	Query: {
		async grade(_, input, { database }) {
			return await database.grade.findUnique(input)
		},

		async grades(_, input, { database }) {
			return await database.grade.findMany(input)
		},

		async gradesCount(_, input, { database }) {
			return await database.grade.count(input)
		},
	},

	Mutation: {
		async createGrade(_, { data }, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.grade.create({ data })
		},

		async updateGrade(_, { data, where }, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.grade.update({ where, data })
		},

		async deleteGrade(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.grade.delete(input)
		},
	},
} as Resolvers
