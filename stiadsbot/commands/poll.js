//Requires this module for embeds
const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'poll',
	description: 'Start a poll',
    usage: '<name> <options (up to 10)>',
    args: true,
	execute(message, args) {
        var pollOptions = "";
        var actualArgs = message.content.slice(`${prefix}poll`.length).trim().split(/,/);
        if (actualArgs.length - 1 >= 1) pollOptions += '1. ' + actualArgs[1] + "\n";
        if (actualArgs.length - 1 >= 2) pollOptions += '2. ' + actualArgs[2] + "\n";
        if (actualArgs.length - 1 >= 3) pollOptions += '3. ' + actualArgs[3] + "\n";
        if (actualArgs.length - 1 >= 4) pollOptions += '4. ' + actualArgs[4] + "\n";
        if (actualArgs.length - 1 >= 5) pollOptions += '5. ' + actualArgs[5] + "\n";
        if (actualArgs.length - 1 >= 6) pollOptions += '6. ' + actualArgs[6] + "\n";
        if (actualArgs.length - 1 >= 7) pollOptions += '7. ' + actualArgs[7] + "\n";
        if (actualArgs.length - 1 >= 8) pollOptions += '8. ' + actualArgs[8] + "\n";
        if (actualArgs.length - 1 >= 9) pollOptions += '9. ' + actualArgs[9] + "\n";
        if (actualArgs.length - 1 >= 10) pollOptions += '10. ' + actualArgs[10] + "\n";
        const pollEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Poll! (Beta) - ' + actualArgs[0]).setDescription('**Options:**\n' + pollOptions);
        message.channel.send(pollEmbed).then(sentEmbed => {
            if (actualArgs.length - 1 >= 1) sentEmbed.react('1️⃣');
            if (actualArgs.length - 2 >= 1) sentEmbed.react('2️⃣');
            if (actualArgs.length - 3 >= 1) sentEmbed.react('3️⃣');
            if (actualArgs.length - 4 >= 1) sentEmbed.react('4️⃣');
            if (actualArgs.length - 5 >= 1) sentEmbed.react('5️⃣');
            if (actualArgs.length - 6 >= 1) sentEmbed.react('6️⃣');
            if (actualArgs.length - 7 >= 1) sentEmbed.react('7️⃣');
            if (actualArgs.length - 8 >= 1) sentEmbed.react('8️⃣');
            if (actualArgs.length - 9 >= 1) sentEmbed.react('9️⃣');
            if (actualArgs.length - 10 >= 1) sentEmbed.react('🔟');
        });
	},
};