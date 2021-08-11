const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
let file;

module.exports = {
	name: 'blacklistxp',
	description: 'Prevents a user from gaining xp',
	type: 'leveling',
	args: true,
	perms: [ 'ADMINISTRATOR' ],
	usage: '(user|channel <USER>)|(list)',
	aliases: [ 'blxp' ],
	execute(message, args, client) {
		if (args.length < 2) return message.channel.send({ content: 'Please specify to either blacklist a user or a channel, as well as the id, or to list' });
		fs.readFile(path.resolve(__dirname, '../config.json'), 'utf-8', (err, data) => {
			if (err) throw err;
			file = JSON.parse(data);
			switch (args[0].toLowerCase()) {
				case 'channel':
					file.levelinfo.blacklist.push(args[1]);
					message.channel.send({ content: 'Success!' });
					break;
				case 'user':
					file.levelinfo.userblacklist.push(args[1]);
					message.channel.send({ content: 'Success!' });
					break;
				case 'list':
					message.channel.send({ content: `Blacklisted Channels:\n${file.levelinfo.blacklist}\nBlacklisted Users:\n${file.levelinfo.userblacklist}` });
					break;
			}
			fs.writeFile(path.resolve(__dirname, '../config.json'), JSON.stringify(file, null, '\t'), 'utf-8', err => {
				if (err) throw err;
			});
		});
	},
};