# Discord April Fools
Code for a Discord Bot that renames every person on a discord server to a chosable text.

> [!CAUTION]
> This bot uses DiscordJS v13. Newer versions may be required and not work.

## Requirements
> ...that are necessary:
- A Discord Bot (You can create one [here](https://discord.com/developers/applications). [This guide](https://discord.com/developers/docs/quick-start/getting-started) may be helpful.)
> ...that may have working alternatives:
- NPM (`npm install -g npm` inside a terminal, i.e. `cmd` in windows)
- Node (executable [here](https://nodejs.org/en/download/))

## Setup
1. Download the source code of this repository.
2. Go inside the root folder (where the package.json is located), open up a terminal (on windows you can do so by clicking into the file path and typing in `cmd` as seen in the attached image) and execute `npm i`.
3. Open the .env file and put your bots token in there behind the equal sign.
4. Go inside the `src` folder, open up the config.json and change every property as needed. The `command` property will cause specific actions to be performed. Change it step by step (every bot execution as seen in step 5) to one of the following:
```
0 - Default
1 - Step 1: store old names
2 - Step 2: execute (rename everyone)
3 - Step 3: rollback (original names)
404 - Completely wipe userdata.json
```
5. open up a terminal inside `src` and execute the command `node .` to run the bot.
