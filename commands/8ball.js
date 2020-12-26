const Discord = require('discord.js');

module.exports = {
    name: "8ball",
    description: "Ask the Magic 8-Ball a question and receive a response",

    execute(message, args) {
        const responses = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes - definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful',    
        ]

        let response = responses[Math.floor(Math.random() * responses.length)];
        let member = message.author
        let lower = args.join(' ');
        lower = lower.toLowerCase();

        const embed = new Discord.MessageEmbed()
        .setColor('#ddaadd')
        .setTitle(`${member.username} asks: ` + lower)
        .addFields(
            { name: 'Magic 8-Ball Says:', value: response }
        )
        .setImage('https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif')

        message.channel.send(embed);
    }
}