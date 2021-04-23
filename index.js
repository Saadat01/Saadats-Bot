const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const mongoose = require('mongoose');

require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,

}).then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err);
});


client.login(process.env.DISCORD_TOKEN);
