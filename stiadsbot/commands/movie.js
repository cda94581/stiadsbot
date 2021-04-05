//Requires this module for embeds
const Discord = require('discord.js');

module.exports = {
	name: 'movie',
	description: 'Information about a cda94581 movie',
	type: 'info',
	execute(message, args) {
		const movieEmbed = new Discord.MessageEmbed()
			.setColor('#ff0000').setTitle('Movie')
			.setDescription('Apparently people were talking about a movie, so the channels, <#778113875048005653> and <#778117741118226443> were created to discuss and write the script, respectively. Members with the <@&778114705759666197> role will be given access. For fun ofc :p\nCurrently looking for ideas for how I hand this role out, plus a potential color for this');
		message.channel.send(movieEmbed);
	},
};