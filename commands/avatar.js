const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ['icon', 'pfp'],
    description: "display the user's avatar",

    execute(message, args) {
        let member = message.mentions.users.first() || message.author
        let avatar = member.displayAvatarURL({size: 1024})

        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("#ddaadd")

        message.channel.send(embed);
    }
}