import { client } from '../index.js';
import config from '../config.json' assert { type: 'json' };
const { misc } = config; const { threadChannels } = misc;

const run = async () => {
	const time = new Date();
	if (time.getUTCHours() >= 0) time.setUTCDate(time.getUTCDate() + 1);
	time.setUTCHours(0, 0, 0, 0);
	
	setTimeout(async () => {
		Object.keys(threadChannels).forEach(async c => {
			const channel = client.channels.cache.get(c);
			const activeThreads = await channel.threads.fetchActive()
			activeThreads.threads.forEach(async thread => {
				await thread.setArchived(true);
				await thread.setArchived(false);
			});
			const archivedThreads = await channel.threads.fetchArchived()
			archivedThreads.threads.forEach(async thread => await thread.setArchived(false));
		});
		await run(client);
	}, time.valueOf() - Date.now());
}

client.once('ready', run);