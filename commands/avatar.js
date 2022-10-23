const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
	description: 'Get yours or another user\'s avatar',
	aliases: [ 'av', 'icon', 'pfp' ],
	usage: '[mention user(s)]',
	type: 'info',
	execute(message = Discord.Message.prototype) {
		message.channel.send({ content: `Your avatar: ${message.author.displayAvatarURL({ format: "png", dynamic: true })}` });
	}
}