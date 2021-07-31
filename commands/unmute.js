module.exports = {
    name: 'unmute',
    description: 'It unmutes a member',

    execute(client, message, args) {
        let tgt = message.mentions.members.first();
        if (message.member.permissions.has("MANAGE_ROLES")) {
            if (tgt.roles.cache.find(r => r.name === 'Muted')) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let mt = message.guild.members.cache.get(tgt.id);

                mt.roles.add(mainRole.id);
                mt.roles.remove(muteRole.id).then(() => {
                    message.channel.send(`Successfully unmuted ${tgt}`);
                }).catch((err) => {
                    console.log(err);
                })
            } else {
                message.channel.send(`${tgt} is not muted`)
            }
        }else{
            message.channel.send("You do not have permission to unmute a member <:hahaa:865095062484811776>")
        }

    }
}
