//Times are in GMT+0

//Requires this module for embeds
const Discord = require('discord.js');

//Get the prefix value for later use
const {
    prefix
} = require('../config.json');

module.exports = {
	name: 'announcements',
	description: 'If there are any announcements, this can be different from announcements in <#760628208868655128>.',
    aliases: [ 'messages' ],
	execute(message, args) {
        var announcementsEmbed;
        // announcementsEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Bot Updates').setDescription('Nothing to see here...').setTimestamp('2020-12-27T19:15:00.000Z'); //Default Embed if no other embed is present
        announcementsEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('2021/01/08 - 1').setDescription('- Welcome messages! Goodbye MEE6, you\'re only useful for logs now').setTimestamp('2021-01-08T22:45:00.000Z'); //2021/01/08 - 1
	announcementsEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('2021/01/10 - 1').setDescription('- Updated `ping` to send the latency').setTimestamp('2021-01-10T05:00:00.000Z'); //2021/01/10 - 1
        //announcementsEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('2020/12/29 - 1').setDescription('- Added `topic` command, use in <#793025455514320906>, prepared to be annoyed with repeated questions.\nCreated files for future use, hoping nothing was broken :P').setTimestamp('2020-12-29T15:00:00.000Z'); //2020/12/29 - 1
        personalEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('Message from cda94581 - 2021/01/01').setDescription('Hey all! For the new 2021 year, I have resolved to start limiting my time on Discord to 5 minutes per day, max. Due to this, I won\'t have as much time to be checking messages, so if there is anything you\' like me to see, feel free to Ping me or DM me.\nDon\'t worry about me, this has been my choice. Like with an alcohol or smoking addiction, I have been addicted to non-essential computer things to the point where it could be harmful. As such, I will break my addiction to that in a similar fashion to alcohol, extreme reduction of usage, or none at all. After I can control it to the point where I am no longer constantly thinking of, and inevitably pouting, these things, I can then work on returning to a much more balanced life.\n\nI plan to still continue projects I\'ve started, like this bot, and many other things that aren\'t related to this story. This includes cda94581 modifications, however as I won\'t be online as often, I\'d recommend refraining from any Nickname or Status modifications, as I wouldn\'t be able to talk so others can see. You\'ll have to get creative as to getting others to see, if you wanted. Perhaps an `-av` command, or something else.\nI also want to just say a massive thank you to all of you for being my friends! Even though I\'ll be online less, you will all have a special place in my heart!\n\nHave a Happy New Year,\n-cda94581').setTimestamp('2021-01-01T00:00:00.000Z'); //Message from cda94581 - 2021/01/01
            
        //Send the Embed
        message.channel.send(personalEmbed);
        message.channel.send(announcementsEmbed);
	},
};
