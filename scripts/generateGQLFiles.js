const { prompt } = require('enquirer')
const fs = require('fs')

const createResolver = ({ singular, plural }) => {
	const upperSingular = singular.charAt(0).toUpperCase() + singular.slice(1)
	const lowerSingular = singular.charAt(0).toLowerCase() + singular.slice(1)
	const lowerPlural = plural.charAt(0).toLowerCase() + plural.slice(1)

	return `
    import { Resolvers } from '../../gql-types'

    export default {
      Query: {
        async ${lowerSingular}(_, input, { database, requireAuth }) {
          requireAuth()

          return await database.${lowerSingular}.findUnique(input)
        },

        async ${lowerPlural}(_, input, { database, requireAuth }) {
          requireAuth()

          return await database.${lowerSingular}.findMany(input)
        },

        async ${lowerPlural}Count(_, input, { database, requireAuth }) {
          requireAuth()

          return await database.${lowerSingular}.count(input)
        },
      },

      Mutation: {
        async create${upperSingular}(_, { data }, { database, requireAuth, isAdmin }) {
          requireAuth(isAdmin)

          return await database.${lowerSingular}.create({ data })
        },

        async update${upperSingular}(_, { data, where }, { database, requireAuth, isAdmin }) {
          requireAuth(isAdmin)

          return await database.${lowerSingular}.update({ where, data })
        },

        async delete${upperSingular}(_, input, { database, requireAuth, isAdmin }) {
          requireAuth(isAdmin)

          return await database.${lowerSingular}.delete(input)
        },
      },
    } as Resolvers
  `
}

const createSchema = ({ singular, plural }) => {
	const upperSingular = singular.charAt(0).toUpperCase() + singular.slice(1)
	const lowerSingular = singular.charAt(0).toLowerCase() + singular.slice(1)
	const lowerPlural = plural.charAt(0).toLowerCase() + plural.slice(1)

	return `
    extend type Query {
      ${lowerSingular}(where: ${upperSingular}WhereUniqueInput!): ${upperSingular}
      ${lowerPlural}(
        where: ${upperSingular}WhereInput = {}
        orderBy: [${upperSingular}OrderByInput!] = [{ createdAt: "desc" }]
        take: Int = 10
        skip: Int = 0
      ): [${upperSingular}!]!
      ${lowerPlural}Count(where: ${upperSingular}WhereInput = {}): Int
    }
    
    extend type Mutation {
      create${upperSingular}(data: ${upperSingular}CreateInput!): ${upperSingular}
      update${upperSingular}(where: ${upperSingular}WhereUniqueInput!, data: ${upperSingular}UpdateInput!): ${upperSingular}
      delete${upperSingular}(where: ${upperSingular}WhereUniqueInput!): ${upperSingular}
    }
    
    
    type ${upperSingular} {
      id: ID!
    
      createdAt: Date!
      updatedAt: Date!
    }
    
    input ${upperSingular}WhereUniqueInput {
      id: ID
    }
    
    input ${upperSingular}WhereInput {
      AND: [${upperSingular}WhereInput!]
      OR: [${upperSingular}WhereInput!]
      NOT: [${upperSingular}WhereInput!]
      id: IDFilter
    }
    
    input ${upperSingular}CreateInput {
      id: ID
    }
    
    input ${upperSingular}UpdateInput {
      id: ID
    }
    
    
    input ${upperSingular}OrderByInput {
      id: OrderDirection
    
      createdAt: OrderDirection
  }  
  `
}

const run = async () => {
	const { singular, plural } = await prompt([
		{
			type: 'input',
			name: 'singular',
			message: 'What is the singular name?',
		},
		{
			type: 'input',
			name: 'plural',
			message: 'What is the plural name?',
		},
	])

	const path = `./src/graphql`

	const resolver = fs.createWriteStream(
		`${path}/resolvers/${singular.toLowerCase()}.ts`,
	)
	resolver.write(createResolver({ singular, plural }))
	resolver.end()

	const schema = fs.createWriteStream(
		`${path}/schemas/${singular.toLowerCase()}.graphql`,
	)
	schema.write(createSchema({ singular, plural }))
	schema.end()
}

run()
