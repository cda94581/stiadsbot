const { misc: { threadChannels } } = require('../config.json');

module.exports = {
	run(client) {
		const time = new Date();
		if (time.getUTCHours() >= 0) time.setUTCDate(time.getUTCDate() + 1);
		time.setUTCHours(0, 0, 0, 0);
	
		setTimeout(() => {
			Object.keys(threadChannels).forEach(c => {
				const channel = client.channels.cache.get(c);
				channel.threads.fetchActive().then(threads => threads.threads.forEach(thread => {
					thread.setArchived(true);
					thread.setArchived(false);
				}));
				channel.threads.fetchArchived()
					.then(threads => threads.threads.forEach(thread => thread.setArchived(false)));
			});
			this.run(client);
		}, time.valueOf() - Date.now());
	}
}