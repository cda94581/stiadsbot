const Discord = require('discord.js');
const { misc: { feedback } } = require('../config.json');

module.exports = async (message = Discord.Message.prototype) => {
	if (message.author.bot || !message.content.toLowerCase().startsWith('suggestion')) return;
	if (message.channel.id == feedback) {
		await message.react('⬆');
		await message.react('⬇');
		message.startThread({ name: message.content, autoArchiveDuration: 1440, reason: 'New Suggestion.' }).then(threadChannel => { threadChannel.join() });
	}
}