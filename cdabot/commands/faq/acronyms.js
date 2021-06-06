const Discord = require('discord.js');

module.exports = {
	name: 'acronyms',
	description: 'Handy acronyms to know when discussing bedrock development',
	execute(message, args) {
		message.channel.send(new Discord.MessageEmbed().setColor('#444444').setTitle('What does ___ mean?').setDescription('**BP** Behavior Pack\n**RP** Resource pack\n**VRP** Vanilla Resource Pack\n**VBP** Vanilla Behavior Pack\n**AC** Animation Controller\n**RPAC** Resource Pack Animation Controller\n**BPAC** Behavior Pack Animation Controller\n**BB** Blockbench\n**BDS** Bedrock Dedicated Server\n**FPV** First Person View'));
	}
}