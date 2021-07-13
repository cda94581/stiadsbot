const Discord = require('discord.js');

module.exports = (oldUser, newUser) => {
	const index = require('./index');

	let desc = `${oldUser}`;
	if (oldUser.defaultAvatarURL != newUser.defaultAvatarURL) desc += `\n**Avatar Changed** - \`Old\`: ${oldUser.defaultAvatarURL} \`New\`: ${newUser.defaultAvatarURL}`;
	if (oldUser.discriminator != newUser.discriminator) desc += `\n**Discriminator Changed** - \`Old\`: ${oldUser.discriminator} \`New\`: ${newUser.discriminator}`;
	if (oldUser.username != newUser.username) desc += `\n**Username Changed** - \`Old\`: ${oldUser.username} \`New\`: ${newUser.username}`

	index.log(oldUser, new Discord.MessageEmbed().setColor('#00cccc').setTitle(`User Updated: ${oldUser.username}#${oldUser.discriminator}`).setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Updated: ${oldUser.username}#${oldUser.discriminator}:\n${desc}`);
}