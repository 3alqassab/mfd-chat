/* eslint-disable @typescript-eslint/no-explicit-any */
import 'graphql-import-node'
import { makeExecutableSchema } from '@graphql-tools/schema'
import fs from 'fs'
import path from 'path'
import resolvers from './resolver'

const dirname = '../schemas'

const typeDefs = fs
	.readdirSync(path.join(__dirname, dirname))
	.map((file: any) => require(path.join(__dirname, dirname, file)))

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
