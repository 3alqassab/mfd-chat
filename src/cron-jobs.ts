import { database } from './context'
import cron from 'node-cron'

/* 
  Generate cron jobs expressions
  https://crontab.cronhub.io/
*/

// Run every hour
cron.schedule('0 * * * *', async () => {
	// 24 hours ago
	const yesterday = new Date()
	yesterday.setDate(yesterday.getDate() - 1)

	// Expire all tokens that are older than 24 hours
	await database.token.updateMany({
		where: { createdAt: { lte: yesterday } },
		data: { expired: true },
	})
})
