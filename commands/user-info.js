const Discord = require('discord.js');

module.exports = {
	name: 'user-info',
	description: 'Gives a user\'s info',
	aliases: ['info'],
	execute(message, args) {
		let member = message.mentions.users.first() || message.author
		let avatar = member.displayAvatarURL({size: 1024})

		const embed = new Discord.MessageEmbed()
		.setTitle(`username: ${member.username}\n${member.username}'s ID: ${member.id}`)
		.setImage(avatar)
		.setColor("#ddaadd")

		message.channel.send(embed)
	},
};