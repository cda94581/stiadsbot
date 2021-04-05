const Discord = require('discord.js');

module.exports = {
	name: 'content-log',
	description: 'Information about content logs, enable them!',
	execute(message, args) {
		message.channel.send(new Discord.MessageEmbed().setColor('#44434d').setTitle('Content Logs').setDescription('Content logs are Minecraft\'s way to report errors. Be sure to turn them on!\nTo turn them on, go to `Settings` -> `Profile`, and enable the Content Logs and GUI. Note that logs aren\'t cleared between runs, so some errors may be old\nContent logs are also stored as a `.txt` file in the `C:\\Users\\YOUR_USERNAME\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\logs` (Windows 10) or `/storage/emulated/0/games/com.mojang/logs/` (Android) folder.').setFooter('If you have information about enabling Content logs for other devices, let me know!'));
	}
}