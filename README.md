# Discord Bots
These are Discord Bots that I am developing, zip files to download are located in the [Downloads](Downloads) folder
Ordered by date I created the bot
These bots aren't able to be invited; you need to self-host them.

- [stiadsbot](#stiadsbot)
- [Awesome-Bot](#Awesome-Bot)
- [cdabot](#cdabot)

# [stiadsbot](stiadsbot)
*So This Is A Discord Server Bot 👀* is a [*Discord*](https://discord.com) bot designed for [*So This Is A Discord Server*](https://discord.gg/byxaSZr). It features leveling, custom commands, mod messaging, welcome messages, suggestions, and a No Vowels Chat filter, with more to come!

## Installing & Running
### Ubuntu Command Line
1. Download node.js, npm, and mysql - `sudo apt install nodejs && sudo apt install npm && sudo apt install mysql-server`
	- You may need to update node.js if `node -v` returns anything less than v12 - `sudo npm cache clean -f && sudo npm install -g n && sudo n stable`
	- You may need to follow guides on setting up mysql
2. Download [`stiadsbot.zip`](Downloads/stiadsbot.zip) - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/stiadsbot.zip?raw=true`
3. **Unzip** the downloaded file - `unzip 'stiadsbot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](stiadsbot/config.json) file to fit your needs - `nano config.json` to edit. To write, press `CTRL+O`, to close, press `CTRL+X`
6. Download the packages if you haven't already - `npm i discord.js @discordjs/opus ffmpeg-static ytdl-core mysql`
7. Run `node index.js`

### Windows 10
1. Download [Node.js](https://nodejs.org/) (Recommended stable version is enough) and install with **NPM**
	- You will also need to follow guides to download and setup mysql
2. Navigate to the [Downloads](Downloads) folder
3. [Download `stiadsbot.zip`](Downloads/stiadsbot.zip?raw=true) by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](stiadsbot/config.json) file to fit your needs
6. `cd` to the file path in **Command Prompt**
7. Download the packages if you haven't already - `npm i discord.js @discordjs/opus ffmpeg-static ytdl-core mysql`
8. Run `node index.js`

Packages required:
- discord.js
- @discordjs/opus
- ffmpeg-static
- ytdl-core
- mysql

## Contributing
To be written...

# [Awesome-Bot](awesome_bot)
*Awesome-Bot* is a [*Discord*](https://discord.com) Bot for [*Awesome5834*](https://www.youtube.com/channel/UC8jK9yNTnEdrwBg2hJRlC_A)'s [Discord Server](https://discord.gg/da32ASg). It features leveling, custom commands, welcome messages, and a Minecraft-Discord Chat that would work if  [this bug](https://bugs.mojang.com/browse/BDS-1013) was nonexistent ;-;, with more to come!

## Installing & Running
### Ubuntu Command Line
1. Download node.js, npm, and mysql - `sudo apt install nodejs && sudo apt install npm && sudo apt install mysql-server`
	- You may need to update node.js if `node -v` returns anything less than v12 - `sudo npm cache clean -f && sudo npm install -g n && sudo n stable`
	- You may need to follow guides on setting up mysql
2. Download [`awesome_bot.zip`](Downloads/awesome_bot.zip) - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/awesome_bot.zip?raw=true`
3. **Unzip** the downloaded file - `unzip 'awesome_bot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](awesome_bot/config.json) file to fit your needs - `nano config.json` to edit. To write, press `CTRL+O`, to close, press `CTRL+X`
6. Download the packages if you haven't already - `npm i discord.js mysql ws uuid`
7. Run `node index.js`

### Windows 10
1. Download [Node.js](https://nodejs.org/) (Recommended stable version is enough) and install with **NPM**
	- You will also need to follow guides to download and setup mysql
2. Navigate to the [Downloads](Downloads) folder
3. [Download `awesome_bot.zip`](Downloads/awesome_bot.zip?raw=true) by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](awesome_bot/config.json) file to fit your needs
6. `cd` to the file path in **Command Prompt**
7. Download the packages if you haven't already - `npm i discord.js mysql ws uuid`
8. Run `node index.js`

Packages required:
- discord.js
- mysql
- ws
- uuid

## Contributing
To be written...

# [cdabot](cdabot)
*cdabot* is a [*Discord*](https://discord.com) Bot for [my Discord Server](https://discord.gg/da32ASg). It features custom commands, welcome messages, and leveling without databases, with more to come!

## Installing & Running
### Ubuntu Command Line
1. Download node.js, and npm - `sudo apt install nodejs && sudo apt install npm`
	- You may need to update node.js if `node -v` returns anything less than v12 - `sudo npm cache clean -f && sudo npm install -g n && sudo n stable`
2. Download [`cdabot.zip`](Downloads/cdabot.zip) - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/cdabot.zip?raw=true`
3. **Unzip** the downloaded file - `unzip 'cdabot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](cdabot/config.json) file to fit your needs - `nano config.json` to edit. To write, press `CTRL+O`, to close, press `CTRL+X`
6. Download the packages if you haven't already - `npm i discord.js fs-extra`
7. Run `node index.js`

### Windows 10
1. Download [Node.js](https://nodejs.org/) (Recommended stable version is enough) and install with **NPM**
2. Navigate to the [Downloads](Downloads) folder
3. [Download `cdabot.zip`](Downloads/cdabot.zip?raw=true) by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](cdabot/config.json) file to fit your needs
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
- [x] Reaction Roles
- [ ] No Welcoming for Certain Reasons
- [x] Automatic Nicknames for Inappropriate Names

### Commands to Add
#### Moderators
- [x] Purge
- [x] Slowmode
- [ ] Ban
- [ ] Kick
- [ ] Mute
- [ ] Warn
- [ ] Note
- [ ] Notify Join

#### Admin
- [ ] Blacklist XP
- [ ] Add XP
- [ ] Remove XP
- [ ] Set XP

### Logging to Add
#### Server Events
- [ ] Channel Creation
- [ ] Updated Channel
- [ ] Channel Deletion
- [ ] Role Creaiton
- [ ] Role Updates
- [ ] Role Deletion
- [ ] Server Updates
- [ ] Emoji Changes

#### Member Events
- [x] Role Updates
- [x] Name Changes
- [x] Avatar Changes
- [x] Member Bans
- [x] Member Unbans

#### Voice Events
- [ ] Join Voice Channel
- [ ] Move Between Voice Channels
- [ ] Leave Voice Channel

#### Message Events
- [x] Deleted Messages
- [x] Edited Messages
- [x] Purged Messages
- [x] Discord Invites/Banned Words

#### Members Joining and Leaving
- [x] Members Joining
- [x] Members Leaving