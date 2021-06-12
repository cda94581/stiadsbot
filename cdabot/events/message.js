const modules_json_format = require('../modules/json_format');
const modmessaging = require('../modules/modmessaging');
const { prefix } = require('../config.json');

module.exports = message => {
	if(message.author.bot) return; // Makes sure it wasn't a bot
	modules_json_format(message);
	modmessaging(message, message.client);
	runCommand(message);
	runTrigger(message);

	function runCommand(message) {
		if (!message.content.startsWith(prefix)) return; // Makes sure it starts with prefix
		const args = message.content.slice(prefix.length).trim().split(/ +/); // Message arguments
		const commandName = args.shift().toLowerCase(); // Sets the 'command' input
	
		const command = message.client.commands.get(commandName) ||	message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); // Gets the command corresponding
		if (!command) return; // If couldn't get a command
	
		if (command.guildOnly && message.channel.type === 'dm') return message.channel.send('I can\'t execute this command inside DMs'); // If guildOnly
		if (command.perms && !message.member.hasPermission(command.perms)) return message.channel.send('You don\'t have the permission to use this command'); // If requires certain permission
	
		// If required arguments, and doesn't have any
		if (command.args && !args.length) {
			let reply = 'You didn\'t provide any arguments';
			if (command.usage) reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``; // If has a usage, add it to the reply
			return message.channel.send(reply); // Send reply
		}
	
		// Attempts to execute command
		try {
			message.channel.startTyping();
			setTimeout(() => {
				message.channel.stopTyping(true);
				return command.execute(message, args);
			}, 2000);
		} catch (error) {
			console.error(error);
			return message.channel.send('There was an error trying to execute that command');
		}
	}
	
	function runTrigger(message) {
		for ( const trigger of message.client.triggers ) {
			if (trigger[1].type == 'contain' && !trigger[1].names.some(name => message.content.toLowerCase().includes(name))) return;
			if (trigger[1].type == 'exact' && !trigger[1].names.some(name => message.content.toLowerCase() == name)) return;
			if (trigger.channels && !trigger.channels.some(channel => message.channel.id == channel)) return;
			try {
				message.channel.startTyping();
				setTimeout(() => {
					message.channel.stopTyping(true);
					return trigger[1].execute(message);
				}, 2000);
			} catch (error) {
				console.error(error);
				return message.channel.send('There was an error trying to execute that trigger');
			}
		}
	}
}