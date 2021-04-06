const Discord = require('discord.js');
const mysql = require('mysql');
let { levelinfo } = require('../config.json');

module.exports = {
	name: 'blacklistxp',
	description: 'Prevents a user from gaining xp',
	type: 'leveling',
	args: true,
	perms: [ 'ADMINISTRATOR' ],
	usage: '(user|channel <USER>)|(list)',
	aliases: [ 'blxp' ],
	execute(message, args, client) {
		if (args.length < 2) return message.channel.send('Please specify to either blacklist a user or a channel, as well as the id, or to list');
		switch (args[0].toLowerCase()) {
			case 'channel': levelinfo.blacklist.push(args[1]); message.channel.send('Success!'); break;
			case 'user': levelinfo.userblacklist.push(args[1]); message.channel.send('Success!'); break;
			case 'list': message.channel.send(`Blacklisted Channels:\n${levelinfo.blacklist}\nBlacklisted Users:\n${levelinfo.userblacklist}`); break;
		}
	},
};