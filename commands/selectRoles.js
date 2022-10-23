const Discord = require('discord.js');
const { roleSelect: { add, remove } } = require('../config.json');

module.exports = {
	name: 'selectRoles',
	description: 'Sends a message with the role selection dropdown menu.',
	type: 'moderation',
	perms: [ 'ADMINISTRATOR' ],
	execute(message = Discord.Message.prototype) {
		const addComp = new Discord.MessageSelectMenu({ placeholder: 'Add Roles Here...', customId: 'selectRoles.add' });
		const removeComp = new Discord.MessageSelectMenu({ placeholder: 'Remove Roles Here...', customId: 'selectRoles.remove' });

		add.forEach(a => {
			addComp.addOptions({ label: a.description })
		});

		message.channel.send({
			components: [{
				type: 'SELECT_MENU',
				components: [
					addComp,
					removeComp
				]
			}]
		});
	}
}