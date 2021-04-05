const Discord = require('discord.js');

module.exports = {
	name: 'emoji',
	description: 'Information about Minecraft emojis, and custom ones',
	execute(message, args) {
		message.channel.send(new Discord.MessageEmbed().setColor('#44434d').setTitle('Minecraft Emojis').setDescription('Minecraft supports custom emojis and has a list of them. Use a Unicode converter to convert a unicode to hexadecimal and then copy/paste it into the game.\n\n> **Making Custom Emojis**\nYou can make custom emojis by modifying Minecraft\'s sprite sheets and copy/pasting a unicode character. It is important to note that this currently not officially supported by Mojang. Below is a step-by-step guide to making the custom emojis:\n1. Create a resource pack\n2. Save the attached images to the path specified\n- I have marked out all each indivdual box which each contains a different emoji. Modify the files as needed, making sure to keep the icons already in place, unless you want to overwrite them.\n- You can scale the image (by powers of 2) to add more detail, and things, but make sure to follow the Creator Guidelines, finding the right balance between detail and performance\n- Each grid is a hexidecimal code, from 00 to ff, counting up from left to right, top to bottom.\n- To view in-game, make sure the resource pack is applied, then using a unicode converter, copy/paste the unicode for 0xE0 or 0xE1 followed by the hexadecimal code for the emoji slot.'));
		message.channel.send(new Discord.MessageEmbed().setColor('#44434d').setTitle('Save this to your resource pack -> `fonts/glyph_E0.png`').setThumbnail('https://github.com/cda94581/discord_bots/blob/main/cdabot/assets/faq/emoji/glyph_E0.png?raw=true'));
		message.channel.send(new Discord.MessageEmbed().setColor('#44434d').setTitle('Save this to your resource pack -> `fonts/glyph_E1.png`').setThumbnail('https://github.com/cda94581/discord_bots/blob/main/cdabot/assets/faq/emoji/glyph_E1.png?raw=true'));
	}
}