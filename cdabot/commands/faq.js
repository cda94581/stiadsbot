const Discord = require('discord.js');
const { prefix, embedcolors } = require('../config/config.json');
const faqList = require('../config/faq.json');

module.exports = {
	name: 'faq',
	description: 'Common issues and things to know',
	usage: '[help|faq name]',
	execute(message, args) {
		if (!args.length) return message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor(embedcolors.faq).setTitle('FAQ').setDescription('These are some handy things to know! Use the `faq list` command to get a list of all queries. Use `faq [faq name]` (without brackets) to use the command') ]});

		const faqArgs = message.content.slice(prefix.length).trim().split(/ +/); // Message arguments
		faqArgs.shift();
		const faqName = faqArgs.shift().toLowerCase(); // Sets the 'faq' input

		const faq = faqList.find(f => f.name.toLowerCase() == faqName);
		if (faq) {
			const embeds = faq.embeds.map(embed => new Discord.MessageEmbed().setColor(embedcolors.faq).setTitle(embed.title).setDescription(embed.description));
			return message.channel.send({ embeds: embeds });
		}

		if (faqName == 'list') {
			const data = faqList.map(faq => faq.name).join('`, `');
			message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor(embedcolors.faq).setTitle('cdaBot FaQ List').setDescription(`\`${data}\``) ] });
		}
	}
}