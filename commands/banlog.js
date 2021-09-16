const discord = require("discord.js");
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");

module.exports.run = async (client, message, args) => {

    var banChannel = message.guild.channels.cache.find(x => x.id === "867901608992964638");
    var openbaarChannel = message.guild.channels.cache.find(ch => ch.id === "872138329875951696");

    var embed = new discord.MessageEmbed()
        .setTitle("Ban log Menu")
        .setDescription("Wat wil je loggen? **serverban, timeban, permanente ban**")
        .setThumbnail("https://cdn.icon-icons.com/icons2/1851/PNG/512/databasecloud_116567.png");

    message.channel.send(embed);

    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
        var antwoord1 = antwoord.first();;
        var redenEmbed = new discord.MessageEmbed()
            .setTitle("Ban Log Menu")
            .setDescription("Wat is de rede van de verbanning?")
            .setThumbnail("https://cdn.icon-icons.com/icons2/1851/PNG/512/databasecloud_116567.png");

        message.channel.send(redenEmbed);

        message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
            var antwoord2 = antwoord.first();;
            var tijdembed = new discord.MessageEmbed()
                .setTitle("Ban Log Menu")
                .setDescription("Wat is de datum van vandaag?")
                .setThumbnail("https://cdn.icon-icons.com/icons2/1851/PNG/512/databasecloud_116567.png");

            message.channel.send(tijdembed);

            message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                var antwoord3 = antwoord.first();;
                var timebanEmbed = new discord.MessageEmbed()
                    .setTitle("Ban Log Menu")
                    .setDescription("Tot Wanneer is de persoon verbannen?")
                    .setThumbnail("https://cdn.icon-icons.com/icons2/1851/PNG/512/databasecloud_116567.png");

                message.channel.send(timebanEmbed);

                message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                    var antwoord4 = antwoord.first();;
                    var naamEmbed = new discord.MessageEmbed()
                        .setTitle("Ban Log Menu")
                        .setDescription("Wat is de naam van de speler?")
                        .setThumbnail("https://cdn.icon-icons.com/icons2/1851/PNG/512/databasecloud_116567.png");

                    message.channel.send(naamEmbed);

                    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                        var antwoord5 = antwoord.first();;

                        message.channel.send("Ban succesvol gelogd!");

                        var prompt = new discord.MessageEmbed()
                            .setTitle(`Server Verbanning`)
                            .setDescription(`Naam Speler: ${antwoord5} \n Soort Verbanning: ${antwoord1} \n Reden Verbanning: ${antwoord2} \n Verbannen door: ${message.author.tag} \n Verbannen op: ${antwoord3} \n Verbannen Tot: ${antwoord4}`)
                            .setThumbnail("https://cdn.icon-icons.com/icons2/1851/PNG/512/databasecloud_116567.png")
                            .setColor("#ff5959")
                            .setTimestamp();

                        banChannel.send(prompt);
                        openbaarChannel.send(prompt);

                    })
                })
            })
        })
    })



}

module.exports.help = {
    name: "banlog",
    description: "ban-log voor staff"
}