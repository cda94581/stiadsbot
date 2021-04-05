//Requires this module for embeds
const Discord = require('discord.js');

module.exports = {
	name: 'rule',
	description: 'Get a specific rule',
	usage: '<rule number>',
	args: true,
	type: 'info',
	execute(message, args) {
		var ruleEmbed;
		switch (args[0]) {
			case '1': ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':one: **Be Respectful**').setDescription('We want to create and uphold a safe and caring environment for all to enjoy, and your behavior should reflect it. Harrassment, bullying, targeting, etc, will not be tolerated. Please avoid controversial topics, such as politics or religion. Do not find loopholes to get around certain things\n*If something is not explicitly stated, use your best judgement to determine what\'s right and what\'s wrong.*'); message.channel.send(ruleEmbed); break;
			case '2': ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle('**Nothing Explicit or Inappropriate**').setDescription('This is a PG-13 server. Do not post any graphical or vulgar content. Requesting of overly graphical and/or vulgar songs is prohibited.\nFurthermore, sharing if hacks, exploits, pirated software, etc, is prohibted.\nMild use of language is permitted, however strong and frequent uses are prohibited.'); message.channel.send(ruleEmbed); break;
			case '3': ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':three: **No Harrassment**').setDescription('This includes, but is not limited to, bullying, targeting, discrimination due to race, color, gender, sex, sexual orientation, etc. These are all prohibted.\nFurthermore, consistent pinging ||`@<user>`|| and ghost-pinging ||Ping then removing it||, DMs, etc, when asked to stop, are prohibited.'); message.channel.send(ruleEmbed); break;
			case '4': ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':four: **No Spam**').setDescription('Spam, the repeated posting of messages, media, song lyrics, copy pasta, etc, is prohibited.'); message.channel.send(ruleEmbed); break;
			case '5': ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':five: **Watch Spoilers**').setDescription('While we may be eager to talk about that latest hit, we must respect the fact that others who want to see it, may have not seen it yet, and talking about it may ruin the experience. Please give a considerable amount of time after the release before diving deeper, and even then, be careful not to divulge too deep.'); message.channel.send(ruleEmbed); break;
			case '6': ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':six: **Advertisement**').setDescription('You are allowed to post your own content (videos, streams, etc) in #media.\nPosting of Discord Server Invites, Direct Channel Links, Offline Streaming Channels, and other things not related to *So This Is A Discord Server :eyes:* and this server, are subject to removal.'); message.channel.send(ruleEmbed); break;
			case '7': ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':seven: **Follow the Discord ToS**').setDescription('Like the Federal Laws of the US, the Discord Terms of Service is the supreme set of rules that all must follow.\n*Please note you must be at least 13, or older in some countries, to use Discord.*\nRead the full terms at <https://dis.gd/terms>'); message.channel.send(ruleEmbed); break;
			case '8': ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':eight: **Have Fun**').setDescription('This server is a more relaxed server, created for the purpose of having fun. So we hope you have a great time with the members of this server.'); message.channel.send(ruleEmbed); break;
			default: message.channel.send('Please input an argument between 1 and 8');
		};
	},
};