//Requires this module for embeds
const Discord = require('discord.js');

module.exports = {
	name: 'plans',
	description: 'Future plans for the bot.',
	aliases: [ 'future' ],
	type: 'info',
	execute(message, args) {
		const dataEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Future Plans').setDescription('**Add**\n`topic` - Similar to Topikku\'s topic command, input command and a conversation starter question returns\n`userinfo` - Information about a user, join date, date of account creation, roles, etc\n*Triggers* - Messages and responses without the use of a prefix').setFooter('This list is incomplete, will be updated when cda94581\'s mind works again');
		message.channel.send({ embeds: [ dataEmbed ]});
	},
};