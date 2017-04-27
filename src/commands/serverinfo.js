const utils = require('../utils');
exports.run = function (bot, msg, guild) {
var tag = msg.guild.owner.user;
  msg.editEmbed(
        utils.embed('', {
          embed: utils.embed('serverinfo',
            (`\`\`\`JS
            server name: "${msg.guild.name}"
            server ID: "${msg.guild.id}"
            server owner: "${tag.username}#${tag.discriminator}"
            server ownerID: "${msg.guild.ownerID}"
            memberCount: "${msg.guild.memberCount}"
            afk Timeout: "${msg.guild.afkTimeout / 60}minutes"


            located at: "${msg.guild.region}"
            created at: "${msg.guild.createdAt.toLocaleString()}"\`\`\``))
    }))
  msg.delete(20000);
};

exports.info = {
    name: 'serverinfo',
    usage: 'serverinfo',
    description: 'gives server info'
};
