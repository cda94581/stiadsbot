# Awesome-Bot
*Awesome-Bot* is a [*Discord*](https://discord.com) Bot for [*Awesome5834*](https://www.youtube.com/channel/UC8jK9yNTnEdrwBg2hJRlC_A)'s [Discord Server](https://discord.gg/da32ASg). It features leveling, custom commands, welcome messages, and a Minecraft-Discord Chat that would work if  [this bug](https://bugs.mojang.com/browse/BDS-1013) was nonexistent ;-;, with more to come!

## Installing & Running
### Ubuntu Command Line
1. Download node.js and npm - `sudo apt install nodejs && sudo apt install npm`
	- You may need to update node.js if `node -v` returns anything less than v16 - `sudo npm cache clean -f && sudo npm install -g n && sudo n latest`
2. Download [`awesome_bot.zip`](../Downloads/awesome_bot.zip) - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/awesome_bot.zip?raw=true`
3. **Unzip** the downloaded file - `unzip 'awesome_bot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](config.json) file to fit your needs - `nano config.json` to edit. To write, press `CTRL+O`, to close, press `CTRL+X`
6. Download the packages if you haven't already - `npm i`
7. Run `node .`

### Windows 10
1. Download [Node.js](https://nodejs.org/) (v16 or higher) and install with **NPM**
2. Navigate to the [Downloads](../Downloads) folder
3. [Download `awesome_bot.zip`](../Downloads/awesome_bot.zip?raw=true) by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](config.json) file to fit your needs
6. `cd` to the file path in **Command Prompt**
7. Download the packages if you haven't already - `npm i`
8. Run `node .`

Packages required:
- discord.js
- fs-extra
- ws
- uuid

## Contributing
Contributions are welcome, and they're fairly simple, however it is beyond the scope of a README file to explain in detail. In general however, look up information as needed:
- Fork the Repository
- Clone the Fork
- Make Changes & Commit
	- Write Proper Commit Messages!
- Create a Pull Request to merge with the main branch
	- Make it Detailed!