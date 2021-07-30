module.exports = {
  name:'help',
  description:"It will help you",
  execute(client, message, args) {
    message.channel.send("Currently available commands are as, ban, clear, help, kick, mute, nothing, ping, test, unmute and ws.")
  }
}