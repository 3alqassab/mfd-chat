import { Prisma } from '@prisma/client'
import { Resolvers } from '../../gql-types'
import {
	validateEmail,
	validateMobile,
	validatePassword,
} from '../../functions/validate'
import Hash from '../../functions/hash'

export default {
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

		async email({ email }, __, { isAdmin }) {
			if (!isAdmin) return ''

			return email
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

		async connections({ id }, __, { database, user, requireAuth }) {
			const isConnected = await database.connection.findFirst({
				where: {
					OR: [
						{ user1: id, user2: user?.id },
						{ user1: user?.id, user2: id },
					],
				},
			})

			requireAuth(!!isConnected || user?.id === id)

			return await database.connection.findMany({
				where: { OR: [{ user1: id }, { user2: id }] },
			})
		},
	},

	Query: {
		async myUser(_, __, { database, requireAuth, user }) {
			requireAuth()

			return await database.user.findUnique({ where: { id: user?.id } })
		},

		async user(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.user.findUnique(input)
		},

		async users(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.user.findMany(input)
		},

		async usersCount(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.user.count(input)
		},
	},

	Mutation: {
		async createUser(
			_,
			{ data: { password, email, mobile, firstName, gender, lastName, role } },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			validatePassword(password)
			validateEmail(email.trim())
			validateMobile(mobile.trim())

			const data: Prisma.UserCreateInput = {
				password: Hash(password),
				wallet: { create: {} },
				email: email.trim().toLowerCase(),
				mobile: mobile.trim(),
				firstName: firstName.trim(),
				lastName: lastName.trim(),
				gender,
				role,
			}

			return await database.user.create({ data })
		},

		async updateMyUser(
			_,
			{ data: { email, mobile, firstName, gender, lastName } },
			{ database, requireAuth, user },
		) {
			requireAuth()

			const data: Prisma.UserUpdateInput = {}

			if (mobile) {
				validateMobile(mobile.trim())
				data.mobile = mobile.trim()
			}
			if (email) {
				validateEmail(email.trim())
				data.email = email.trim().toLowerCase()
			}
			if (firstName) data.firstName = firstName.trim()
			if (lastName) data.lastName = lastName.trim()
			if (gender) data.gender = gender

			return await database.user.update({
				where: { id: user?.id },
				data,
			})
		},

		async updateUser(
			_,
			{
				data: { password, email, mobile, firstName, gender, lastName, role },
				where,
			},
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const data: Prisma.UserUpdateInput = {}

			if (mobile) {
				validateMobile(mobile.trim())
				data.mobile = mobile.trim()
			}
			if (email) {
				validateEmail(email.trim())
				data.email = email.trim().toLowerCase()
			}
			if (password) {
				validatePassword(password)
				data.password = Hash(password)
			}
			if (firstName) data.firstName = firstName.trim()
			if (lastName) data.lastName = lastName.trim()
			if (gender) data.gender = gender
			if (role) data.role = role

			return await database.user.update({ where, data })
		},

		async deleteUser(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.user.delete(input)
		},
	},
} as Resolvers
