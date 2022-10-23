const Discord = require('discord.js');

module.exports = {
	name: 'moon',
	description: 'A mysterious moon :spy:',
	type: 'fun',
	execute(message = Discord.Message.prototype) {
		const embed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('The Mysterious Moon :spy:')
			.setDescription('A moon with a face. Who knows where they came from? All I know is that they, with their `hack-giveaway bot 9000`, has won the most out of anyone, with 5 wins, 3 of them all in a row.\nDangerous: Do not mess with them.').setThumbnail('https://cdn.discordapp.com/avatars/702558687910166608/80986d82498dac8a59523056975fca25.png');
		message.channel.send({ embeds: [ embed ]});
	}
}