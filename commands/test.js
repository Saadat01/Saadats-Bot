module.exports = {
    name: 'test',
    description: 'Testing command',
    execute(client, message, args) {
        if (message.member.roles.cache.has('831131655950696448')) {
            message.channel.send('It works');
        } else {
            message.channel.send('Let me assign you the correct roles');
            message.member.roles.add('831131655950696448').catch(console.error);
            message.channel.send('Done!');
        }
    }
}