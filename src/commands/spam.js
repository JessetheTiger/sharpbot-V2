exports.run = function (bot, msg, args) {
  msg.delete();
  msg.channel.send(`${args.join(' ')}`);
  msg.channel.send(`${args.join(' ')}`);
  msg.channel.send(`${args.join(' ')}`);
  msg.channel.send(`${args.join(' ')}`);
  msg.channel.send(`${args.join(' ')}`);
};

exports.info = {
    name: 'spam',
    usage: 'spam <message>',
    description: 'spams your message 5 times'
};
