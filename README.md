# Discord April Fools

Renames every person on a discord server to a chosable text\
![1 0 0-rename](https://github.com/user-attachments/assets/581df9bf-9aa8-4141-82f6-3fc8a0b57783)

> [!CAUTION]
> This bot uses the now outdated DiscordJS v13. Newer versions may be required and break the bot.

## Requirements

> ...that are necessary:
- A [Discord Bot](https://discord.com/developers/applications) (You may use [this guide](https://discord.com/developers/docs/quick-start/getting-started))
> ...that may have working alternatives:
- [Node](https://nodejs.org/en/download/prebuilt-installer)
- Windows
> ...that have working alternatives:
- [7-Zip](https://7-zip.de/download.html)

## Setup

1. Download the source code by clicking on `<> Code` & `Download ZIP` and extract its content\
![download](https://github.com/ItsLeMax/Discord-April-Fools/assets/80857459/8560de24-1ff4-4cea-92f2-49ee3ca2fdac)
2. Open the root folder and inside it the terminal (typing `cmd` inside the file explorer path works) and execute `npm i`. Keep the terminal open.\
![cmd](https://github.com/user-attachments/assets/27ca1a08-f863-40ad-8c74-60b7abab702f)\
![npm](https://github.com/user-attachments/assets/e6ed218b-58e5-4fd6-ba71-6f0579b11044)
3. Open the .env file and put your bots token in there behind the equal sign\
![1 0 0-env](https://github.com/user-attachments/assets/7d26a9fa-f6ef-420b-9030-7f22cc50fd8c)
4. Go inside the `src` folder, open up the config.json and change every property as needed. The `command` property will cause specific actions to be performed.\
![1 0 0-config](https://github.com/user-attachments/assets/92ad9c2b-45db-471b-a274-2a4f5d392331)\
Change it step by step (every bot execution as seen in step 5) to one of the following:
```
0 - Default
1 - Step 1: store old names
2 - Step 2: execute (rename everyone)
3 - Step 3: rollback (original names)
404 - Completely wipe userdata.json
```
5. Open up the terminal again and execute the command `node .` to run the bot\
![1 0 0-node](https://github.com/user-attachments/assets/c40b21d7-692e-45b2-9449-7c495d1c6234)