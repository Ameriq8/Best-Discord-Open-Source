const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("ban", "moderation", []);
  }

  async run(client, message, args) {
    let user = message.mentions.members.first();
    let reason = args[1];

    if (message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, You don't have `MANAGE_MESSAGES` permission.");

    if (message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send("Sorry, I don't have `MANAGE_GUILD` permission.");

    if (!user) return message.channel.send("Pls mention some one");

    
  }
};