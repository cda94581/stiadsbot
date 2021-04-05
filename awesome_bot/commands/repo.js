const Discord = require('discord.js');

module.exports = {
	name: 'repo',
	description: 'Github Repository for Awesome Bot',
	aliases: [ 'github' ],
	execute(message, args) {
		const repoEmbed = new Discord.MessageEmbed().setColor('##77ff').setTitle('Github Repository').setURL('https://github.com/cda94581/Awesome-Bot').setDescription('Learn how this bot was made, suggest additions, report bugs');
		message.channel.send(repoEmbed);
	},
};
