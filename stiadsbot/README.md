# stiadsbot
*So This Is A Discord Server Bot 👀* is a [*Discord*](https://discord.com) bot designed for [*So This Is A Discord Server*](https://discord.gg/byxaSZr). It features leveling, custom commands, mod messaging, welcome messages, suggestions, and a No Vowels Chat filter, with more to come!

## Installing & Running
### Ubuntu Command Line
1. Download node.js and npm - `sudo apt install nodejs && sudo apt install npm`
	- You may need to update node.js if `node -v` returns anything less than v12 - `sudo npm cache clean -f && sudo npm install -g n && sudo n stable`
2. Download [`stiadsbot.zip`](../Downloads/stiadsbot.zip) - `wget https://github.com/cda94581/discord_bots/blob/main/Downloads/stiadsbot.zip?raw=true`
3. **Unzip** the downloaded file - `unzip 'stiadsbot.zip?raw=true'`
	- You may need to install `unzip` - `sudo apt-get install unzip`
4. `cd` to the file path
5. Modify the [`config.json`](config.json) file to fit your needs - `nano config.json` to edit. To write, press `CTRL+O`, to close, press `CTRL+X`
6. Download the packages if you haven't already - `npm i`
7. Run `node .` or `npm run start`

### Windows 10
1. Download [Node.js](https://nodejs.org/) (Recommended stable version is enough) and install with **NPM**
2. Navigate to the [Downloads](../Downloads) folder
3. [Download `stiadsbot.zip`](../Downloads/stiadsbot.zip?raw=true) by clicking the file, then **View Raw**
4. Unzip the file
5. Modify the [`config.json`](config.json) file to fit your needs
6. `cd` to the file path in **Command Prompt**
7. Download the packages if you haven't already - `npm i`
8. Run `node .` or `npm run start`

Packages required:
- discord.js
- @discordjs/opus
- ffmpeg-static
- ytdl-core
- fs-extra

## Contributing
Contributions are welcome, and they're fairly simple, however it is beyond the scope of a README file to explain in detail. In general however, look up information as needed:
- Fork the Repository
- Clone the Fork
- Make Changes & Commit
	- Write Proper Commit Messages!
- Create a Pull Request to merge with the main branch
	- Make it Detailed!