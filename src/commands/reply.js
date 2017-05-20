exports.run = function(bot, msg, args) {
  const [replyTo, ...replyText] = args;
  msg.channel.fetchMessages({limit: 1, around: replyTo})
  .then(messages=> {
    const replyToMsg = messages.first();
    msg.channel.send(replyText.join(" "), {embed: {
      color: 16711680,
      author: {
        name: `${replyToMsg.author.username}#${replyToMsg.author.discriminator} ${replyToMsg.author.toString()}`,
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
