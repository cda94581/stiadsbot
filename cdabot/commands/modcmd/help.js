const Discord = require('discord.js');
const { prefix } = require('../../config.json');

module.exports = {
	name: 'help',
	description: 'List and Usage of all Mod Commands',
	usage: '[help|modcmd name]',
	execute(message, args) {
		let data = [];
		const { modcmds } = require('../modcmd');
		if (args.length) { // If it asks for a specific modcmd help
			const name = args[0].toLowerCase();
			const modcmd = modcmds.get(name) || modcmds.find(c => c.aliases && c.aliases.includes(name));
			if (!modcmd) return message.channel.send({ content: 'That\'s not a valid Mod Command' });
			data[0] = '';
			if (modcmd.aliases) data[0] += `**Aliases**: ${modcmd.aliases.join(', ')}\n`;
			if (modcmd.description) data[0] += `**Description**: ${modcmd.description}\n`;
			if (modcmd.usage) data[0] += `**Usage:** ${prefix}${modcmd.name} ${modcmd.usage}`;
			return message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('#44434d').setTitle(modcmd.name).setDescription(data[0]) ]});
		}
		data[0] = 'Here\'s a list of all my Mod Commands:\n`';
		data[0] += modcmds.map(modcmd => modcmd.name).join('`\n`');
		data[0] += `\`\n\nYou can send \`${prefix}modcmd help [modcmd name]\` to get information on a specific Mod Command`;
		for (i = 0; i < data.length; i++) {
			if (data[i].length > 2000) { // If past character limit
				let tempData = data[i];
				data[i] = tempData.slice(0, 2000);
				data.push(tempData.slice(2000, tempData.length));
			}
			message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor('#444444').setTitle('CdaBot Mod Command Help').setDescription(data[i]) ]});
		}
	}
}