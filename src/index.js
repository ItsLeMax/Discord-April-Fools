const config = require("./config.json");

/**
 * @example
 * 0 = "Standard"
 * 1 = "Schritt 1: Alte Namen speichern"
 * 2 = "Schritt 2: Ausführen (alle umbenennen)"
 * 3 = "Schritt 3: Urzustand wiederherstellen (Originalnamen)"
 * 404 = "userdata.json vollständig zurücksetzen"
 * 
 * 0 = "Default"
 * 1 = "Step 1: store old names"
 * 2 = "Step 2: execute (rename everyone)"
 * 3 = "Step 3: rollback (original names)"
 * 404 = "Completely wipe userdata.json"
 */
const level = config.command;

const { Client, Intents } = require("discord.js");
require("dotenv").config();
const fs = require("fs");

const intents = new Intents(32767); // excuse my lazy ass
const client = new Client({ intents });

client.login(process.env.TOKEN);

const userdata = require("./userdata.json");

client.on("ready", async () => {
    const guild = client.guilds.cache.get(config.guildId);
    const members = await guild.members.fetch();

    switch (level) {
        case 1:
            members.forEach(member => {
                userdata.user.push({
                    userId: member.user.id,
                    username: member.displayName
                });
                fs.writeFile('./src/userdata.json', JSON.stringify(userdata, null, "\t"));
            });

            console.log("Die bisherigen Namen wurden erfolgreich gespeichert.", "Previous names were saved successfully.");
            break;
        case 2:
            members.forEach(member => {
                if (member.nickname != config.name) {
                    console.log(`renaming ${member.nickname}...`);

                    member.setNickname(config.name).catch(() => {
                        console.warn(`couldn't rename ${member.nickname}.`);
                    });
                }
            });

            console.log("Die Umbenennung wurde beendet.", "The renaming has ended.");
            break;
        case 3:
            for (const user of userdata.user) {
                guildMember = await guild.members.fetch(user.userId);
                console.log(`rolling back to ${user.username}...`);

                guildMember.setNickname(user.username).catch(() => {
                    console.warn(`couldn't rename back to ${user.username}.`);
                });
            }
            break;
        case 404:
            userdata.user = [];
            fs.writeFile('./src/userdata.json', JSON.stringify(userdata, null, "\t"));

            console.log("Die Konfigurationsdatei wurde geleert.", "The configuration file has been wiped.");
            break;
        default:
            console.log(
                "Bitte ändere die Variable \"level\", damit der vorgesehene Codeblock ausgeführt werden kann.",
                "Please change the variable \"level\" so that the proper code block can be executed."
            );
            break;
    }

    process.exit();
})

client.on("error", (error) => {
    console.error(error);
    process.exit();
})