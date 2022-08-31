import { validate as emailValidation } from 'email-validator'
import ERRORS, { ApolloError } from './errors'

export const validatePassword = (password: string) => {
	let valid = true

	if (password.length < 8) valid = false
	if (password.length > 255) valid = false

	const tests = [/^(?=.*[A-Z])/, /^(?=.*[0-9])/, /^(?=.*[!@#$%^&*])/]

	tests.forEach(test => {
		if (!test.test(password)) valid = false
	})

	if (!valid)
		throw ApolloError(
			ERRORS.MALFORMED_INPUT,
			'Password must at least 8 characters, contain at least one uppercase letter, one number, and one special character',
		)
}

export const validateEmail = (email: string) => {
	if (!emailValidation(email))
		throw ApolloError(
			ERRORS.MALFORMED_INPUT,

			'Please provide a valid email address',
		)
}
