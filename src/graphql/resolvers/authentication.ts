import { ApolloError } from '../../functions/errors'
import { Resolvers } from '../../gql-types'
import { Token } from '../../context'
import {
	validateEmail,
	validateMobile,
	validatePassword,
} from '../../functions/validate'
import dayjs from 'dayjs'
import Hash from '../../functions/hash'
import jwt, { verify } from 'jsonwebtoken'

const API_SECRET = process.env.API_SECRET
if (!API_SECRET)
	throw new Error('The API_SECRET environment variable must be set')

const signJWT = (payload: Token) =>
	jwt.sign(payload, API_SECRET, { expiresIn: '31d' })

export default {
	Query: {
		async login(_, { data: { email, password } }, { database }) {
			validateEmail(email.trim())

			const user = await database.user.findUnique({
				where: { email: email.trim().toLowerCase() },
			})

			if (!user) throw ApolloError('NOT_FOUND')
			if (!user.isActive) throw ApolloError('UNAUTHORIZED')

			if (user.password !== Hash(password))
				throw ApolloError('INCORRECT_PASSWORD')

			return {
				user,
				token: signJWT({ id: user.id }),
			}
		},

		async checkEmail(_, { data: { email } }, { database }) {
			validateEmail(email.trim())

			const user = await database.user.findUnique({
				where: { email: email.trim().toLowerCase() },
			})

			if (!user) return false

			return true
		},
	},

	Mutation: {
		async register(
			_,
			{
				data: {
					password,
					student,
					educator,
					email,
					firstName,
					gender,
					lastName,
					mobile,
				},
			},
			{ database },
		) {
			if ((!student && !educator) || (student && educator))
				throw ApolloError(
					'MALFORMED_INPUT',
					'Please select either a student or educator',
				)

			validatePassword(password)
			validateEmail(email.trim())
			validateMobile(mobile.trim())

			const user = await database.user.create({
				data: {
					password: Hash(password),
					role: student ? 'STUDENT' : 'EDUCATOR',
					wallet: { create: {} },
					student: !student ? undefined : { create: student },
					educator: !educator ? undefined : { create: educator },
					isActive: educator ? false : true,
					email: email.trim().toLowerCase(),
					firstName: firstName.trim(),
					lastName: lastName.trim(),
					mobile: mobile.trim(),
					gender,
				},
			})

			return {
				user,
				token: student ? signJWT({ id: user.id }) : null,
			}
		},

		async requestPasswordReset(_, { data: { email } }, { database }) {
			validateEmail(email.trim())

			const user = await database.user.findUnique({
				where: { email: email.trim().toLowerCase() },
			})

			if (!user) return true

			const token = signJWT({ id: user.id })

			// TODO: EMAIL TOKEN TO USER

			await database.token.create({
				data: { token, opertation: 'RESET_PASSWORD' },
			})

			return true
		},

		async resetPassword(_, { data: { token, password } }, { database }) {
			const savedToken = await database.token.findUnique({
				where: { token },
			})

			const { id } = verify(token.replace(/^Bearer /i, ''), API_SECRET) as Token

			if (!id || !savedToken || savedToken.expired)
				throw ApolloError(
					'MALFORMED_INPUT',
					'Token provided is invalid or expired',
				)

			if (dayjs().diff(dayjs(savedToken.createdAt), 'days', true) >= 1) {
				await database.token.update({
					where: { token },
					data: { expired: true },
				})

				throw ApolloError(
					'MALFORMED_INPUT',
					'Token provided is invalid or expired',
				)
			}

			validatePassword(password)

			const user = await database.user.update({
				where: { id },
				data: { password: Hash(password) },
			})

			await database.token.update({
				where: { token },
				data: { expired: true },
			})

			return {
				user,
				token: signJWT({ id }),
			}
		},
	},
} as Resolvers
