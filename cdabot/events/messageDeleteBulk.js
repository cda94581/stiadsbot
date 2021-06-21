const Discord = require('discord.js');
const { logchannel } = require('../config.json');

module.exports = messages => {
	const data = messages.map(m => m);
	const authors = messages.map(m => m.author).reverse();
	const content = messages.map(m => m.content).reverse();
	let desc = [ '' ];
	for (i=0;i<data.length;i++) {
		desc[0] += `[${authors[i]}] ${content[i]}\n`;
	}
	for (i=0;i<desc.length;i++) {
		if (desc[i].length > 2000) {
			const tempData = desc[i];
			desc[i] = tempData.slice(0, 2000);
			desc.push(tempData.slice(2000, tempData.length));
		}
		data[0].client.channels.cache.get(logchannel).send(new Discord.MessageEmbed().setColor('#00cccc').setTitle(`Bulk Messages Deleted in #${data[0].channel.name}`).setDescription(desc[i]).setTimestamp(Date.now()));
		console.log(`> ${Date().toString()}\t-\tBulk Messages Deleted in #${data[0].channel.name}:\n${desc[i]}`);
	}
}