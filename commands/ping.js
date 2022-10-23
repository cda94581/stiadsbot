const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Pings to bot to see if it\'s still alive',
	type: 'info',
	execute(message = Discord.Message.prototype) {
		const ping = Math.round(message.guild.shard.ping);
		message.channel.send({ content: `Pong. \`${ping}ms\`` });
	}
}