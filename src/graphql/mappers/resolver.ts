/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import path from 'path'

const allResolvers: any = {}

const dirname = '../resolvers'

fs.readdirSync(path.join(__dirname, dirname)).map((file: any) => {
	allResolvers[file.slice(0, -3)] = require(path.join(
		__dirname,
		dirname,
		file,
	)).default
})

const resolvers: any = Object.values(allResolvers).reduce(
	(prev: any, cur: any) => {
		const resolvers: any = {}
		const keys = [...Object.keys(prev), ...Object.keys(cur)]
		keys.forEach(key => (resolvers[key] = { ...prev[key], ...cur[key] }))
		return resolvers
	},
)

export default resolvers
