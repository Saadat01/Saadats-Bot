module.exports = {
  name: 'test',
  description: 'Testing command',
  execute(client, message, args) {
    message.channel.send('Tested')
  }
}