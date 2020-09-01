const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("ban", "moderation", []);
  }

  async run(client, message, args) {
    let user = message.mentions.members.first();
    let reason = args[1];

    if (message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, You don't have `BAN_MEMBERS` permission.");

    if (message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, I don't have `BAN_MEMBERS` permission.");

    if (!user) return message.channel.send("Pls mention some one");

    user.ban().then(() => {

      let embed = new MessageEmbed()
        .setAuthor(`Add new user to Ban list`, message.guild.iconURL())
        .addField("User", `${user.tag} \`(${user.id})\` `)
        .addField("Moderator", `${message.author.tag} \`(${message.author.id})\``)
        .setColor("GREEN")
        .addField("Reason", `${reason || "A Moderator not gived reason"}`)
      message.channel.send(embed)
      user.send(`Hi, you are banned form ${message.guild.name}\nReason: ${reason || "A Moderator not gived reason"}`)

    })
  }
};