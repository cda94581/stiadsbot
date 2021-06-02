const Discord = require('discord.js');

module.exports = {
	name: 'schedule',
	description: 'Content Schedule',
	execute(message, args) {
		message.channel.send(new Discord.MessageEmbed().setColor('#cc0000').setTitle('Content Schedule').setDescription('> This schedule is during the summer months. Videos might still be made during rhe school year.\n**Sunday** - Relax & Catchup\n**Monday** - Record, Stream Building/Mining/Add-ons\n**Tuesday** - New Video!\n**Wednesday** - Record, Stream Servers\n**Thursday** - Record, Optional Time for New Video\n**Friday** - Record, Stream Fan Choice\n**Saturday** - Relax & Catchup'));
	}
}