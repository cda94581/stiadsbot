# Installation
## Ubuntu Command Line
1. Download node.js, npm, and mysql - `sudo apt install nodejs && sudo apt install npm`
	- You may need to update node.js if `node -v` returns anything less than v16 - `sudo npm cache clean -f && sudo npm install -g n && sudo n latest`
2. Download [`awesome_bot.zip`](https://github.com/cda94581/discord_bots/blob/main/Downloads/awesome_bot.zip?raw=true) - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/awesome_bot.zip?raw=true`
3. **Unzip** the downloaded file - `unzip 'awesome_bot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](./config.json) file to fit your needs - `nano config.json` to edit. To write, press `CTRL+O`, to close, press `CTRL+X`
6. Download the packages if you haven't already - `npm i`
7. Run `node .`

## Windows 10
1. Download [Node.js](https://nodejs.org/) (v16 or higher) and install with **NPM**
2. Navigate to the [Downloads](https://github.com/cda94581/discord_bots/blob/main/Downloads/) folder
3. [Download `awesome_bot.zip`](https://github.com/cda94581/discord_bots/blob/main/Downloads/awesome_bot.zip?raw=true) by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](./config.json) file to fit your needs
6. `cd` to the file path in **Command Prompt**
7. Download the packages if you haven't already - `npm i`
8. Run `node .`

## NPM Packages
In order for Awesome Bot to work properly, it requires a few NPM Packages.<br>
This assumes you already have Node.JS with NPM, as well as a MySQL server.<br>
Below is a list you will need, and a reasoning as to why it is needed:

- discord.js - Main framework for Awesome Bot, controls most functions to talk to the Discord API
- fs-extra - Used for leveling and managing files
- ws - Runs a WebSocket server for Minecraft-Discord chat linking via the `/connect` or `/wsserver` command
- uuid - Every WebSocket request requires a UUID (**U**niversally **U**nique **ID**entifier) to differentiate. This generates a UUID as needed to execute the needed things for Minecraft-Discord chat linking

As the dependencies were added in the `package.json` file, running `npm i` in the directory will install all the packages you need.