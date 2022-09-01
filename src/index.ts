require('dotenv').config()
import { ApolloServer } from 'apollo-server-lambda'
import { graphqlUploadExpress } from 'graphql-upload'
import ContextSetup from './context'
import express from 'express'
import schema from './graphql/mappers/schema'

type HeadersType = {
	Authorization?: string
	authorization?: string
}

const server = new ApolloServer({
	schema,
	context: async ({ event }) => {
		const headers = event.headers as HeadersType

		return await ContextSetup({
			ip: event.requestContext.identity.sourceIp,
			token: headers.Authorization || headers.authorization,
		})
	},
})

export const graphqlHandler = server.createHandler({
	expressAppFromMiddleware(middleware) {
		const app = express()
		app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }))
		app.use(middleware)
		return app
	},
	expressGetMiddlewareOptions: {
		cors: {
			origin: '*',
			credentials: true,
		},
	},
})
