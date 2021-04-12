const fs = require('fs'); // Loads node.js file system module

const Discord = require('discord.js'); // Requires discord.js module

const {	prefix,	token, welcomechannel, reactionroles } = require ('./config.json'); // Loads prefix, token, and rr stuff from config file

const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }); // Discord Client, requires partials for reaction roles
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
	const acchat = require('./modules/acchat');
	acchat(client);
});

// Welcome messages
client.on('guildMemberAdd', member => {
	member.guild.channels.cache.get(welcomechannel).send(`Hey ${member}, welcome to ${member.guild.name}! Please read <#712440948302544986> before chatting! You are member #${member.guild.memberCount} You shall be Awesome 4ever!:joy:`); // Send message

	console.log(`Member joined - ${member.user.username}#${member.user.discriminator}`); // Tells console
});

// When a message is sent
client.on('message', message => {
	const leveling = require('./modules/leveling'); // Loads leveling.js file
	leveling(message); // Runs leveling function each time a message is sent
	if(!message.content.startsWith(prefix) || message.author.bot) return; // Makes sure it starts with prefix, and wasn't a bot
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
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send('There was an error trying to execute that command');
	}
});

client.on('messageReactionAdd', async (messageReaction, user) => { // When someone reacts
	if (messageReaction.partial) { // If only partial message
		try { // Possibly can cause errors
			await messageReaction.fetch(); // Get the information 
		} catch { // If there's an error
			return console.error('Something went wrong: ', error);
		}
	}
	for (i in reactionroles) {
		if ((messageReaction.message.channel.id == reactionroles[i].channel) && (messageReaction.message.id == reactionroles[i].message) || (messageReaction.emoji.id == reactionroles[i].emoji)) {
			const role = messageReaction.message.member.guild.roles.cache.find(role => role.id == reactionroles[i].role); // Set role variable
			const member = messageReaction.message.member.guild.members.cache.find(member => member.id == user.id); // Find the member who reacted
			member.roles.add(role); // Add role
		}
	}
});

client.on('messageReactionRemove', async (messageReaction, user) => { // when someone removes reaction
	if (messageReaction.partial) { // If only partial message
		try { // Possibly can cause errors
			await messageReaction.fetch(); // Get the information 
		} catch { // If there's an error
			return console.error('Something went wrong: ', error);
		}
	}
	for (i in reactionroles) {
		if ((messageReaction.message.channel.id == reactionroles[i].channel) && (messageReaction.message.id == reactionroles[i].message) || (messageReaction.emoji.id == reactionroles[i].emoji)) {
			const role = messageReaction.message.member.guild.roles.cache.find(role => role.id == reactionroles[i].role); // Set role variable
			const member = messageReaction.message.member.guild.members.cache.find(member => member.id == user.id); // Find the member who unreacted
			member.roles.remove(role); // Remove role
		}
	}
});

client.login(token); // Login