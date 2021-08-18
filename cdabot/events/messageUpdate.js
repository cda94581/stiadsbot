const { embedcolors } = require('../config/config.json');
const Discord = require('discord.js');
const bannedwords = require('../config/bannedwords.json');

module.exports = async (oldMessage, newMessage) => {
	if (oldMessage.partial) {
		try {
			await oldMessage.fetch()
		} catch (error) {
			return console.error('Something went wrong: ', error);
		}
	}
	const index = require('./index');

	if (newMessage.channel.type != 'DM' && newMessage.author.id != newMessage.guild.ownerID) {
		if (bannedwords.some(phrase => newMessage.content.toLowerCase().includes(phrase))) {
			newMessage.delete();
			newMessage.channel.send({ content: `${newMessage.author}, you aren't allowed to say this phrase.` }).then(sentMsg => {
				setTimeout(() => {
					sentMsg.delete();
				}, 5000);
			});
		}
	}

	let desc = [ `**Old**:\n${oldMessage.content}\n\n**New**:\n${newMessage.content}\n\n[Jump](${newMessage.url})` ];
	for (i=0;i<desc.length;i++) {
		if (desc[i].length > 2000) {
			const tempData = desc[i];
			desc[i] = tempData.slice(0, 2000);
			desc.push(tempData.slice(2000, tempData.length));
		}

		index.log(oldMessage, new Discord.MessageEmbed().setColor(embedcolors.log).setTitle(`Message Updated in #${oldMessage.channel.name}`).setDescription(desc[i]).setTimestamp(Date.now()));
		console.log(`> ${Date().toString()}\t-\tMessage Updated in #${oldMessage.channel.name}:\n${desc[i]}`);
	}
}