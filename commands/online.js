module.exports = {
  name: 'online',
  description: 'It sends the time when the bot was started and for how long was the bot online',
  execute(client, message, args) {
    
    let date = require('../index')

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `I have been online for ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

      message.channel.send(uptime)
      //message.channel.send(date)

  }
}