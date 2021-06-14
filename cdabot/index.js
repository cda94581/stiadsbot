const fs = require('fs'); // Loads node.js file system module

const Discord = require('discord.js'); // Requires discord.js module

const {	token } = require ('./config.json'); // Loads prefix and token from config file

const client = new Discord.Client({ partials: [ 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER' ]}); // Discord Client
client.commands = new Discord.Collection(); // Collection for commands
client.triggers = new Discord.Collection(); // Collection for triggers

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // Adds all commands
const triggerFiles = fs.readdirSync('./triggers').filter(file => file.endsWith('.js')); // Adds all triggers

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// Set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

for (const file of triggerFiles) {
	const trigger = require(`./triggers/${file}`);

	// Set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.triggers.set(trigger.name, trigger);
}

// Run events
const events = require('./events/index'); events(client);

client.login(token); // Login