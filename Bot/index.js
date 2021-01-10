// load node.js's file system module
const fs = require('fs');

// require the discord.js module
const Discord = require('discord.js');

// load the prefix and token from the config.json file
const {
    prefix,
    token
} = require('./config.json');

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
    // Activities/Statuses
    client.user.setActivity('STIADS👀 | -help', {type: 'WATCHING'});

});

// Welcome messages
client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get('760613444323115021').send(`Welcome ${member}, to ${member.guild.name}. Please be sure to read <#760613526754164777> before chatting with us, thanks! You are member #${member.guild.memberCount}!`);
    console.log(`${member.user.username} joined`);
});

client.on('message', message => {	
    // tests to make sure the command starts with a prefix and wasn't done by a bot, to continue on
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // dynamically execute commands
    const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    // if the command is only for guilds/servers and was executed in dms
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.channel.send('I can\'t execute that command inside DMs!');
    }
	
	// if command needs to have perms to manage messages
	if (command.perms && !message.member.hasPermission(command.perms)) {
		return message.channel.send('nou.');
	}
	
	/*
	// if command needs certain roles
	if  (command.roles && !message.member.roles.cache.some(role => role.name === command.roles)) { 
		return message.channel.send('nou.');
	}
	*/
	
    // if the command has arguments and is not the required length of the arguments
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments.`;

        // if it has a specified usage, add the format
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        // send error
        return message.channel.send(reply);
    }

    // cooldowns
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


// login to Discord with your app's token
client.login(token);