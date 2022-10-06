import { Resolvers } from '../../gql-types'

export default {
	College: {
		async majors({ id }, _, { database }) {
			return await database.major.findMany({
				where: { colleges: { some: { id } } },
			})
		},

		async students({ id }, _, { database }) {
			return await database.student.findMany({
				where: { major: { id } },
			})
		},

		async universities({ id }, _, { database }) {
			return await database.university.findMany({
				where: { colleges: { some: { id } } },
			})
		},
	},

	Query: {
		async college(_, input, { database }) {
			return await database.college.findUnique(input)
		},

		async colleges(_, input, { database }) {
			return await database.college.findMany(input)
		},

		async collegesCount(_, input, { database }) {
			return await database.college.count(input)
		},
	},

	Mutation: {
		async createCollege(_, { data }, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.college.create({ data })
		},

		async updateCollege(
			_,
			{ data, where },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			return await database.college.update({ where, data })
		},

		async deleteCollege(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.college.delete(input)
		},
	},
} as Resolvers
