//Requires this module for embeds
const Discord = require('discord.js');

module.exports = {
	name: 'movie',
	description: 'Information about a cda94581 movie',
	type: 'info',
	execute(message = Discord.Message.prototype) {
		const embed = new Discord.MessageEmbed()
			.setColor('#ff0000').setTitle('Movie')
			.setDescription('Apparently people were talking about a movie, so channels were created to discuss and write the script, respectively. Members with the <@&778114705759666197> role will be given access. For fun ofc :p\nCurrently looking for ideas for how I hand this role out, plus a potential color for this');
		message.channel.send({ embeds: [ embed ]});
	}
}