module.exports = {
    name: 'ping',
    description: 'This is a basic ping command',
    execute(client, message, args) {
        (message.member.roles.cache.has('831131655950696448'))
        message.channel.send('Pong');
    }
}