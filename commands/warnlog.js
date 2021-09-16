const discord = require("discord.js");
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");

module.exports.run = async (client, message, args) => {

    var warnChannel = message.guild.channels.cache.find(x => x.id === "867901580727681044");

    var embed = new discord.MessageEmbed()
        .setTitle("Warn log Menu")
        .setDescription("Wat is de rede van de warn?")
        .setThumbnail("https://cdn.icon-icons.com/icons2/1851/PNG/512/databasecloud_116567.png");

    message.channel.send(embed);

    message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
        var antwoord1 = antwoord.first();;
        var redenEmbed = new discord.MessageEmbed()
            .setTitle("Warn Log Menu")
            .setDescription("Wat is de naam van de speler?")
            .setThumbnail("https://cdn.icon-icons.com/icons2/1851/PNG/512/databasecloud_116567.png");

        message.channel.send(redenEmbed);

        message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
            var antwoord2 = antwoord.first();;
            var tijdembed = new discord.MessageEmbed()
                .setTitle("Warn Log Menu")
                .setDescription("Wat is de datum van vandaag?")
                .setThumbnail("https://cdn.icon-icons.com/icons2/1851/PNG/512/databasecloud_116567.png");

            message.channel.send(tijdembed);

            message.channel.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                var antwoord3 = antwoord.first();;

                message.channel.send("Warn succesvol gelogd!");

                var prompt = new discord.MessageEmbed()
                    .setTitle(`Nieuwe Waarschuwing`)
                    .setDescription(`Naam Speler: ${antwoord2}  \n Reden Warn: ${antwoord1} \n Gewaarschuwd door: ${message.author.tag}`)
                    .setThumbnail("https://cdn.icon-icons.com/icons2/1851/PNG/512/databasecloud_116567.png")
                    .setColor("#008cff")
                    .setTimestamp();

                warnChannel.send(prompt);
            })
        })
    })




}

module.exports.help = {
    name: "warnlog",
    description: "warn-log voor staff"
}