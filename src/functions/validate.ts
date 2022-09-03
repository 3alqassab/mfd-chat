import { ApolloError } from './errors'
import { validate as emailValidation } from 'email-validator'
const validatePhoneNumber = require('validate-phone-number-node-js') as {
	validate: (phoneNumber: string) => boolean
}

export const validatePassword = (password: string) => {
	let valid = true

	if (password.length < 8) valid = false
	if (password.length > 255) valid = false

	const tests = [/^(?=.*[A-Z])/, /^(?=.*[0-9])/, /^(?=.*[!@#$%^&*])/]

	tests.forEach(({ test }) => {
		if (!test(password)) valid = false
	})

	if (valid) return

	throw ApolloError(
		'MALFORMED_INPUT',
		'Password must have at least 8 characters, contain at least one uppercase letter, one number, and one special character',
	)
}

export const validateEmail = (email: string) => {
	if (emailValidation(email)) return

	throw ApolloError('MALFORMED_INPUT', 'Please provide a valid email address')
}

export const validateMobile = (mobile: string) => {
	if (validatePhoneNumber.validate(mobile)) return

	throw ApolloError(
		'MALFORMED_INPUT',
		'Please provide a valid mobile number (e.g. +97333123456)',
	)
}
