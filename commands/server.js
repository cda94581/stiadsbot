const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Get information about the server',
	aliases: [ 'serverinfo', 'server-info' ],
	type: 'info',
	execute(message = Discord.Message.prototype) {
		const embed = new Discord.MessageEmbed().setColor('#ff0000')
			.setTitle(`${message.guild.name}`).setDescription(`Total members: ${message.guild.memberCount}\nCreated on: ${message.guild.createdAt}\nCurrent owner: <@!${message.guild.ownerId}>`);
		message.channel.send({ embeds: [ embed ]});
	}
}