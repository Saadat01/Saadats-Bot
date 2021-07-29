module.exports = {
  name:'help',
  description:"It will help you",
  execute(client, message, args) {
    message.channel.send("Currently available commands are ban, clear, help, kick, mute, ping and unmute")
  }
}