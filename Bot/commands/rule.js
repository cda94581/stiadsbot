//Requires this module for embeds
const Discord = require('discord.js');

module.exports = {
	name: 'rule',
	description: 'Get a specific rule',
	usage: '<rule number>',
	args: true,
	execute(message, args) {
		const amount = parseInt(args[0]);
		var ruleEmbed;
		switch (amount) {
			case 1: ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':one: **Be Respectful**').setDescription('We want to create and uphold a caring and loving environment for all members. Harrasment, bullying, toxicity and all other forms of disrespect will not be tolerated. Please avoid all forms of controversial discussion, such as politics or religion'); message.channel.send(ruleEmbed); break;
			case 2: ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':two: **Keep Everything Appropriate**').setDescription('Make sure everything you post is appropriate. Anything that promotes discrimination and/or vulgar depictions will not be tolerated at all.'); message.channel.send(ruleEmbed); break;
			case 3: ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':three: **No Spam**').setDescription('Spam, the repeated posting of text, images, links, song lyrics, copy/paste, etc, will not be tolerated'); message.channel.send(ruleEmbed); break;
			case 4: ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':four: **Be Respectful**').setDescription('Everyone loves to talk about their favorite books, shows, movies, games, etc, and that\'s perfectly fine. However, please refrain from posting any form of content that divulges deeper information.\nPlease do not use Discord Markdown (`||` on both sides) to mark items as spoilers. There *will* be people who need to click every one of those, so don\'t do it at all'); message.channel.send(ruleEmbed); break;
			case 5: ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':five: **Keep Works Original**').setDescription('No one likes it when others steal their work and posts them as their own, so refrain from doing so. Make sure every build, piece of art, piece of content, etc, are your own before posting.'); message.channel.send(ruleEmbed); break;
			case 6: ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':six: **Advertising**').setDescription('Limited advertising of videos and online streams are allowed in <#760618644652163094>. Do not post Discord invites, channel links, or offline stream links'); message.channel.send(ruleEmbed); break;
			case 7: ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':seven: **Read the Discord Terms of Service**').setDescription('Before doing anything else, make sure it also complies with the Discord ToS, found at https://discord.com/terms'); message.channel.send(ruleEmbed); break;
			case 8: ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':eight: **Use Common Sense**').setDescription('If you wouldn\'t do something IRL, why do it here? Use your common sense and logic to decide what\'s right and wrong if it\'s not clearly stated'); message.channel.send(ruleEmbed); break;
			case 9: ruleEmbed = new Discord.MessageEmbed().setColor('#ff0000').setTitle(':nine: **Have Fun!**').setDescription('Why are you here if you aren\'t here to have fun? We\'re just chilling out here. So have fun. That\'s an order'); message.channel.send(ruleEmbed); break;
			default: message.channel.send('Please input an argument between 1 and 9');
		};
	},
};