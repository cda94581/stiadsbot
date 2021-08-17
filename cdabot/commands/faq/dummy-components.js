const { embedcolors } = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'dummy-components',
	description: 'Info and list of dummy components',
	execute(message, args) {
		message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor(embedcolors.faq).setTitle('What are Dummy Components and How do I Use?').setDescription('A dummy is a placeholder or something that may hold values, but serve no other purpose otherwise. A dummy component is just that, a dummy. These components can be used to tell the game to do something, like running a command on an entity with a component and a Molang query to detect for it.\n\n> **List of Dummy Components**\nThese are components searched through the Minecraft Documentation, it may or may not be incomplete. Some may have unwanted consequences with use\nminecraft:can_climb | query.can_climb\nminecraft:can_fly | query.can_fly\nminecraft:can_power_jump | query.can_power_jump\nminecraft:is_baby | query.is_baby\nminecraft:is_charged | query.is_charged\nminecraft:is_chested | query.is_chested\nminecraft:fire_immune | query.is_fire_immune\nminecraft:is_ignited | query.is_ignited\nminecraft:is_illager_captain | query.is_illager_captain\nminecraft:is_saddled | query.is_saddled\nminecraft:is_sheared | query.is_sheared\nminecraft:is_stackable | query.is_stackable\nminecraft:is_stunned | query.is_stunned\nminecraft:is_tamed | query.is_tamed\nminecraft:mark_variant | query.mark_variant\nminecraft:scale | query.model_scale\nminecraft:skin_id | query.skin_id\nminecraft:variant | query.variant') ]});
	}
}