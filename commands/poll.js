const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'poll',
	description: 'Start a poll',
	usage: '<name> <options (up to 10)>',
	args: true,
	execute(message = Discord.Message.prototype) {
		let pollOptions = '';
		let react = '';
		const numbers = [ '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟' ];
		const args = message.content.slice(`${prefix}poll`.length).trim().split(/,/);

		for (i = 1; i < args.length; i++) {
			pollOptions += `${i}. ${args[i].trim()}\n`;
			react += `sentEmbed.react('${numbers[i - 1]}');\n`;
		}

		const embed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Poll! (Beta) - ' + args[0]).setDescription('**Options:**\n' + pollOptions);

		message.channel.send({ embeds: [ embed ]}).then(sentEmbed => { eval(react) });
	}
}