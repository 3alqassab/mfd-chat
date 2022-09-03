import { ApolloError as APError } from 'apollo-server-errors'

const ERRORS = {
	NOT_FOUND: {
		code: '404',
		message: 'Not Found',
	},
	INCORRECT_PASSWORD: {
		code: '401',
		message: 'Password is incorrect',
	},
	USER_EXISTS: {
		code: '409',
		message: 'User already exists',
	},
	INTERNAL_ERROR: {
		code: '500',
		message: 'Internal Server Error',
	},
	MALFORMED_INPUT: {
		code: '400',
		message: 'Malformed input',
	},
	UNAUTHORIZED: {
		code: '401',
		message: 'You do not have access to this resource',
	},
	INVALID_TOKEN: {
		code: '401',
		message: 'Invalid token provided',
	},
	NO_TOKEN: {
		code: '401',
		message: 'Authorization token is required',
	},
}

export const ApolloError = (error: keyof typeof ERRORS, ...errors: string[]) =>
	new APError(ERRORS[error].message, ERRORS[error].code, { errors })
