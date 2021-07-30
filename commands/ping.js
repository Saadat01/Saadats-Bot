module.exports = {
    name: 'ping',
    description: 'This is a basic ping command',
    execute(client, message, args) {
        message.channel.send(`🏓Pong!\nLatency is ${Date.now() - message.createdTimestamp}ms.\nAPI Latency is ${Math.round(client.ws.ping)}ms`);
    }
}