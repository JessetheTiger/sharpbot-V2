exports.run = function(bot, msg, args) {
  msg.delete();
if(msg.mentions.users.size === 0) {
      return msg.channel.send('`Mention a user!`');
    }
    let kickMember = msg.guild.member(msg.mentions.users.first());
    if(!kickMember) {
      return msg.channel.send('`Invalid user!`');
    }
if (!msg.guild.member(kickMember).kickable) return msg.channel.send(`\`\`LOG>\`\`missing **kickMember** permissions`);

if(kickMember.kick()) {
 return msg.channel.send(`\`\`LOG>\`\`the user ${args.join(' ')} has been kicked`);
	}
};


exports.info = {
  name: 'kick',
    usage: 'kick <@user>',
    description: 'kicks a user'
};
