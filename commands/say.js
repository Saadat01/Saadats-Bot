module.exports = {
  name: 'say',
  description: 'It says what you say',
  execute(cliet, message, args) {
    if (message.author.id === "304584342238265345" | message.author.id === "820523039196053574" | message.author.id === "773526418125488138") {

      const msg = message.content.slice(4).trim();
      message.delete();
      message.channel.send(msg)

    }
    else {
      message.channel.send("You do not have permission to use this command <:hahaa:865095062484811776>")
    }
  }
}