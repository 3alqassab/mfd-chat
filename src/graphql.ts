require('dotenv').config()
import { ApolloServer } from 'apollo-server-express'
import { graphqlUploadExpress } from 'graphql-upload'
import ContextSetup from './context'
import express from 'express'
import schema from './graphql/mappers/schema'

import {
	ApolloServerPluginDrainHttpServer,
	ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'
import { createServer } from 'http'
import { useServer as createWebsocketServer } from 'graphql-ws/lib/use/ws'
import { WebSocketServer } from 'ws'

type HeadersType = {
	Authorization?: string
	authorization?: string
}

async function startApolloServer() {
	const app = express()
	app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }))

	const httpServer = createServer(app)

	const wsServer = new WebSocketServer({
		server: httpServer,
		path: '/',
	})

	const serverCleanup = createWebsocketServer(
		{
			schema,
			context: async ({ connectionParams, extra }) => {
				const headers = connectionParams as HeadersType

				return await ContextSetup({
					ip: extra.request.socket.remoteAddress,
					token: headers.Authorization || headers.authorization,
				})
			},
		},
		wsServer,
	)

	const server = new ApolloServer({
		schema,
		csrfPrevention: true,
		cache: 'bounded',
		context: async ({ req }) => {
			const headers = req.headers as HeadersType

			return await ContextSetup({
				ip: req.socket.remoteAddress,
				token: headers.Authorization || headers.authorization,
			})
		},
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			{
				async serverWillStart() {
					return {
						async drainServer() {
							await serverCleanup.dispose()
						},
					}
				},
			},
			ApolloServerPluginLandingPageLocalDefault({ embed: true }),
		],
	})

	await server.start()
	server.applyMiddleware({ app, path: '/' })

	const port = process.env.PORT || 4000

	httpServer.listen({ port }, () => {
		// eslint-disable-next-line no-console
		console.log(`Listening on port ${port}`)
	})
}

startApolloServer()
