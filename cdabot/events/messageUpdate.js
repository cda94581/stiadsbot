const Discord = require('discord.js');

module.exports = (oldMessage, newMessage) => {
	const index = require('./index');

	let desc = [ `**Old**:\n${oldMessage.content}\n\n**New**:\n${newMessage.content}` ];
	for (i=0;i<desc.length;i++) {
		if (desc[i].length > 2000) {
			const tempData = desc[i];
			desc[i] = tempData.slice(0, 2000);
			desc.push(tempData.slice(2000, tempData.length));
		}

		index.log(oldMessage, new Discord.MessageEmbed().setColor('#00cccc').setTitle(`Message Updated in #${oldMessage.channel.name}`).setDescription(desc[i]).setTimestamp(Date.now()));
		console.log(`> ${Date().toString()}\t-\tMessage Updated in #${oldMessage.channel.name}:\n${desc[i]}`);
	}
}