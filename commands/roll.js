const Discord = require('discord.js');

module.exports = {
    name: "roll",
    description: "rolls a die",

    execute(message, args) {
        let sides = args[0]
        switch (sides) {
            case 'd4':
                sides = 4;
                break;
            case 'd6':
                sides = 6;
                break;
            case 'd8':
                sides = 8;
                break;
            case 'd10':
                sides = 10;
                break;
            case 'd12':
                sides = 12;
                break;
            case 'd20':
                sides = 20;
                break;
            default:
                sides = 6;
        }

        let member = message.author
        let diceRoll = Math.floor(Math.random() * (sides) + 1);

        const embed = new Discord.MessageEmbed()
        .setColor('#ddaadd')
        .setTitle(`${member.username}'s roll resulted in a... ` + diceRoll)
        .setImage('https://64.media.tumblr.com/970a6e44cbdb31b0ab1f137b645f04bc/tumblr_ommpmqZ38w1vdfbeno7_500.gif')

        message.channel.send(embed);
    }
}