import fs from 'fs';
import { Client, Collection, Partials } from 'discord.js';
import config from './config.json' assert { type: 'json' };
const { presence, token } = config;

const client = new Client({
	partials: [ Partials.Channel, Partials.Message, Partials.Reaction ],
	intents: [ 'DirectMessages', 'DirectMessageReactions', 'Guilds', 'GuildMembers', 'GuildMessages', 'GuildMessageReactions' ]
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const { command } = await import(`./commands/${file}`);
	client.commands.set(command.name, command);
}

import './modules.js';

client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({ activities: presence.activities, status: presence.status });
});

client.login(token);

export { client };