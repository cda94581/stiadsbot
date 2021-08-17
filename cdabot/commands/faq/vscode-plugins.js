const { embedcolors } = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'vscode-plugins',
	description: 'Helpful plugins when developing to make things easier',
	execute(message, args) {
		message.channel.send({ embeds: [ new Discord.MessageEmbed().setColor(embedcolors.faq).setTitle('Recommended VSCode Plugins').setDescription('**Bedrock Definitions** by destruc7i0n <https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions>\n**Blockception\'s Minecraft Bedrock Development** by Blockception Ltd <https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension>\n\nAlso helpful\n**UUID Generator** by nextcorext <https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator>\n\nTo install the extensions:\n- Navigate to the icon on the left that looks kind of like 4 squares with one offset in the top-right corner\n- Search for the extension in the search bar\n- Click on the appropriate one and click **Install**\n\nTo use the **UUID Generator**:\n- Press **F1**\n- Start typing for **Generate a UUID**\n- Use the Up and Down arrows on your keyboard to select that command and press **Enter**\n\nOther extensions are used in the background, with **Tab** autocomplete and color coding to make development easier.\n\nMake sure the extensions are **enabled**') ]});
	}
}