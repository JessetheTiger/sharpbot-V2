exports.run = function(bot, msg, args) {
  var tag = msg.guild.owner.user;
  msg.delete();
  msg.channel.sendMessage(`!!embed \`\`\`js
        serverinfo of ${msg.guild.name}
Guild{
  serverName: '${msg.guild.name}',
  serverID: '${msg.guild.id}',
  serverOwner: '${tag.username}#${tag.discriminator}',
  serverOwnerID: '${msg.guild.ownerID}',
  memberCount: '${msg.guild.memberCount}',
  afkTimeout: '${msg.guild.afkTimeout / 60} minutes',
  locatedAt: '${msg.guild.region}',
  createdAt: '${msg.guild.createdAt.toLocaleString()}' }\`\`\``);
    };

exports.info = {
    name: 'eserver',
    usage: 'eserver',
    description: 'shows the serverinfo in embed'
};
