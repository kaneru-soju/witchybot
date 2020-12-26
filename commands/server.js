const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Gives server info',
	execute(message, args) {
		guildId = message.guild.id;
		guildIcon = message.guild.icon;
		let avatar = `https://cdn.discordapp.com/icons/${guildId}/${guildIcon}.png?size=1024`;

		const embed = new Discord.MessageEmbed()
		.setTitle(`Name: ${message.guild.name}\nMembers: ${message.guild.memberCount}`)
		.setImage(avatar)
		.setColor('#ddaadd')

		message.channel.send(embed);
		// message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};