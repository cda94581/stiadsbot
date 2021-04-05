const { prefix } = require('../config.json');

const Discord = require('discord.js'); // Needs this for embeds

module.exports = {
	name: 'help',
	description: 'help',
	aliases: [ 'commands' ],
	usage: '[command name]',
	execute (message, args, client) {
		const data = [];
		const {	commands } = message.client;
		let helpEmbed;
		if (!args.length) { // If it was just 'help', with no specific command
			data.push('Here\'s a list of all my commands:');
			data.push(commands.map(command => command.name).join('\n'));
			data.push(`You can send \`${prefix}help [command name]\` to get information on a specific command`);
			helpEmbed = new Discord.MessageEmbed().setColor('#0077ff').setTitle('Awesome Bot Help').setDescription(data);
			return message.channel.send(helpEmbed);
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
		if (!command) return message.channel.send('That\'s not a valid command');
		if (command.aliases) data.push(`**Aliases**: ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description**: ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
		helpEmbed = new Discord.MessageEmbed().setColor('#0000ff').setTitle(command.name).setDescription(data);
		message.channel.send(helpEmbed);
	}
}