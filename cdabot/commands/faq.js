const Discord = require('discord.js');
const fs = require('fs');
const { prefix } = require('../config.json');

let faqs = new Discord.Collection();
let faqFiles = fs.readdirSync('./commands/faq').filter(file => file.endsWith('.js'));

for (const file of faqFiles) {
	const faq = require(`./faq/${file}`);
	faqs.set(faq.name, faq);
}

module.exports = {
	name: 'faq',
	description: 'Common issues and things to know',
	usage: '[help|faq name]',
	faqs: faqs, // For the faq help
	execute(message, args) {
		if (!args.length) return message.channel.send(new Discord.MessageEmbed().setColor('#444444').setTitle('FAQ').setDescription('These are some handy things to know! Use the `faq help` command to get a list of all queries. Use `faq [faq name]` (without brackets) to use the command'));

		// Dynamic faqs
		const faqArgs = message.content.slice(prefix.length).trim().split(/ +/); // Message arguments
		faqArgs.shift();
		const faqName = faqArgs.shift().toLowerCase(); // Sets the 'faq' input

		const faq = faqs.get(faqName); // Gets the faq corresponding
		if (!faq) return; // If couldn't get a faq

		// Attempts to execute faq
		try {
			faq.execute(message, faqArgs);
		} catch (error) {
			console.error(error);
			message.channel.send('There was an error trying to execute that faq');
		}
	}
}