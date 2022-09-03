import { Prisma } from '@prisma/client'
import { Resolvers } from '../../gql-types'

export default {
	School: {
		async grades({ id }, _, { database }) {
			return await database.grade.findMany({
				where: { schools: { some: { id } } },
			})
		},

		async students({ id }, _, { database, isAdmin }) {
			if (!isAdmin) return []

			return await database.student.findMany({
				where: { school: { id } },
			})
		},
	},

	Query: {
		async school(_, input, { database }) {
			return await database.school.findUnique(input)
		},

		async schools(_, input, { database }) {
			return await database.school.findMany(input)
		},

		async schoolsCount(_, input, { database }) {
			return await database.school.count(input)
		},
	},

	Mutation: {
		async createSchool(
			_,
			{ data: { name, nameAr, gradesIds } },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const data: Prisma.SchoolCreateInput = {
				name,
				nameAr,
				grades: { connect: gradesIds?.map(id => ({ id })) },
			}

			return await database.school.create({ data })
		},

		async updateSchool(
			_,
			{ data: { name, nameAr, gradesIds }, where },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const data: Prisma.SchoolUpdateInput = {
				name,
				nameAr,
				grades: { set: gradesIds?.map(id => ({ id })) },
			}

			return await database.school.update({ where, data })
		},

		async deleteSchool(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.school.delete(input)
		},
	},
} as Resolvers
