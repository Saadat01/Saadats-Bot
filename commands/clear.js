module.exports = {
  name: 'clear',
  description: "It clears messages",
  async execute(client, message, args) {
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
      if (!args[0]) return message.reply("How many messaeges am I going to clear?");
      if (isNaN(args[0])) return message.reply("Enter a number");
      if (args[0] > 100) return message.reply("You can not clear more than 100 messages");
      if (args[0] < 1) return message.reply("You must clear atleast one message");

      await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
        message.channel.bulkDelete(messages).catch((err) => {
          console.log(err);
        })
        message.channel.send(`Succesfully cleared ${args[0]} messages :D`);
        
      });
    } else {
      message.channel.send("You do not have permission to use this command <:hahaa:865095062484811776>");
    }

  }
}