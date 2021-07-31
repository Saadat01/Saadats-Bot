const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


client.once("ready", () => {
    const _date = new Date();
    console.log(_date);
    module.exports = _date
});

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})



client.login(process.env.DISCORD_TOKEN);