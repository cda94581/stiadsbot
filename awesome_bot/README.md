# Awesome-Bot
*Awesome-Bot* is a [*Discord*](https://discord.com) Bot for [*Awesome5834*](https://www.youtube.com/channel/UC8jK9yNTnEdrwBg2hJRlC_A)'s [Discord Server](https://discord.gg/da32ASg). It features leveling, custom commands, welcome messages, and a Minecraft-Discord Chat that would work if  [this bug](https://bugs.mojang.com/browse/BDS-1013) was nonexistent ;-;, with more to come!

## Installing & Running
### Ubuntu Command Line
1. Download node.js, npm, and mysql - `sudo apt install nodejs && sudo apt install npm && sudo apt install mysql-server`
	- You may need to update node.js if `node -v` returns anything less than v12 - `sudo npm cache clean -f && sudo npm install -g n && sudo n stable`
	- You may need to follow guides on setting up mysql
2. Download [`awesome_bot.zip`](../Downloads/awesome_bot.zip) - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/awesome_bot.zip?raw=true`
3. **Unzip** the downloaded file - `unzip 'awesome_bot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](config.json) file to fit your needs - `nano config.json` to edit. To write, press `CTRL+O`, to close, press `CTRL+X`
	- Other files you may need to modify may also include [`index.js`](index.js), [`modules/leveling.js`](modules/leveling.js), and [`commands/rank.js`](commands/rank.js) (Until I move the settings all to the config file)
6. Download the packages if you haven't already - `npm i discord.js mysql ws uuid`
7. Run `node index.js`

### Windows 10
1. Download [Node.js](https://nodejs.org/) (Recommended stable version is enough) and install with **NPM**
	- You will also need to follow guides to download and setup mysql
2. Navigate to the [Downloads](../Downloads) folder
3. [Download `awesome_bot.zip`](../Downloads/awesome_bot.zip?raw=true) by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](config.json) file to fit your needs
	- Other files you may need to modify may also include [`index.js`](index.js), [`modules/leveling.js`](modules/leveling.js), and [`commands/rank.js`](commands/rank.js) (Until I move the settings all to the config file)
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