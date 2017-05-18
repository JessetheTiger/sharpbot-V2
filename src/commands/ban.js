exports.run = function(bot, msg, args) {
  msg.delete();
  let ban_id = args[0];
  let days = args[1];
if(msg.mentions.users.size === 0) {
      return msg.channel.send('`Mention a user!`');
    }
    let banMember = msg.guild.member(msg.mentions.users.first());
    if(!banMember) {
      return msg.channel.send('`Invalid user!`');
    }

if (!msg.guild.member(banMember).kickable) return msg.channel.send(`\`\`LOG>\`\`missing **banMember** permissions`);

if(banMember.ban()) {
return msg.channel.send(`\`\`LOG>\`\`the user ${args.join(' ')} has been banned`);
}
};


exports.info = {
    name: 'ban',
    usage: 'ban <@user>',
    description: 'bans a user'
};
