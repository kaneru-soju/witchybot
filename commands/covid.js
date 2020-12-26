const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Track a specific country or worldwide COVID-19 cases",

    execute(message, args){
        let country = args.join(" ");

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor(0xFF0000)
        .setDescription('You are missing some args (ex: .covid all || .covid China)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Data`)
                .addFields(
                    { name: 'Confirmed Cases', value: `${confirmed}`, inline: true },
                    { name: 'Recovered', value: `${recovered}`, inline: true },
                    { name: 'Deaths', value: `${deaths}`, inline: true },
                )
                .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1280px-Flag_of_the_United_Nations.svg.png');
                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${country}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()
                let place = country.toUpperCase();

                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 data for **${place}**`)
                .addFields(
                    { name: 'Confirmed Cases', value: `${confirmed}`, inline: true },
                    { name: 'Recovered', value: `${recovered}`, inline: true },
                    { name: 'Deaths', value: `${deaths}`, inline: true },
                )
                .setImage('https://i.redd.it/e50np5ntslo41.png');
                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Invalid country provided, try referring to https://covid19.mathdro.id/api/countries for help.')
            })
        }
    }
}