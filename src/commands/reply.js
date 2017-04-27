exports.run = function(bot, msg, args) {
  const [replyTo, ...replyText] = args;
  msg.channel.fetchMessages({limit: 1, around: replyTo})
  .then(messages=> {
    const replyToMsg = messages.first();
    msg.channel.sendMessage(replyText.join(" "), {embed: {
      color: 3447003,
      author: {
        name: `${replyToMsg.author.username} (${replyToMsg.author.id})`,
        icon_url: replyToMsg.author.avatarURL
      },
      description: replyToMsg.content
    }})
    .then(() => msg.delete());
  }).catch(console.error);
};

exports.info = {
    name: 'reply',
    usage: 'reply <msgid/userid> <relied text>',
    description: 'repies to a person or message'
};