const BaseCommand = require("../../utils/structures/BaseCommand");
const { MessageEmbed } = require("discord.js");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super("avatar", "general", []);
  }

  async run(client, message, s, args) {
    
    if(args === 'server'){
      let embed = new MessageEmbed()
     .setAuthor(`Icon Link`, message.guild.iconURL({ dynamic: true, size: 2048}))
     .setImage(message.guild.iconURL({ dynamic: true, size: 2048}))
     .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
return message.channel.send(embed)
    }
    
let member = client.users.cache.find(user => user.id == args) ||client.users.cache.find(user => user.tag == args)  || message.mentions.users.last() || message.author;   

    let embed = new MessageEmbed()
     .setAuthor(`Avatar Link`, member.displayAvatarURL({ dynamic: true, size: 2048}), member.displayAvatarURL({ dynamic: true, size: 2048}))
     //.setTitle("Avatar Link")
     .setURL(member.displayAvatarURL({ dynamic: true, size: 2048}))
     .setImage(member.displayAvatarURL({ dynamic: true, size: 2048}))
     .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
    message.channel.send(embed)

        
  }
};
