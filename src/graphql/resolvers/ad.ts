import { Prisma } from '@prisma/client'
import { Resolvers } from '../../gql-types'

export default {
	Query: {
		async ad(_, input, { database }) {
			return await database.ad.findUnique(input)
		},

		async ads(_, input, { database }) {
			return await database.ad.findMany(input)
		},

		async adsCount(_, input, { database }) {
			return await database.ad.count(input)
		},
	},

	Mutation: {
		async createAd(
			_,
			{ data: { title, titleAr, image } },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const data: Prisma.AdCreateInput = {
				title,
				titleAr,
				imageUrl: image,
			}

			return await database.ad.create({ data })
		},

		async updateAd(
			_,
			{ data: { title, titleAr, image }, where },
			{ database, requireAuth, isAdmin },
		) {
			requireAuth(isAdmin)

			const data: Prisma.AdUpdateInput = {
				title,
				titleAr,
				imageUrl: image,
			}

			return await database.ad.update({ where, data })
		},

		async deleteAd(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.ad.delete(input)
		},
	},
} as Resolvers
