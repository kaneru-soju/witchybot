const Discord = require('discord.js');

module.exports = {
    name: "coin",
    description: "Flip a coin",

    execute(message, args) {
        let member = message.author
        let calc = Math.floor(Math.random() * 2);
        let flip = '';

        if (calc === 0)
            flip = 'heads';
        else
            flip = 'tails';

        const embed = new Discord.MessageEmbed()
        .setColor('#ddaadd')
        .setTitle(`${member.username}'s flip resulted in...` + flip)
        .setImage('https://thumbs.gfycat.com/BabyishShrillKomododragon-max-1mb.gif')

        message.channel.send(embed);
    }
}