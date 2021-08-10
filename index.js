const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Hello world"));


app.listen(port, () => console.log(`Pigeon Bot listening at http://localhost:${port}`));


const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})

//deleted message logs starts

client.on('messageDelete', async message => {
  if (!message.guild) return;
  const fetchedLogs = await message.guild.fetchAuditLogs({
    limit: 1,
    type: 'MESSAGE_DELETE',
  });
  const deletionLog = fetchedLogs.entries.first();
  if (!deletionLog) return console.log(`Message deleted in ${message.channel.name}. It said "${message.content}" and it was from ${message.author.tag}. No relevant audit logs were found.`);
  const { executor, target } = deletionLog;
  if (target.id === message.author.id) {
    console.log(`Message deleted in ${message.channel.name}. It said "${message.content}" and it was from ${message.author.tag}.It was deleted by ${executor.tag}.`);
  } else {
    console.log(`Message deleted in ${message.channel.name}. It said "${message.content}" and it was from ${message.author.tag}.We don't know who deleted the message`);
  }
});

//deleted message logs end

client.login(process.env.DISCORD_TOKEN);