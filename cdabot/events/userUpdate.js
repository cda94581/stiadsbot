const { embedcolors } = require('../config.json');
const Discord = require('discord.js');

module.exports = async (oldUser, newUser) => {
	if (oldUser.partial) {
		try {
			await oldUser.fetch();
		} catch {
			return console.error('Something went wrong: ', error);
		}
	}
	const index = require('./index');

	let desc = `${oldUser}`;
	if (oldUser.avatar != newUser.avatar) desc += `\n**Avatar Changed** - \`Old\`: ${oldUser.displayAvatarURL({ format: "png", dynamic: true })} \`New\`: ${newUser.displayAvatarURL({ format: "png", dynamic: true })}`;
	if (oldUser.discriminator != newUser.discriminator) desc += `\n**Discriminator Changed** - \`Old\`: ${oldUser.discriminator} \`New\`: ${newUser.discriminator}`;
	if (oldUser.username != newUser.username) desc += `\n**Username Changed** - \`Old\`: ${oldUser.username} \`New\`: ${newUser.username}`

	index.log(oldUser, new Discord.MessageEmbed().setColor(embedcolors.log).setTitle(`User Updated: ${oldUser.tag}`).setDescription(desc).setTimestamp(Date.now()));
	console.log(`> ${Date().toString()}\t-\tMember Updated: ${oldUser.tag}:\n${desc}`);
}