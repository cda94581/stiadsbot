//Requires this module for embeds
const Discord = require('discord.js');

module.exports = {
	name: 'poll',
	description: 'Start a poll',
    usage: '<name> <options (up to 10)>',
    args: true,
	execute(message, args) {
        var pollOptions = "";
        if (args.length - 1 >= 1) pollOptions += '1. ' + args[1] + "\n";
        if (args.length - 1 >= 2) pollOptions += '2. ' + args[2] + "\n";
        if (args.length - 1 >= 3) pollOptions += '3. ' + args[3] + "\n";
        if (args.length - 1 >= 4) pollOptions += '4. ' + args[4] + "\n";
        if (args.length - 1 >= 5) pollOptions += '5. ' + args[5] + "\n";
        if (args.length - 1 >= 6) pollOptions += '6. ' + args[6] + "\n";
        if (args.length - 1 >= 7) pollOptions += '7. ' + args[7] + "\n";
        if (args.length - 1 >= 8) pollOptions += '8. ' + args[8] + "\n";
        if (args.length - 1 >= 9) pollOptions += '9. ' + args[9] + "\n";
        if (args.length - 1 >= 10) pollOptions += '10. ' + args[10] + "\n";
        const pollEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Poll! (Beta) - ' + args[0]).setDescription('**Options:**\n' + pollOptions);
        message.channel.send(pollEmbed).then(sentEmbed => {
            if (args.length - 1 >= 1) sentEmbed.react('1️⃣');
            if (args.length - 2 >= 1) sentEmbed.react('2️⃣');
            if (args.length - 3 >= 1) sentEmbed.react('3️⃣');
            if (args.length - 4 >= 1) sentEmbed.react('4️⃣');
            if (args.length - 5 >= 1) sentEmbed.react('5️⃣');
            if (args.length - 6 >= 1) sentEmbed.react('6️⃣');
            if (args.length - 7 >= 1) sentEmbed.react('7️⃣');
            if (args.length - 8 >= 1) sentEmbed.react('8️⃣');
            if (args.length - 9 >= 1) sentEmbed.react('9️⃣');
            if (args.length - 10 >= 1) sentEmbed.react('🔟');
        });
	},
};