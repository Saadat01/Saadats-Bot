module.exports = {
    name: 'as',
    description: 'Salam command',
    execute(client, message, args) {
        message.channel.send( {content:"السلام عليكم ورحمة الله و بركاته"} )
    }
}