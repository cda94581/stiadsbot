//Requires this module for embeds
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
	name: 'modifications',
	description: 'Information about cda94581 modifications',
	type: 'fun',
	execute(message, args, client) {
		if (!args.length) {
			const modificationEmbed = new Discord.MessageEmbed()
			.setColor('#ff0000').setTitle('Cda94581 Modifications')
			.setDescription('*and here comes another day of explanations*\nEvery week, one person may submit modifiers for <@!581251728725377126> for a day on Tuesday.\nUsing <@!294882584201003009>, a person who wants to be selected will be selected to modify one or more attributes.\nThe person will then temporarily be given the <@&760620916152860702> role, which will give them access to post in <#760620082723291146>.\nAfterwards, the modifications will take place the following Tuesday, for 1 day, and the <@&760620916152860702> role will be replaced with the <@&760622288348381224> role.\nSome modifications may not take place if another modification has already been assigned for that Tuesday.\n**Note that <@!581251728725377126> has the right to deny a modification if needed**\nAlso ignore the fact the Bot calls it a Giveaway :sweat_smile:');
			return message.channel.send({ embeds: [ modificationEmbed ]});
		}
		if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) return;
		fs.readFile(path.resolve(__dirname, '../config.json'), 'utf-8', (err, data) => {
			if (err) throw err;
			let file = JSON.parse(data);
			switch (args[0].toLowerCase()) {
				case 'open':
					file.modifications.open = true;
					client.channels.cache.find(channel => channel.id == file.modifications.channel).send({ content: `Modification Submissions are now OPEN! DM <@!${client.user.id}> and start your message with **Modification Submission** to submit your modification.\nVoting is also OPEN! React with :+1: to vote for a modification.` });
					break;
				case 'close':
					file.modifications.open = false;
					client.channels.cache.find(channel => channel.id == file.modifications.channel).send({ content: `Modification Submissions & Voting is now CLOSED! A winner will be announced soon.` });
					break;
			}
			fs.writeFile(path.resolve(__dirname, '../config.json'), JSON.stringify(file, null, '\t'), 'utf-8', err => {
				if (err) throw err;
			});
		});
	},
};