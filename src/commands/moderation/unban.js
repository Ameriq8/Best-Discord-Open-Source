const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed, Discord } = require("discord.js");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("unban", "moderation", []);
  }

  async run(client, message, args) {
    let unbanned =
      message.mentions.users.first() || client.users.resolve(args[0]) || message.guild.members.cache.get(args[0]);
    let reason = args[1];

    let member = await client.users.fetch(unbanned);
    let ban = await message.guild.fetchBans();

    if (!ban.get(member.id)) {
      let notbannedembed = new Discord.MessageEmbed()
        .setDescription("This user is not banned")
        .setColor("#2C2F33");
      message.channel.send(notbannedembed);

      return;
    }

    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnoperms = new Discord.MessageEmbed()
        .setDescription(
          "I do not have permissions, please contact an administrator"
        )
        .setColor("#2C2F33");
      message.channel.send(botnoperms);

      return;
    }

    if (!message.member.permissions.has("BAN_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `BAN_MEMBERS` contact an administrator"
        )
        .setColor("#2C2F33");
      message.channel.send(nopermsembed);

      return;
    }

    var user = ban.get(member.id);
    message.guild.members.unban(member);
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${member.tag} has been successfully unbanned.`)
      .setColor("#2C2F33");

    message.channel.send(successfullyembed);
  }
};
