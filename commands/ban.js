module.exports = {
  name: 'ban',
  description: 'It bans a member from the server',
  execute(client, message, args) {
    let target = message.mentions.members.first();

    if (message.member.permissions.has("BAN_MEMBERS")) {
      if (!target) {
        return message.channel.send("Could not find target. Please mention the target.");
      } else {
        if (target.permissions.has("MANAGE_GUILD")) {
          return message.channel.send("The member is a mod or admin or the owner, you can not ban that member");
        } else {
          const tgt = message.guild.members.cache.get(target.id);
          tgt.ban()
            .then(() => {
              message.channel.send(`Successfully banned ${target}`);
            }).catch((err) => {
              console.log(err);
              message.channel.send(`I can not ban ${target}`)
            })
        }
      }
    } else {
      return message.channel.send('You do not have permission to use this command <:hahaa:865095062484811776>');
    }
  }
}