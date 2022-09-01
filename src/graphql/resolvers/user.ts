import { Prisma } from '@prisma/client'
import { Resolvers } from '../../gql-types'
import { validateEmail, validatePassword } from '../../functions/validate'
import Hash from '../../functions/hash'

export default {
	University: {
		async educators({ id }, __, { database }) {
			return await database.educator.findMany({
				where: { universityId: id },
			})
		},
	},
	Student: {
		async university({ universityId }, __, { database }) {
			if (!universityId) return null

			return await database.university.findUnique({
				where: { id: universityId },
			})
		},

		async school({ schoolId }, __, { database }) {
			if (!schoolId) return null

			return await database.school.findUnique({
				where: { id: schoolId },
			})
		},

		async grade({ gradeId }, __, { database }) {
			if (!gradeId) return null

			return await database.grade.findUnique({
				where: { id: gradeId },
			})
		},
	},
	Educator: {
		async university({ universityId }, __, { database }) {
			if (!universityId) return null

			return await database.university.findUnique({
				where: { id: universityId },
			})
		},

		async subjects({ id }, __, { database }) {
			return await database.subject.findMany({
				where: { educators: { some: { id } } },
			})
		},

		async cvUrl({ cvUrl }, __, { isAdmin }) {
			if (!isAdmin) return ''

			return cvUrl
		},

		async cprUrl({ cprUrl }, __, { isAdmin }) {
			if (!isAdmin) return ''

			return cprUrl
		},
	},
	User: {
		async educator({ id }, __, { database }) {
			return await database.educator.findUnique({ where: { userId: id } })
		},

		async student({ id }, __, { database }) {
			return await database.student.findUnique({ where: { userId: id } })
		},

		async mobile({ mobile }, __, { isAdmin }) {
			if (!isAdmin) return ''

			return mobile
		},

		async wallet({ id }, __, { database, requireAuth, isAdmin, user }) {
			requireAuth(isAdmin || user?.id === id)

			return await database.wallet.findUniqueOrThrow({
				where: { userId: id },
			})
		},
	},
	Query: {
		async myUser(_, __, { database, requireAuth, user }) {
			requireAuth()

			return await database.user.findUnique({ where: { id: user?.id } })
		},

		async user(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.user.findUnique(input)
		},

		async users(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.user.findMany(input)
		},

		async usersCount(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.user.count(input)
		},
	},

	Mutation: {
		async createUser(
			_,
			{ data: { password, email, ...rest } },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			validatePassword(password)
			validateEmail(email)

			const data: Prisma.UserCreateInput = {
				password: Hash(password),
				email,
				wallet: {
					create: {},
				},
				...rest,
			}

			return await database.user.create({ data })
		},

		async updateMyUser(_, input, { database, requireAuth, user }) {
			requireAuth()

			return await database.user.update({
				where: { id: user?.id },
				...input,
			})
		},

		async updateUser(
			_,
			{ data: { password, email, ...rest }, where },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const data: Prisma.UserUpdateInput = { ...rest }
			if (password) {
				validatePassword(password)

				data.password = Hash(password)
			}
			if (email) {
				validateEmail(email)
				data.email = email
			}

			return await database.user.update({ where, data })
		},

		async deleteUser(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.user.delete(input)
		},
	},
} as Resolvers
