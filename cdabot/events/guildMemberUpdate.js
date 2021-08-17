const Discord = require('discord.js');

module.exports = async (oldMember, newMember) => {
	if (oldMember.partial) {
		try {
			oldMember.fetch();
		} catch (error) {
			return console.error('Something went wrong: ', error);
		}
	}
	const index = require('./index');
	if (oldMember.user != newMember.user) return;

	let desc = `${oldMember}`;
	if (oldMember.displayName != newMember.displayName) desc += `\n**Display Name Changed** - \`Old\`: ${oldMember.displayName} \`New\`: ${newMember.displayName}`;
	if (oldMember._roles != newMember._roles) desc += `\n\n**Roles Changed** -\n**Old**: <@&${oldMember._roles.join('> <@&')}>\n**New**: <@&${newMember._roles.join('> <@&')}>`;

	index.log(oldMember, new Discord.MessageEmbed().setColor('#00cccc').setTitle(`Member Updated: ${oldMember.user.tag}`).setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Updated: ${oldMember.user.tag}:\n${desc}`);
}