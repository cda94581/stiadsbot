//Requires this module for embeds
const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Get information about the server',
    aliases: [ 'serverinfo', 'server-info' ],
	execute(message, args) {
		const serverEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(`${message.guild.name}`).setDescription(`Total members: ${message.guild.memberCount}\nCreated on: ${message.guild.createdAt}\nServer region: ${message.guild.region}\nCurrent owner: ${message.guild.owner}`);
		message.channel.send(serverEmbed);
	},
};