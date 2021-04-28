// Load node.js's file system module, to get command files
const fs = require('fs');

// Require the discord.js module
const Discord = require('discord.js');

// Load the prefix and token from the config.json file
const {	prefix,	token, welcomechannel, reactionroles } = require('./config.json');

// Create a new Discord client
const client = new Discord.Client({ partials: ['CHANNEL', 'MESSAGE', 'REACTION']});
client.commands = new Discord.Collection();

// Adds all command files that are in the "commands" directory and ends with ".js"
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// Set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

// When the client is ready, run this code
// This event will only trigger one time after logging in
client.once('ready', () => {
	// Tells the console this is ready
	console.log('Ready!');
	// Activities/Statuses
	client.user.setActivity('STIADS👀 | -help', { type: 'WATCHING' });
	// client.user.setActivity('STIADS👀Bot Music BETA', { type: 'PLAYING' });

});

// Welcome messages
client.on('guildMemberAdd', member => {
	member.guild.channels.cache.get(welcomechannel).send(`Welcome ${member}, to ${member.guild.name}. Please be sure to read <#760613526754164777> before chatting with us, thanks! You are member #${member.guild.memberCount}!`);
	// Tells the console the user that joined
	console.log(`${member.user.username} joined`);
});

// When a client sends a message
client.on('message', async message => {
	const leveling = require('./modules/leveling'); // Loads leveling.js file
	leveling(message); // Runs leveling function each time a message is sent
	const suggestions = require('./modules/suggestions'); suggestions(message);
	const nvwlscht = require('./modules/n_vwls_cht'); nvwlscht(message);
	const modmessaging = require('./modules/modmessaging'); modmessaging(message, client);
	const modifications = require('./modules/modifications'); modifications(message, client);
	// Tests to make sure the command starts with a prefix and wasn't done by a bot, to continue on
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
  
	// Dynamically execute commands
	const command = client.commands.get(commandName) ||
		client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	// If the command is only for guilds/servers and was executed in dms
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.channel.send('I can\'t execute that command inside DMs!');
	}
  
	// If command needs to have perms to manage messages
	if (command.perms && !message.member.hasPermission(command.perms)) {
		return message.channel.send('nou.');
	}
  
	// If the command has arguments and is not the required length of the arguments
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments.`;

		// If it has a specified usage, add the format
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		// Send error
		return message.channel.send(reply);
	}

	// Cooldowns
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 0) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.channel.send(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.channel.send('There was an error trying to execute that command!');
	}
});

client.on('messageReactionAdd', async (messageReaction, user) => {
	if (messageReaction.partial) {
		try {
			await messageReaction.fetch();
		} catch {
			return console.error('Something went wrong: ', error);
		}
	}
	for (i in reactionroles) {
		if ((messageReaction.message.channel.id == reactionroles[i].channel) && (messageReaction.message.id == reactionroles[i].message) && (messageReaction.emoji.name == reactionroles[i].emoji)) {
			const role = messageReaction.message.member.guild.roles.cache.find(role => role.id == reactionroles[i].role);
			const member = messageReaction.message.member.guild.members.cache.find(member => member.id == user.id);
			return member.roles.add(role);
		}
	}
});

client.on('messageReactionRemove', async (messageReaction, user) => {
	if (messageReaction.partial) {
		try {
			await messageReaction.fetch();
		} catch {
			return console.error('Something went wrong: ', error);
		}
	}
	for (i in reactionroles) {
		if ((messageReaction.message.channel.id == reactionroles[i].channel) && (messageReaction.message.id == reactionroles[i].message) && (messageReaction.emoji.name == reactionroles[i].emoji)) {
			const role = messageReaction.message.member.guild.roles.cache.find(role => role.id == reactionroles[i].role);
			const member = messageReaction.message.member.guild.members.cache.find(member => member.id == user.id);
			return member.roles.remove(role);
		}
	}
});

// Login to Discord with your app's token
client.login(token);