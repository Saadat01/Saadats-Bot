module.exports = {
    name: 'say',
    description: 'It says what you say',
    execute(cliet, message, args) {
        if(message.author.id === "304584342238265345"){

          const msg = message.content.slice(4).trim();
          message.delete();
          message.channel.send(msg)

        }
        else{
          message.channel.send("You do not have permission to use this command <:hahaa:865095062484811776>")
        }
    }
}