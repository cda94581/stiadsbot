const fs = require('fs');
const path = require('path');
const https = require('https');
const xml = require('xml2js');

module.exports = {
	run(client) {
		let config = require('../config.json');
		const filePath = path.resolve(__dirname, '../config.json');
		const channels = Object.keys(config.youtube.channels);
		channels.forEach(channel => {
			https.get(`https://www.youtube.com/feeds/videos.xml?channel_id=${channel}`, res => {
				let data = [];
				res.on('data', chunk => data.push(chunk));
				res.on('end', async () => {
					data = await xml.parseStringPromise(Buffer.concat(data).toString());
					const video = data.feed.entry[0]['yt:videoId'][0];
					const name = data.feed.author[0].name[0];
					const link = `https://youtu.be/${video}`;
					const message = config.youtube.message.replaceAll('{{channel}}', name).replaceAll('{{link}}', link);
					if (config.youtube.channels[channel].includes(video)) return;
					config.youtube.channels[channel].unshift(video);
					client.channels.cache.get(config.youtube.channel).send({ content: message });
					fs.writeFileSync(filePath, JSON.stringify(config, null, '\t'), 'utf-8');
				});
			});
		});
		setTimeout(() => this.run(client), 60000);
	}
}