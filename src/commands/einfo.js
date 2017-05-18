exports.run = function (bot, msg, args) {

  msg.delete();
  if(msg.mentions.users.size === 0) {
      return msg.channel.send('`Mention a user!`');
    }
    let info = msg.mentions.users.first();
    if(!info) {
      return msg.channel.send('`Invalid user!`');
    }
    msg.channel.send(`!!embed **\`\`\`js
userInfo of: ${info.username}#${info.discriminator}
${require("util").inspect(info, { depth: 1 })}\`\`\`**`);
};

exports.info = {
    name: 'einfo',
    usage: 'einfo <@Mention>',
    description: 'gives detailed user info in embed'
};
