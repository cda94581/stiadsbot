const Discord = require('discord.js');
const { misc: { nVwls } } = require('../config.json');

module.exports = async (message = Discord.Message.prototype) => {
	if (message.author.bot || message.channel.id != nVwls) return;

	if (message.content.toLowerCase().match(/[aeiou]/g)) {
		await message.reply({ content: 'n vwls smh' })
			.then(sentMessage => setTimeout(() => sentMessage.delete(), 10000));
		await message.delete();
	}
}