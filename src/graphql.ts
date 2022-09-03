require('dotenv').config()
import './cron-jobs'
import { ApolloServer } from 'apollo-server-express'
import {
	ApolloServerPluginDrainHttpServer,
	ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'
import { createServer } from 'http'
import { graphqlUploadExpress } from 'graphql-upload'
import { useServer } from 'graphql-ws/lib/use/ws'
import { WebSocketServer } from 'ws'
import ContextSetup from './context'
import express from 'express'
import rateLimit from 'express-rate-limit'
import schema from './graphql/mappers/schema'

type HeadersType = {
	Authorization?: string
	authorization?: string
}

async function startApolloServer() {
	const app = express()

	const httpServer = createServer(app)

	const wsServer = new WebSocketServer({
		server: httpServer,
		path: '/',
	})

	const serverCleanup = useServer(
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

	// Enable file uploads (20MB max)
	app.use(graphqlUploadExpress({ maxFileSize: 20 * 1000000, maxFiles: 10 }))

	// Enable rate limiting
	app.use(
		rateLimit({
			windowMs: 5 * 60 * 1000, // 5 minutes
			max: 200, // Limit each IP to 200 requests per `window` (here, per 5 minutes)
			standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
			legacyHeaders: false, // Disable the `X-RateLimit-*` headers
		}),
	)

	await server.start()
	server.applyMiddleware({ app, path: '/' })

	const port = process.env.PORT || 4000

	httpServer.listen({ port }, () => {
		// eslint-disable-next-line no-console
		console.log(`Listening on port ${port}`)
	})
}

startApolloServer()
