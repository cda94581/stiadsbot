const fs = require('fs'); // Loads node.js file system module

const Discord = require('discord.js'); // Requires discord.js module

const {	prefix,	token, welcomeChannel } = require ('./config.json'); // Loads prefix and token from config file

const client = new Discord.Client(); // Discord Client, requires partials for reaction roles
client.commands = new Discord.Collection(); // Collection for commands

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // Adds all commands

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// Set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// When ready, run this code
client.once('ready', () => {
	console.log('Ready!'); // Tells the console
	client.user.setPresence({ activity: { name: 'cda94581\'s Server | -help', type: 'WATCHING' }, status: 'idle'});
});

client.on('guildMemberAdd', member => {
	client.channels.cache.get(welcomeChannel).send(`Hey, ${member}, welcome to **${member.guild.name}**! You are member #${member.guild.memberCount}. Enjoy your time here!`);
});

// When a message is sent
client.on('message', message => {
	if(message.author.bot) return; // Makes sure it wasn't a bot
	let modules_json_format = require('./modules/json_format'); modules_json_format(message);
	if (!message.content.startsWith(prefix)) return; // Makes sure it starts with prefix
	const args = message.content.slice(prefix.length).trim().split(/ +/); // Message arguments
	const commandName = args.shift().toLowerCase(); // Sets the 'command' input

	const command = client.commands.get(commandName) ||	client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); // Gets the command corresponding
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
			command.execute(message, args);
		}, 2000);
	} catch (error) {
		console.error(error);
		message.channel.send('There was an error trying to execute that command');
	}
});

client.login(token); // Login