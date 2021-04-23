module.exports = {
    name: 'ban',
    description: 'It bans a member from the server',
    execute(client, message, args) {
        let target = message.mentions.members.first();

        if (message.member.permissions.has("MANAGE_SERVER")) {
            if (!target) {
                return message.channel.send("Whom do you want to ban?");
            } else {
                if (target.permissions.has("BAN_MEMBERS")) {
                    return message.channel.send("The member is a mod or admin, you can not ban that member");
                } else {
                    const tgt = message.guild.members.cache.get(target.id);
                    tgt.ban()
                        .then(() => {
                            message.channel.send(`Successfully ban ${target}`);
                        }).catch((err) => {
                            console.log(err);
                            message.channel.send(`I can not ban ${target}`)
                        })
                }
            }
        } else {
            return message.channel.send('Either you dont have permissions or you messed up something');
        }
    }
}