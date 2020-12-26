const randomPuppy = require('random-puppy');

module.exports = {
	name: 'eyebleach',
	description: 'grabs a random eyebleach pic from a subreddit',
	execute(message, args) {
		
		let reddit = [
			"aww",
			"kitty",
			"animalssmiling",
			"PuppySmiles",
			"CozyPlaces",
			"Eyebleach",
			"pigifs",
			"cattaps",
			"happycowgifs",
			"babyelephantgifs",
			"cute",
			"duck",
			"animalsdoingstuff"
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