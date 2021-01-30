const Discord = require('discord.js');

module.exports = {
	name: 'gender',
	description: 'Set your gender, preference of whether you\'d like to be referred to as a `he`, `she`, `they`, or `other`',
	args: true,
	usage: '<Gender>',
	execute(message, args) {
		let role;
		switch (args[0]) {
			case 'male':
				this.removeAllRoles(message);
				role = message.member.guild.roles.cache.find(role => role.name === 'Gender: Male');
				message.member.roles.add(role);
				message.channel.send('Success!');
				break;
			case 'female':
				this.removeAllRoles(message);
				role = message.member.guild.roles.cache.find(role => role.name === 'Gender: Female');
				message.member.roles.add(role);
				message.channel.send('Success!');
				break;
			case 'they':
				this.removeAllRoles(message);
				role = message.member.guild.roles.cache.find(role => role.name === 'Gender: They');
				message.member.roles.add(role);
				message.channel.send('Success!');
				break;
			case 'other':
				this.removeAllRoles(message);
				role = message.member.guild.roles.cache.find(role => role.name === 'Gender: Other');
				message.member.roles.add(role);
				message.channel.send('Success!');
				break;
			default:
				message.channel.send('Sorry, please enter either `male`, `female`, `they`, or `other`.\nIf you you\'d prefer another pronoun, please let us know in <#760618980859445348>');
		}
	},
	removeAllRoles(message) {
		var rolesArray = [
			message.member.guild.roles.cache.find(role => role.name === 'Gender: Male'),
			message.member.guild.roles.cache.find(role => role.name === 'Gender: Female'),
			message.member.guild.roles.cache.find(role => role.name === 'Gender: They'),
			message.member.guild.roles.cache.find(role => role.name === 'Gender: Other')
		];
		for ( i = 0; i < rolesArray.length; i++ ) {
			message.member.roles.remove(rolesArray[i]);
		}
	},
};