//Requires this module for embeds
const Discord = require('discord.js');

module.exports = {
	name: 'modifications',
	description: 'Information about cda94581 modifications',
	execute(message, args) {
		const modificationEmbed = new Discord.MessageEmbed()
			.setColor('#ff0000').setTitle('Cda94581 Modifications')
			.setDescription('*and here comes another day of explanations*\nEvery week, one person may submit modifiers for <@!581251728725377126> for a day on Tuesday.\nUsing <@!294882584201003009>, a person who wants to be selected will be selected to modify one or more attributes.\nThe person will then temporarily be given the <@&760620916152860702> role, which will give them access to post in <#760620082723291146>.\nAfterwards, the modifications will take place the following Tuesday, for 1 day, and the <@&760620916152860702> role will be replaced with the <@&760622288348381224> role.\nSome modifications may not take place if another modification has already been assigned for that Tuesday.\n**Note that <@!581251728725377126> has the right to deny a modification if needed**\nAlso ignore the fact the Bot calls it a Giveaway :sweat_smile:');
		message.channel.send(modificationEmbed);
	},
};