const Discord = require('discord.js');
const { logchannel } = require('../config.json');

module.exports = (oldMessage, newMessage) => {
	let desc = [ `**Old**:\n${oldMessage.content}\n\n**New**:\n${newMessage.content}` ];
	for (i=0;i<desc.length;i++) {
		if (desc[i].length > 2000) {
			const tempData = desc[i];
			desc[i] = tempData.slice(0, 2000);
			desc.push(tempData.slice(2000, tempData.length));
		}
		data[0].client.channels.cache.get(logchannel).send(new Discord.MessageEmbed().setColor('#00cccc').setTitle(`Message Updated in #${data[0].channel.name}`).setDescription(desc[i]).setTimestamp(Date.now()));
		console.log(`> ${Date().toString()}\t-\tMessage Updated in #${data[0].channel.name}:\n${desc[i]}`);
	}
}