import { Resolvers } from '../../gql-types'

export default {
	Query: {
		async organization(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.organization.findUnique(input)
		},

		async organizations(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.organization.findMany(input)
		},

		async organizationsCount(_, input, { database, requireAuth }) {
			requireAuth()

			return await database.organization.count(input)
		},
	},

	Mutation: {
		async createOrganization(
			_,
			{ data: { image, name, nameAr } },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			return await database.organization.create({
				data: {
					name,
					nameAr,
					imageUrl: image,
				},
			})
		},

		async updateOrganization(
			_,
			{ data: { image, name, nameAr }, where },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			return await database.organization.update({
				where,
				data: {
					name,
					nameAr,
					imageUrl: image,
				},
			})
		},

		async deleteOrganization(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.organization.delete(input)
		},
	},
} as Resolvers
