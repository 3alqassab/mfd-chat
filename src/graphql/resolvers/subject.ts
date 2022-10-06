import { Prisma } from '@prisma/client'
import { Resolvers } from '../../gql-types'

export default {
	Subject: {
		async educators({ id }, _, { database }) {
			return await database.educator.findMany({
				where: { subjects: { some: { id } }, active: true },
			})
		},

		async courses({ id }, _, { database }) {
			return await database.course.findMany({
				where: { subject: { id } },
			})
		},
	},

	Query: {
		async subject(_, input, { database }) {
			return await database.subject.findUnique(input)
		},

		async subjects(_, input, { database }) {
			return await database.subject.findMany(input)
		},

		async subjectsCount(_, input, { database }) {
			return await database.subject.count(input)
		},
	},

	Mutation: {
		async createSubject(
			_,
			{ data: { createdById, majorsIds, thumbnail, ...rest } },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const data: Prisma.SubjectCreateInput = {
				thumbnailUrl: thumbnail,
				majors: { connect: majorsIds?.map(id => ({ id })) },
				createdBy: { connect: { id: createdById } },
				...rest,
			}

			return await database.subject.create({ data })
		},

		async updateSubject(
			_,
			{ data: { thumbnail, majorsIds, createdById, ...rest }, where },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const data: Prisma.SubjectUpdateInput = {
				thumbnailUrl: thumbnail,
				majors: { set: majorsIds?.map(id => ({ id })) },

				createdBy: { connect: { id: createdById } },
				...rest,
			}

			return await database.subject.update({ where, data })
		},

		async deleteSubject(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.subject.delete(input)
		},
	},
} as Resolvers
