const fs = require('fs'); const Discord = require('discord.js');
const { prefix, presence, token, reactions, welcome } = require('./config.json');

const client = new Discord.Client({
	partials: ['CHANNEL', 'MESSAGE', 'REACTION'],
	intents: [ 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS' ]
});

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const idleMods = fs.readdirSync('./idleMods', 'utf-8').filter(f => f.endsWith('.js'));
const modules = fs.readdirSync('./modules', 'utf-8').filter(f => f.endsWith('.js'));

client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({ activities: [...presence.activities], status: presence.status });
	idleMods.forEach(module => require(`./idleMods/${module}`).run(client));
});

client.on('guildMemberAdd', member => member.guild.channels.cache
	.find(channel => channel.id == welcome)
	.send({ content: `Welcome ${member}, to ${member.guild.name}. Please be sure to read <#760613526754164777> before chatting with us, thanks! You are member #${member.guild.memberCount}!` }));

client.on('messageCreate', async message => {
	modules.forEach(module => require(`./modules/${module}`)(message));

	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) ||
		client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;

	if (command.guildOnly && message.channel.type === 'DM') return message.channel.send({ content: 'I can\'t execute that command inside DMs!' });
	if (command.perms) for ( i in command.perms )
		if (!message.member.permissions.has(eval(`Discord.Permissions.FLAGS.${command.perms[i]}`))) return message.channel.send({ content: 'nou.' });
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments.`;
		if (command.usage) reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;

		return message.channel.send({ content: reply });
	}

	try { command.execute(message, args); }
	catch (error) {
		console.error(error);
		message.channel.send({ content: 'There was an error trying to execute that command!' });
	}
});

client.on('messageReactionAdd', async (messageReaction, user) => {
	if (messageReaction.partial) {
		try { await messageReaction.fetch(); }
		catch { return console.error('Something went wrong: ', error); }
	}
	reactions.forEach(reactionGroup => {
		if (reactionGroup.channel!=messageReaction.message.channelId || reactionGroup.message!=messageReaction.message.id) return;
		Object.keys(reactionGroup.roles).forEach((role, index, array) => {
			if (role != messageReaction.emoji.id && role != messageReaction.emoji.name) return;
			messageReaction.message.guild.members.cache.get(user.id).roles.add(messageReaction.message.guild.roles.cache.get(reactionGroup.roles[role]));

			array.filter(item => reactionGroup.keep ? true : item != role).forEach(remove => {
				const reaction = messageReaction.message.reactions.cache.get(remove);
				if (!reaction) return;
				reaction.users.remove(user);
			});
		});
	});
});

client.on('messageReactionRemove', async (messageReaction, user) => {
	if (messageReaction.partial) {
		try { await messageReaction.fetch(); }
		catch (error) { return console.error('Something went wrong: ', error); }
	}
	reactions.forEach(reactionGroup => {
		if ( reactionGroup.channel!=messageReaction.message.channelId || reactionGroup.message!=messageReaction.message.id || reactionGroup.keep ) return;
		Object.keys(reactionGroup.roles).forEach(role => {
			if (role!=messageReaction.emoji.id && role!=messageReaction.emoji.name) return;
			messageReaction.message.guild.members.cache.get(user.id).roles.remove(messageReaction.message.guild.roles.cache.get(reactionGroup.roles[role]));
		});
	});
});

client.on('interactionCreate', interaction => {
	if (!interaction.isSelectMenu()) return;
});

client.login(token);