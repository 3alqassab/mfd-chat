import { createHmac } from 'crypto'

export default function Hash(password: string) {
	const API_SECRET = process.env.API_SECRET

	if (!API_SECRET)
		throw new Error('The API_SECRET environment variable must be set')

	return createHmac('sha256', API_SECRET).update(password).digest('hex')
}
