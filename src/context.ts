import { PrismaClient } from '@prisma/client'
import { User } from './gql-types'
import { verify } from 'jsonwebtoken'
import ERRORS, { ApolloError } from './functions/errors'
import Hash from './functions/hash'

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
	headers: {
		Authorization?: string
		authorization?: string
	}
	requestContext?: {
		identity?: {
			sourceIp?: string
		}
	}
	socket?: {
		remoteAddress?: string
	}
}

export type Token = {
	id: string
}

export default async function ContextSetup({
	headers,
	requestContext,
	socket,
}: Request) {
	const API_SECRET = process.env.API_SECRET

	if (!API_SECRET)
		throw new Error('The API_SECRET environment variable must be set')

	// // Create main user
	// await database.user.create({
	// 	data: {
	// 		id: '091dae42-729d-4fbe-9bdd-f85aed64c66e',
	// 		email: 'aliq@aacademybh.com',
	// 		firstName: 'Ali',
	// 		lastName: 'AlQassab',
	// 		gender: 'MALE',
	// 		mobile: '+97332122208',
	// 		password: Hash('11111111'),
	// 		educator: {
	// 			create: {
	// 				active: true,
	// 			},
	// 		},
	// 		student: {
	// 			create: {
	// 				level: 'UNIVERSITY',
	// 				batch: '2017',
	// 				major: 'Marketing',
	// 				university: {
	// 					create: {
	// 						name: {
	// 							create: {
	// 								name: 'Bahrain Polytechnic',
	// 								nameAr: 'بوليتكنك البحرين',
	// 							},
	// 						},
	// 					},
	// 				},
	// 				school: {
	// 					create: {
	// 						name: {
	// 							create: {
	// 								name: 'Ahmed AlOmran',
	// 								nameAr: 'أحمد العمران',
	// 							},
	// 						},
	// 					},
	// 				},
	// 			},
	// 		},
	// 		wallet: {
	// 			create: {},
	// 		},
	// 		role: 'ADMIN',
	// 	},
	// })

	// // Reset User
	// await database.user.delete({ where: { id: '091dae42-729d-4fbe-9bdd-f85aed64c66e' } })

	const token = headers.Authorization || headers.authorization

	if (token) {
		const { id } = verify(
			token.replace(/^Bearer /i, ''),
			API_SECRET,
			(err, decoded) => {
				if (err) {
					throw ApolloError(ERRORS.INVALID_TOKEN)
				}

				return decoded
			},
		) as unknown as Token

		const user = await database.user.findUniqueOrThrow({
			where: { id },
			include: {
				educator: true,
				student: true,
			},
		})

		return {
			database,
			user: { id: user.id, role: user.role },
			isAdmin: user.role === 'ADMIN',
			educatorId: user.educator?.id,
			studentId: user.student?.id,
			requireAuth(statement?: boolean) {
				if (statement === false) throw ApolloError(ERRORS.UNAUTHORIZED)
			},
			ip: requestContext?.identity?.sourceIp || socket?.remoteAddress,
		}
	}

	return {
		database,
		isAdmin: false,
		requireAuth() {
			throw ApolloError(ERRORS.NO_TOKEN)
		},
		ip: requestContext?.identity?.sourceIp || socket?.remoteAddress,
	}
}
