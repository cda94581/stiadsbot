const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Am I alive? And how long does it take me to respond to the server?',
	execute(message) {
		message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('#cc0000').setTitle('Pong!').setDescription(`\`${Math.round(message.guild.shard.ping)}\`ms`) ]});
	}
}