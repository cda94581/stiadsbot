//Requires this module for embeds
const Discord = require('discord.js');

module.exports = {
	name: 'poll',
	description: 'Start a poll',
    usage: '<option 1-5, separated by spaces>',
    args: true,
	execute(message, args) {
        var pollOptions = "";
        for (i = 1; i <= args.length - 1 && i < 6; i++) {
            pollOptions += i + '. ' + args[i] + "\n";
        }
        const pollEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Poll! (Beta) - ' + args[0]).setDescription('**Options:**\n' + pollOptions).setFooter('Note: STIADS👀 Bot will react 1️⃣, 2️⃣, 3️⃣, 4️⃣, and 5️⃣, regardless of number of provided options.');
        message.channel.send(pollEmbed).then(sentEmbed => {
            sentEmbed.react('1️⃣');
            sentEmbed.react('2️⃣');
            sentEmbed.react('3️⃣');
            sentEmbed.react('4️⃣');
            sentEmbed.react('5️⃣');
        });
	},
};