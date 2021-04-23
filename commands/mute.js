const ms = require('ms');
module.exports = {
    name: 'mute',
    description: 'This command mutes a member',
    execute(client, message, args) {
        let tgt = message.mentions.members.first();
        if (message.member.permissions.has("MANAGE_ROLES")) {
            if (tgt) {
                if (tgt.roles.cache.find(r => r.name === 'Muted')) {
                    message.channel.send(`${tgt} is already muted `);
                } else {
                    let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                    let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                    let mt = message.guild.members.cache.get(tgt.id);

                    if (!args[1]) {
                        mt.roles.remove(mainRole.id);
                        mt.roles.add(muteRole.id).then(() => {
                            message.channel.send(`Successfully muted ${tgt}`);
                        }).catch((err) => {
                            console.log(err);
                        })
                        return
                    }
                    mt.roles.remove(mainROle.id);
                    mt.roles.add(muteRole.id);
                    message.channel.send(`${tgt} has been muted with timeout`);
                    
                    setTimeout(function (){
                        mt.roles.remove(muterole.id);
                        mt.roles.add(mainrole.id);
                    }, ms(args[1]));
                }
            } else {
                message.channel.send("I could not find that mmeber :(")
            }
        } else {
            message.channel.send("You do not have the permission to mute a member :(")
        }
    }
}