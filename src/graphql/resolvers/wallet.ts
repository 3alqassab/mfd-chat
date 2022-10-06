import { Resolvers } from '../../gql-types'

export default {
	Purchase: {
		async class({ classId }, __, { database }) {
			if (!classId) return null

			return await database.class.findUnique({
				where: { id: classId },
			})
		},

		async wallet({ walletId }, __, { database }) {
			return await database.wallet.findUnique({
				where: { id: walletId },
			})
		},
	},

	Wallet: {
		async purchases({ id }, __, { database }) {
			return await database.purchase.findMany({ where: { walletId: id } })
		},
	},

	Query: {
		async myWallet(_, __, { database, requireAuth, user }) {
			requireAuth()

			return await database.wallet.findUnique({ where: { userId: user?.id } })
		},

		async wallets(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.wallet.findMany(input)
		},

		async walletsCount(_, input, { database, requireAuth, isAdmin }) {
			requireAuth(isAdmin)

			return await database.wallet.count(input)
		},
	},

	Mutation: {
		async purchasePackage(
			_,
			{ data: { packageId } },
			{ database, requireAuth, user },
		) {
			requireAuth()

			const Package = await database.package.findUniqueOrThrow({
				where: { id: packageId },
			})

			return await database.purchase.create({
				data: {
					price: Package.price,
					type: 'POINTS',
					packageName: Package.name,
					packageNameAr: Package.nameAr,
					points: Package.points,
					wallet: { connect: { userId: user?.id } },
				},
			})
		},
	},
} as Resolvers
