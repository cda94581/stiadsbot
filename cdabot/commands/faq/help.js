const Discord = require('discord.js');
const { prefix, embedcolors } = require('../../config.json');

module.exports = {
	name: 'help',
	description: 'List and Usage of all FAQs',
	usage: '[help|faq name]',
	execute(message, args) {
		let data = [];
		const { faqs } = require('../faq');
		if (args.length) { // If it asks for a specific faq help
			const name = args[0].toLowerCase();
			const faq = faqs.get(name) || faqs.find(c => c.aliases && c.aliases.includes(name));
			if (!faq) return message.channel.send({ content: 'That\'s not a valid faq' });
			data[0] = '';
			if (faq.aliases) data[0] += `**Aliases**: ${faq.aliases.join(', ')}\n`;
			if (faq.description) data[0] += `**Description**: ${faq.description}\n`;
			if (faq.usage) data[0] += `**Usage:** ${prefix}${faq.name} ${faq.usage}`;
			return message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor(embedcolors.faq).setTitle(faq.name).setDescription(data[0]) ]});
		}
		data[0] = 'Here\'s a list of all my faqs:\n`';
		data[0] += faqs.map(faq => faq.name).join('`\n`');
		data[0] += `\`\n\nYou can send \`${prefix}faq help [faq name]\` to get information on a specific faq`;
		for (i = 0; i < data.length; i++) {
			if (data[i].length > 2000) { // If past character limit
				let tempData = data[i];
				data[i] = tempData.slice(0, 2000);
				data.push(tempData.slice(2000, tempData.length));
			}
			message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor(embedcolors.faq).setTitle('CdaBot FaQ Help').setDescription(data[i]) ]});
		}
	}
}