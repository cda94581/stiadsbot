# cdabot
*cdabot* is a [*Discord*](https://discord.com) Bot for [my Discord Server](https://discord.gg/da32ASg). It features custom commands, welcome messages, and leveling without databases, with more to come!

## Installing & Running
### Ubuntu Command Line
1. Download node.js, and npm - `sudo apt install nodejs && sudo apt install npm`
	- You may need to update node.js if `node -v` returns anything less than v12 - `sudo npm cache clean -f && sudo npm install -g n && sudo n stable`
2. Download [`cdabot.zip`](../Downloads/cdabot.zip) - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/cdabot.zip?raw=true`
3. **Unzip** the downloaded file - `unzip 'cdabot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](config.json) file to fit your needs - `nano config.json` to edit. To write, press `CTRL+O`, to close, press `CTRL+X`
6. Download the packages if you haven't already - `npm i discord.js fs-extra`
7. Run `node index.js`

### Windows 10
1. Download [Node.js](https://nodejs.org/) (Recommended stable version is enough) and install with **NPM**
2. Navigate to the [Downloads](../Downloads) folder
3. [Download `cdabot.zip`](../Downloads/cdabot.zip?raw=true) by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](config.json) file to fit your needs
6. `cd` to the file path in **Command Prompt**
7. Download the packages if you haven't already - `npm i discord.js fs-extra`
8. Run `node index.js`

Packages required:
- discord.js
- fs-extra

## Contributing
To be written...

## Project Plans
### General
- [x] Basic Outline
- [x] Welcome Messages
- [x] Command Handler
- [x] FAQ Command Handler
- [x] Trigger Handler
- [x] No Database Leveling
- [ ] YouTube + Twitch Notifications
- [ ] Giveaway System

### Moderation
- [x] Moderator Command Handler
- [ ] Link Filtering
- [ ] Leave/Rejoin Notifications for Moderators
- [ ] Welcome Back Messages
- [ ] Event Responses
- [ ] Logging
- [ ] Ban
- [ ] Kick
- [ ] Mute
- [ ] Warn
- [ ] Note
- [ ] Easy Notifications & Responses (Reactions)
- [ ] Reaction Roles
- [ ] No Welcoming for Certain Reasons
- [ ] Automatic Nicknames for Inappropriate Names