import { Prisma } from '@prisma/client'
import { Resolvers } from '../../gql-types'

export default {
	Major: {
		async colleges({ id }, _, { database }) {
			return await database.college.findMany({
				where: { majors: { some: { id } } },
			})
		},

		async schools({ id }, _, { database }) {
			return await database.school.findMany({
				where: { majors: { some: { id } } },
			})
		},

		async students({ id }, _, { database, isAdmin }) {
			if (!isAdmin) return []

			return await database.student.findMany({
				where: { major: { id } },
			})
		},

		async subjects({ id }, _, { database, isAdmin }) {
			if (!isAdmin) return []

			return await database.subject.findMany({
				where: { major: { id } },
			})
		},
	},

	Query: {
		async major(_, input, { database }) {
			return await database.major.findUnique(input)
		},

		async majors(_, input, { database }) {
			return await database.major.findMany(input)
		},

		async majorsCount(_, input, { database }) {
			return await database.major.count(input)
		},
	},

	Mutation: {
		async createMajor(_, { data }, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.major.create({ data })
		},

		async updateMajor(
			_,
			{ data: { name, nameAr, type }, where },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const major = await database.major.findUniqueOrThrow({ where })

			const data: Prisma.MajorUpdateInput = {
				name,
				nameAr,
				type,
			}

			if (type && major.type !== type) {
				if (type === 'SCHOOL') data.colleges = { set: [] }
				else data.schools = { set: [] }
			}

			return await database.major.update({ where, data })
		},

		async deleteMajor(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.major.delete(input)
		},
	},
} as Resolvers
