module.exports = {
  name: 'kick',
  description: 'It kicks a member from the server',
  execute(client, message, args) {
    let target = message.mentions.members.first();

    if (message.member.permissions.has("KICK_MEMBERS")) {
      if (!target) {
        return message.channel.send("Could not find target. Please mention the target.");
      } else {
        if (target.permissions.has("KICK_MEMBERS")) {
          return message.channel.send("The member is a mod or admin, you can not kick that member");
        } else {
          const tgt = message.guild.members.cache.get(target.id);
          tgt.kick()
            .then(() => {
              message.channel.send(`Successfully kicked ${target}`);
            }).catch((err) => {
              console.log(err);
              message.channel.send(`I can not kick ${target}`)
            })
        }
      }
    } else {
      return message.channel.send('You do not have permission to use this command <:hahaa:865095062484811776>');
    }
  }
}