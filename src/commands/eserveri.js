exports.run = function(bot, msg, args) {
  var tag = msg.guild.owner.user;
  msg.delete();
  msg.channel.send({
    embed: {
      color: 3447003,
      author: {
        name: msg.guild.name,
        icon_url: msg.guild.iconURL
      },
      title: 'Statistics',
      url: '',
      description: 'serverinfo',
      fields: [{
          name: 'Owner:',
          value: `${tag.username}#${tag.discriminator} (${msg.guild.owner.id})`
        },
        {
          name: 'Member Count',
          value: `${msg.guild.memberCount} (${msg.guild.members.filter(m=>m.user.bot).size} Bots)`,
          inline: true
        },
        {
          name: 'AFK Timeout',
          value: `${msg.guild.afkTimeout / 60} minutes`,
          inline: true
        },
        {
          name: 'Location',
          value: msg.guild.region,
          inline: true
        },
        {
          name: 'Created',
          value: msg.guild.createdAt.toLocaleString(),
          inline: true
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: bot.user.avatarURL,
        text: '© Ｊｅｓｓｅ / Ｍａｘｉｎｅ#8621'
      }
    }
  });
}

exports.info = {
  name: 'server',
  usage: 'server',
  description: 'shows the serverinfo in embed'
};
