import { ChatInputCommandInteraction } from 'discord.js';

export const command = {
	name: 'cda',
	description: '[FUN] Information about the Child Development Associate',
	global: true,
	execute: async (interaction = ChatInputCommandInteraction.prototype) => await interaction.reply({ embeds: [{
		color: 16711680,
		title: 'Child Development Associate',
		description: 'A CDA (Child Development Associate) is a national credential awarded by the Council for Early Childhood Professional Recognition. This credential requires at least 120 hours of formal training within	the last five years. This training may be for college credit or noncredit, but must be under the auspices of an agency or organization with expertise in early childhood teacher preparation. Completing the CDA without college credit allows one to meet the training requirements for Level 3 on the Montana Early Care and Education Practitioner Registry (Career Path). The CDA plus 20 early childhood college credits meets the training requirements for a Level 4 on the Practitioner Registry.',
		footer: { text: 'Source: https://www.mtecp.org/pdfs/Info%20Sheets/Info%20Sheet%20Difference%20CDA%20CCDS%20and%20EC%20Degree10.pdf' }
	}]})
}