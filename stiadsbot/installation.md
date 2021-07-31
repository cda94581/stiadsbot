---
title: Installation
---
## Ubuntu Command Line
1. Download node.js, npm, and mysql - `sudo apt install nodejs && sudo apt install npm && sudo apt install mysql-server`
	- You may need to update node.js if `node -v` returns anything less than v12 - `sudo npm cache clean -f && sudo npm install -g n && sudo n stable`
	- You may need to follow guides on setting up mysql
2. Download [`stiadsbot.zip`](https://github.com/cda94581/discord_bots/blob/main/Downloads/stiadsbot.zip?raw=true){:target="_blank"} - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/stiadsbot.zip?raw=true`
3. **Unzip** the downloaded file - `unzip 'stiadsbot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](../config.json) file to fit your needs - `nano config.json` to edit. To write, press `CTRL+O`, to close, press `CTRL+X`
6. Download the packages if you haven't already - `npm i`
7. Run `node .` or `npm run start`

## Windows 10
1. Download [Node.js](https://nodejs.org/){:target="_blank"} (Recommended stable version is enough) and install with **NPM**
	- You will also need to follow guides to download and setup mysql
2. Navigate to the [Downloads](https://github.com/cda94581/discord_bots/blob/main/Downloads/){:target="_blank"} folder
3. [Download `stiadsbot.zip`](https://github.com/cda94581/discord_bots/blob/main/Downloads/stiadsbot.zip?raw=true){:target="_blank"} by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](../config.json) file to fit your needs
6. `cd` to the file path in **Command Prompt**
7. Download the packages if you haven't already - `npm i`
8. Run `node .` or `npm run start`

## NPM Packages
In order for stiadsbot to work properly, it requires a few NPM Packages.<br>
This assumes you already have Node.JS with NPM, as well as a MySQL server.<br>
Below is a list you will need, and a reasoning as to why it is needed:

- discord.js - Main framework for stiadsbot, controls most functions to talk to the Discord API
- @discordjs/opus - Used for music
- ffmpeg-static - Used for music
- ytdl-core - Used for music, grab from YouTube
- mysql - Links Node.JS to a MySQL server, needed for leveling

As the dependencies were added in the `package.json` file, running `npm i` in the directory will install all the packages you need.