const { prefix } = require('../../config.json');

module.exports = {
	name: 'kick',
	description: 'Kicks a member from the server',
	args: true,
	usage: '<MEMBERID> [REASON]',
	perms: [ 'KICK_MEMBERS' ],
	execute (message, args) {
		const member = message.guild.members.cache.get(m => m.id == args[0]);
		if (!member) return message.channel.send('This member doesn\'t exist on this guild.');
		const reason = message.content.slice(`${prefix}kick ${args[0]} `.length);
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
	}
}