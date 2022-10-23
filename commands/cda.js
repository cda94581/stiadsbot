const Discord = require('discord.js');

module.exports = {
	name: 'cda',
	description: 'Information about the Child Development Associate',
	type: 'fun',
	execute(message = Discord.Message.prototype) {
		const embed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Child Development Associate').setDescription('A CDA (Child Development Associate) is a national credential awarded by the Council for Early Childhood Professional Recognition. This credential requires at least 120 hours of formal training within	the last five years. This training may be for college credit or noncredit, but must be under the auspices of an agency or organization with expertise in early childhood teacher preparation. Completing the CDA without college credit allows one to meet the training requirements for Level 3 on the Montana Early Care and Education Practitioner Registry (Career Path). The CDA plus 20 early childhood college credits meets the training requirements for a Level 4 on the Practitioner Registry.').setFooter({ text: 'Source: https://www.mtecp.org/pdfs/Info%20Sheets/Info%20Sheet%20Difference%20CDA%20CCDS%20and%20EC%20Degree10.pdf' });
		message.channel.send({ embeds: [ embed ]});
	}
}