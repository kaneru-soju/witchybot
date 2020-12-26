const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'reddit',
	cooldown: 5,
	description: 'grabs the top post from a specified subreddit (24 hours)',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
		let subMsg = args;
		
		fetch(`https://www.reddit.com/r/${subMsg}/top.json`).then(response => response.json()).then(data =>{
			let permalink = data.data.children[0].data.permalink;
			let topUrl = `https://reddit.com${permalink}`;
			let topImage = data.data.children[0].data.url;
			let topTitle = data.data.children[0].data.title;
			let topUpvotes = data.data.children[0].data.ups;
			let topNumComments = data.data.children[0].data.num_comments;
			embed.setTitle(`${topTitle}`)
			embed.setURL(`${topUrl}`)
			embed.setImage(topImage)
			embed.setColor('#ddaadd')
			embed.setFooter(`👍 ${topUpvotes} 💬 ${topNumComments}`)
			message.channel.send(embed);
		})
	},
};