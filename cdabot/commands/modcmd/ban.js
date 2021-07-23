const { prefix } = require('../../config.json');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
	name: 'ban',
	description: 'Ban a member of the server for a specific reason',
	args: true,
	usage: '<MEMBERID> [REASON]',
	perms: [ 'BAN_MEMBERS' ],
	execute (message, args) {
		const member = message.guild.members.cache.find(m => m.id == args[0]);
		if (!member) return message.channel.send('This member doesn\'t exist on this guild.');
		const reason = message.content.slice(`${prefix}modcmd ban ${args[0]} `.length);
		try {
			let dm = `You were banned on **${message.guild.name}**.`;
			if (reason) dm += `\nReason: ${reason}`;
			member.user.send(dm);
			member.ban({ reason: reason });
			message.channel.send('Member banned.');
		} catch {
			member.ban({ reason: reason });
			message.channel.send('Member banned. I couldn\'t DM them.');
		}

		const filePath = path.resolve(__dirname, `../../_data/modactions/bans/${args[0]}.json`);
		if (!fs.existsSync(filePath)) fs.outputFileSync(filePath, `[]`, 'utf-8', err => { if (err) throw err; } );
		let file = require(filePath);
		file.push({ id: file.length + 1, timestamp: Date.now(), reason: reason });
		fs.writeFile(filePath, JSON.stringify(file), 'utf-8', err => { if (err) throw err });
	}
}