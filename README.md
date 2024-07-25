# Discord April Fools
Renames every person on a discord server to a chosable text

> [!CAUTION]
> This bot uses DiscordJS v13. Newer versions may be required and not work.

## Requirements
> ...that are necessary:
- A Discord Bot (You can create one [here](https://discord.com/developers/applications). [This guide](https://discord.com/developers/docs/quick-start/getting-started) may be helpful.)
> ...that may have working alternatives:
- Node (executable [here](https://nodejs.org/en/download/))
> ...that have working alternatives:
- 7-Zip (executable [here](https://7-zip.de/download.html))

## Setup
1. Download the source code by clicking on `<> Code` & `Download ZIP` and extract its content\
![download](https://github.com/ItsLeMax/Discord-April-Fools/assets/80857459/8560de24-1ff4-4cea-92f2-49ee3ca2fdac)
2. Open the root folder and inside it the terminal (typing `cmd` inside the file explorer path works)\
and execute `npm i`\
![cmd](https://github.com/ItsLeMax/Discord-April-Fools/assets/80857459/63eef1b2-aa2d-4ab1-92ce-4b3d2f0661ed)
3. Open the .env file and put your bots token in there behind the equal sign
4. Go inside the `src` folder, open up the config.json and change every property as needed. The `command` property will cause specific actions to be performed. Change it step by step (every bot execution as seen in step 5) to one of the following:
```
0 - Default
1 - Step 1: store old names
2 - Step 2: execute (rename everyone)
3 - Step 3: rollback (original names)
404 - Completely wipe userdata.json
```
5. open up a terminal inside `src` and execute the command `node .` to run the bot.