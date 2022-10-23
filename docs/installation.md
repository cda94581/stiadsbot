# Installation
## Ubuntu Command Line
1. Download node.js and npm - `sudo apt install nodejs && sudo apt install npm`
	- You may need to update node.js if `node -v` returns anything less than v16 - `sudo npm cache clean -f && sudo npm i -g n && sudo n latest`
2. Download [`stiadsbot.zip`](https://github.com/cda94581/discord_bots/blob/main/Downloads/stiadsbot.zip?raw=true) - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/stiadsbot.zip?raw=true`
3. **Unzip** the downloaded file - `unzip 'stiadsbot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](./config.json) file to fit your needs
6. Download the packages if you haven't already - `npm i`
7. Run `node .` or `npm run start`

## Windows 10
1. Download [Node.js](https://nodejs.org/) (v16 or higher) and install with **NPM**
2. Navigate to the [Downloads](https://github.com/cda94581/discord_bots/blob/main/Downloads/) folder
3. [Download `stiadsbot.zip`](https://github.com/cda94581/discord_bots/blob/main/Downloads/stiadsbot.zip?raw=true) by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](./config.json) file to fit your needs
6. `cd` to the file path in **Command Prompt**
7. Download the packages if you haven't already - `npm i`
8. Run `node .` or `npm run start`

## NPM Packages
In order for stiadsbot to work properly, it requires a few NPM Packages.  
This assumes you already have Node.JS with NPM.  
Below is a list you will need, and a reasoning as to why it is needed:

- discord.js - Main framework for stiadsbot, controls most functions to talk to the Discord API
- fs-extra - Used for leveling and managing files
- he - Used for the trivia command; parses HTML entities

As the dependencies were added in the `package.json` file, running `npm i` in the directory will install all the packages you need.