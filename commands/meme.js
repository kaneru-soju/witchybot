const randomPuppy = require('random-puppy');

module.exports = {
	name: 'meme',
	cooldown: 5,
	description: 'grabs a random meme from a meme subreddit',
	execute(message, args) {
		
		let reddit = [
			"meme",
			"animemes",
			"animememes",
			"dankmemes",
			"wholesomememes",
			"me_irl",
			"meirl",
			"2meirl4meirl",
			"memes",
			"greentext",
			"trippinthroughtime"
		]

		let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    	message.channel.startTyping();

    	randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                }]
            }).then(() => message.channel.stopTyping());
    	}).catch(err => console.error(err));
	},
};