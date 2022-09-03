import { ApolloError } from './functions/errors'
import { PrismaClient } from '@prisma/client'
import { User } from './gql-types'
import { verify } from 'jsonwebtoken'

export const database = new PrismaClient()

export type Context = {
	database: PrismaClient
	user?: Pick<User, 'id' | 'role'>
	isAdmin: boolean
	educatorId?: string
	studentId?: string
	requireAuth: (statement?: boolean) => void
	ip: string
}

type Request = {
	token?: string
	ip?: string
}

export type Token = {
	id: string
}

export default async function ContextSetup({ ip, token }: Request) {
	const API_SECRET = process.env.API_SECRET

	if (!API_SECRET)
		throw new Error('The API_SECRET environment variable must be set')

	if (!token)
		return {
			database,
			isAdmin: false,
			requireAuth() {
				throw ApolloError('NO_TOKEN')
			},
			ip,
		}

	const { id } = verify(
		token.replace(/^Bearer /i, ''),
		API_SECRET,
		(err, decoded) => {
			if (err) throw ApolloError('INVALID_TOKEN')

			return decoded
		},
	) as unknown as Token

	const user = await database.user.findUniqueOrThrow({
		where: { id },
		select: {
			id: true,
			role: true,
			educator: { select: { id: true } },
			student: { select: { id: true } },
		},
	})

	return {
		database,
		user: { id: user.id, role: user.role },
		isAdmin: user.role === 'ADMIN',
		educatorId: user.educator?.id,
		studentId: user.student?.id,
		requireAuth(statement = true) {
			if (!statement) throw ApolloError('UNAUTHORIZED')
		},
		ip,
	}
}
