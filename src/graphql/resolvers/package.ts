import { Resolvers } from '../../gql-types'

export default {
	Query: {
		async package(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.package.findUnique(input)
		},

		async packages(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.package.findMany(input)
		},

		async packagesCount(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.package.count(input)
		},
	},

	Mutation: {
		async createPackage(_, { data }, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.package.create({ data })
		},

		async updatePackage(
			_,
			{ data, where },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			return await database.package.update({ where, data })
		},

		async deletePackage(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.package.delete(input)
		},
	},
} as Resolvers
