import { database } from './context'
import cron from 'node-cron'

/* 
  Generate cron jobs expressions
  https://crontab.cronhub.io/
*/

// Run every hour
cron.schedule('0 * * * *', async () => {
	const twentyFourHoursAgo = new Date(
		new Date().setHours(new Date().getHours() - 24),
	)

	await database.token.updateMany({
		where: { createdAt: { lte: twentyFourHoursAgo } },
		data: { expired: true },
	})
})
