const Discord = require('discord.js');

module.exports = {
	name: 'schedule',
	description: 'Content Schedule',
	execute(message, args) {
		message.channel.send(new Discord.MessageEmbed().setColor('#cc0000').setTitle('Content Schedule').setDescription('New videos [hopefully] Tuesdays at 2:00 CT\nStreams when cda94581 has time to do so'));
	}
}