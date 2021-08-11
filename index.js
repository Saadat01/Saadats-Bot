const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Hello world"));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

require('dotenv').config();

const Discord = require ("discord.js");
const { Intents } = Discord;

const intents = new Intents ();

for(const intent of Object.keys (Intents.FLAGS)){
intents.add(intent);
}

const client = new Discord.Client ({
  intents: intents
});
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


client.on('messageDelete', async message => {
  // Ignore direct messages
  if (!message.guild) return;
  const fetchedLogs = await message.guild.fetchAuditLogs({
    limit: 1,
    type: 'MESSAGE_DELETE',
  });
  // Since there's only 1 audit log entry in this collection, grab the first one
  const deletionLog = fetchedLogs.entries.first();

  // Perform a coherence check to make sure that there's *something*
  if (!deletionLog) return console.log(`Message deleted in ${message.channel.name}. It said "${message.content}" and it was from ${message.author.tag}. No relevant audit logs were found.`);

  // Now grab the user object of the person who deleted the message
  // Also grab the target of this action to double-check things
  const { executor, target } = deletionLog;

  // Update the output with a bit more information
  // Also run a check to make sure that the log returned was for the same author's message
  if (target.id === message.author.id) {
    console.log(`Message deleted in ${message.channel.name}. It said "${message.content}" and it was from ${message.author.tag}.It was deleted by ${executor.tag}.`);
  } else {
    console.log(`Message deleted in ${message.channel.name}. It said "${message.content}" and it was from ${message.author.tag}.We don't know who deleted the message`);
  }
});

client.login(process.env.TOKEN);