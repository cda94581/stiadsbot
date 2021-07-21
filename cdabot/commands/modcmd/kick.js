const { prefix } = require('../../config.json');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
	name: 'kick',
	description: 'Kicks a member from the server',
	args: true,
	usage: '<MEMBERID> [REASON]',
	perms: [ 'KICK_MEMBERS' ],
	execute (message, args) {
		const member = message.guild.members.cache.find(m => m.id == args[0]);
		if (!member) return message.channel.send('This member doesn\'t exist on this guild.');
		const reason = message.content.slice(`${prefix}modcmd kick ${args[0]} `.length);
		try {
			let dm = `You were kicked from **${message.guild.name}**.`;
			if (reason) dm += `\nReason: ${reason}`;
			member.user.send(dm);
			member.kick(reason);
			message.channel.send('Member kicked.');
		} catch {
			member.kick(reason);
			message.channel.send('Member kicked. I couldn\'t DM them.');
		}

		const filePath = path.resolve(__dirname, `../../_data/modactions/kicks/${args[0]}.json`);
		if (!fs.existsSync(filePath)) fs.outputFileSync(filePath, `[]`, 'utf-8', err => { if (err) throw err; } );
		let file = require(path.resolve(__dirname, `../../_data/modactions/kicks/${args[0]}.json`));
		file.push({ id: file.length + 1, timestamp: Date.now(), reason: reason });
		fs.writeFile(filePath, JSON.stringify(file), 'utf-8', err => { if (err) throw err });

		const desc = `${member.user} - ${member.user.username}#${member.user.discriminator}\n**ID**: ${member.id}\n**Reason**: ${reason}`;
		index.log(guild, new Discord.MessageEmbed().setColor('#00cccc').setTitle('Member Kicked').setDescription(desc).setTimestamp(Date.now()));
		console.log(`> ${Date().toString()}\t-\tMember Kicked: ${desc}`);
	}
}