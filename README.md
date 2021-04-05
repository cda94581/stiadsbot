- [Discord Bots](#Discord-Bots)
- [stiadsbot](#stiadsbot)
- [Awesome-Bot](#Awesome-Bot)
- [cdabot](#cdabot)

# Discord Bots
These are Discord Bots that I am developing, zip files to download are located in the [Downloads](Downloads) folder

# stiadsbot
So This Is A Discord Server Bot 👀

*Insert information here*

## Installing & Running
### Ubuntu Command Line
1. Download node.js, npm, and mysql - `sudo apt install nodejs && sudo apt install npm && sudo apt install mysql-server`
	- You may need to update node.js if `node -v` returns anything less than v12 - `sudo npm cache clean -f && sudo npm install -g n && sudo n stable`
	- You may need to follow guides on setting up mysql
2. Download [`stiadsbot.zip`](Downloads/stiadsbot.zip) - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/stiadsbot.zip`
3. **Unzip** the downloaded file `'stiadsbot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](stiadsbot/config.json) file to fit your needs - `nano config.json` to edit. To write, press `CTRL+O`, to close, press `CTRL+X`
	- Other files you may need to modify may also include [`index.js`](stiadsbot/index.js), [`modules/leveling.js`](stiadsbot/modules/leveling.js), [`commands/rank.js`](stiadsbot/commands/rank.js), and [`commands/leaderboard.js`](stiadsbot/commands/leaderboard.js)
6. Download the packages if you haven't already - `npm i discord.js @discordjs/opus ffmpeg-static ytdl-core mysql`
7. Run `node index.js`

### Windows 10
1. Download [Node.js](https://nodejs.org/) (Recommended stable version is enough) and install with **NPM**
	- You will also need to follow guides to download and setup mysql
2. Navigate to the [Downloads](Downloads) folder
3. [Download `stiadsbot.zip`](Downloads/stiadsbot.zip?raw=true) by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](stiadsbot/config.json) file to fit your needs
	- Other files you may need to modify may also include [`index.js`](stiadsbot/index.js), [`modules/leveling.js`](stiadsbot/modules/leveling.js), [`commands/rank.js`](stiadsbot/commands/rank.js), and [`commands/leaderboard.js`](stiadsbot/commands/leaderboard.js)
6. `cd` to the file path in **Command Prompt**
7. Download the packages if you haven't already - `npm i discord.js @discordjs/opus ffmpeg-static ytdl-core mysql`
8. Run `node index.js`

Packages required:
- discord.js
- @discordjs/opus
- ffmpeg-static
- ytdl-core
- mysql

# Awesome-Bot

Packages required:
- discord.js
- mysql
- ws
- uuid

# cdabot
Bot for cda94581's Server

Packages required:
- discord.js