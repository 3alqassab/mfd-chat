import { Prisma } from '@prisma/client'
import { Resolvers } from '../../gql-types'

export default {
	University: {
		async colleges({ id }, _, { database }) {
			return await database.college.findMany({
				where: { universities: { some: { id } } },
			})
		},

		async educators({ id }, _, { database }) {
			return await database.educator.findMany({
				where: { university: { id } },
			})
		},

		async students({ id }, _, { database, isAdmin }) {
			if (!isAdmin) return []

			return await database.student.findMany({
				where: { university: { id } },
			})
		},
	},

	Query: {
		async university(_, input, { database }) {
			return await database.university.findUnique(input)
		},

		async universities(_, input, { database }) {
			return await database.university.findMany(input)
		},

		async universitiesCount(_, input, { database }) {
			return await database.university.count(input)
		},
	},

	Mutation: {
		async createUniversity(
			_,
			{ data: { name, nameAr, collegesIds } },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const data: Prisma.UniversityCreateInput = {
				name,
				nameAr,
				colleges: { connect: collegesIds?.map(id => ({ id })) },
			}

			return await database.university.create({ data })
		},

		async updateUniversity(
			_,
			{ data: { name, nameAr, collegesIds }, where },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const data: Prisma.UniversityUpdateInput = {
				name,
				nameAr,
				colleges: { set: collegesIds?.map(id => ({ id })) },
			}

			return await database.university.update({ where, data })
		},

		async deleteUniversity(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.university.delete(input)
		},
	},
} as Resolvers
