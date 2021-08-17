const Discord = require('discord.js');
const { prefix, embedcolors } = require('../../config.json');
const fs = require('fs-extra');
const path = require('path');
const index = require('../../events/index');

module.exports = {
	name: 'note',
	description: 'Add a note to a member of the server',
	args: true,
	usage: '<MEMBERID> [REASON]',
	perms: [ 'KICK_MEMBERS', 'BAN_MEMBERS' ],
	execute (message, args) {
		const member = message.guild.members.cache.find(m => m.id == args[0]);
		if (!member) return message.channel.send({ content: 'This member doesn\'t exist on this guild.' });
		const note = message.content.slice(`${prefix}modcmd note ${args[0]} `.length);

		const filePath = path.resolve(__dirname, `../../_data/modactions/notes/${args[0]}.json`);
		if (!fs.existsSync(filePath)) fs.outputFileSync(filePath, `[]`, 'utf-8', err => { if (err) throw err; } );
		let file = require(filePath);
		file.push({ id: file.length + 1, timestamp: Date.now(), note: note });
		fs.writeFile(filePath, JSON.stringify(file), 'utf-8', err => { if (err) throw err });
		message.channel.send({ content: `Successfully wrote a note for ${member.user.tag} (ID: ${file.length})` });

		const desc = `${member.user} - ${member.user.tag}\n**ID**: ${member.id}\n**Note**: ${note}\n**Note ID**: ${file.length}`;
		index.log(member, new Discord.MessageEmbed().setColor(embedcolors.log).setTitle('Member Note Added').setDescription(desc).setTimestamp(Date.now()));
		console.log(`> ${Date().toString()}\t-\tMember Note Added: ${desc}`);
	}
}