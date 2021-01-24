// Load node.js's file system module, to get command files
const fs = require('fs');

// Require the discord.js module
const Discord = require('discord.js');

// Load the prefix and token from the config.json file
const {
	prefix,
	token
} = require('./config.json');

// Create a new Discord client
const client = new Discord.Client();
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

const queue = new Map(); // Music
const ytdl = require('ytdl-core'); // Music

// When the client is ready, run this code
// This event will only trigger one time after logging in
client.once('ready', () => {
	// Tells the console this is ready
	console.log('Ready!');
	// Activities/Statuses
	client.user.setActivity('STIADS👀 | -help', { type: 'WATCHING' });

});

// Welcome messages
client.on('guildMemberAdd', member => {
	member.guild.channels.cache.get('760613444323115021').send(`Welcome ${member}, to ${member.guild.name}. Please be sure to read <#760613526754164777> before chatting with us, thanks! You are member #${member.guild.memberCount}!`);
	// Tells the console the user that joined
	console.log(`${member.user.username} joined`);
});

// When a client sends a message
client.on('message', async message => {
	// Tests to make sure the command starts with a prefix and wasn't done by a bot, to continue on
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	// Music
	const serverQueue = queue.get(message.guild.id);
	if (message.content.startsWith(`${prefix}play`)) {
		return musicPlay(message, serverQueue);
	} else if (message.content.startsWith(`${prefix}skip`)) {
		return musicSkip(message, serverQueue);
	} else if (message.content.startsWith(`${prefix}stop`)) {
		return musicStop(message, serverQueue);
	}
	// Music End
  
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
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send('There was an error trying to execute that command!');
	}
});


// Music
async function musicPlay(message, serverQueue) {
	const args = message.content.split(" ");

	const voiceChannel = message.member.voice.channel;
	if (!voiceChannel)
		return message.channel.send(
			"You need to be in a voice channel to play music!"
		);
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
		return message.channel.send(
			"I need the permissions to join and speak in your voice channel!"
		);
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.videoDetails.title,
		url: songInfo.videoDetails.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}
}

function musicSkip(message, serverQueue) {
	if (!message.member.voice.channel)
		return message.channel.send(
			"You have to be in a voice channel to stop the music!"
		);
	if (!serverQueue)
		return message.channel.send("There is no song that I could skip!");
	serverQueue.connection.dispatcher.end();
}

function musicStop(message, serverQueue) {
	if (!message.member.voice.channel)
		return message.channel.send(
			"You have to be in a voice channel to stop the music!"
		);

	if (!serverQueue)
		return message.channel.send("There is no song that I could stop!");

	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);
	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection
		.play(ytdl(song.url))
		.on("finish", () => {
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on("error", error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
	serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}
// Music End


// Login to Discord with your app's token
client.login(token);