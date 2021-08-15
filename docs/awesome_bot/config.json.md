# config.json
```json
{
	"prefix": "PREFIX",
	"token": "TOKEN",
	"welcomechannel": "WELCOME CHANNEL",
	"levelinfo": {
		"levels": [ "LEVELS" ],
		"roles": [ "ROLES" ],
		"blacklist": [ "LEVEL BLACKLIST" ]
	},
	"reactionroles": [
		{
			"channel": "REACTION ROLE CHANNEL",
			"message": "REACTION ROLE MESSAGE",
			"emoji": "REACTION ROLE EMOJI",
			"role": "ROLE"
		}
	],
	"acchatchannel": "AWESOME CRAFT CHAT CHANNEL"
}
```

### prefix
As you may be well aware (from other bots), commands start with a prefix.
A common prefix is `!`.
The `prefix` value allows you to specify the prefix of the bot.
This is a `STRING` data type.
Your prefix can be any number of characters long, however you may want to be careful doing a mention prefix (`<@!USERID>`).
Awesome Bot currently does not support multiple prefixes.

### token
Every bot requires a token to login and go online.
<span title="unless you really want to risk ruining everything...">You should **NEVER** give your bot token to anyone.</span><br>
To find your token:
1. Navigate to [The Discord Applications Page](https://discord.com/developers/applications)
2. Click on your bot app
3. Go to the Bot tab
4. Where it says Token, click on the button that says "Copy" to copy and paste it into the `config.json` file
	- You can regenerate a token here as well, if someone else gets ahold of it.

This is a `STRING` data type.
<span title="dont try. it would be way less secure if you were the one to choose the token">You cannot customize your token.</span>

### welcomechannel
When a member joins, Awesome Bot will send a message to welcome them.
Copy & Paste the ID of the channel you want to welcome members in.
If when you right-click and "Copy ID" isn't an option, make sure "Developer Mode" is enabled in the Advanced
Settings.
This is a `STRING` data type, be sure to encase in quotations.

### levelinfo.levels
Awesome Bot supports leveling.
This is an array of Integers with which, when the user reaches one of them, assigns them a corresponding role.


### levelinfo.roles
This is an array of Strings, which contain the role IDs.
When a user reaches a level in the `levels` array, the index of that level is the index of
the role ID it will choose in this array, to add to the user.

### levelinfo.blacklist
This is an array of Strings, which contain channel IDs.
Users who send messages in these channels won't gain any xp.

### levelinfo.mysqlinfo.host
Awesome Bot leveling stores user info in a *MySQL* Database.
You will need to manually setup MySQL.<br>
Once that is setup, if you are running on your local device, the host will be "localhost".<br>
Otherwise, you will need the IP of the device hosting the database.<br>
If it is hosted on the web, you will need that IP.<br>
If you are hosting it elsewhere, you may need to portforward the router and connect via that IP.<br>
Awesome Bot will create a database called "awesome_bot_leveling", if it doesn't already exist, to store this information.

### levelinfo.mysqlinfo.user
This is the username of the MySQL system.

### levelinfo.mysqlinfo.password
This is the password of the MySQL system.

### reactionroles[INDEX].channel
Awesome Bot currently supports a single reaction role.
Officially, it is used for YouTube notificaitons.
This is the Channel ID in the form of a String, in which the message you react to is located.

### reactionroles[INDEX].message
This is the Message ID in the form of a String, of the message you react to for the reaction role.

### reactionroles[INDEX].emoji
This is the Emoji ID in the form of a String, of the emoji you react with to get the reaction role.
For default emojis, get the Unicode form of it. (This can be done by putting a `\` in front of the emoji and sending it in a chat)
For custom emojis, input the emoji name

### reactionroles[INDEX].role
This is the Role ID in the form of a String, of the role to gain when you react.

### acchatchannel
Awesome Bot has a Minecraft-Discord chat linker.
This is the Channel ID to send Minecraft messages, in the form of a String.<br>
You can link Minecraft by running the `/connect IP:PORT` command in Minecraft, replacing IP with the IP hosting Awesome Bot (localhost if runnign on the same device), and PORT with the port of the WebSocket (set in `modules/acchat.js` to 38195).