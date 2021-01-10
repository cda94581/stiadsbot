//Requires this module for embeds
const Discord = require('discord.js');

module.exports = {
	name: 'plans',
	description: 'Future plans for the bot.',
    aliases: [ 'future' ],
	execute(message, args) {
		const dataEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Future Plans').setDescription('**Add**\n`hug` - Similar to Mantaro\'s hug command, sends an anime hugging gif\n`pout` - Similar to Mantaro\'s pout command, sends an anime pouting gif\n`topic` - Similar to Topikku\'s topic command, input command and a conversation starter question returns\n`userinfo` - Information about a user, join date, date of account creation, roles, etc\n*Triggers* = Messages and responses without the use of a prefix\n\n**Modify/Fix/Update**\n`slap` - Remove the placeholder \'this must hurt\' title with mentioned members\n*Music* - Queuing as opposed to overwriting the current playing track, more commands such as `stop`, `queue`, etc.\n*Perms* - Refine perm/role only commands').setFooter('This list is incomplete, will be updated when cda94581\'s mind works again');
		message.channel.send(dataEmbed);
	},
};