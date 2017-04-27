exports.run = function(bot, msg, args) {
  msg.delete();
  msg.channel.sendMessage("Ping?")
    .then(message => {
      message.edit(`\`\`LOG>\`\`Pong! (took: ${message.createdTimestamp - msg.createdTimestamp}ms)`);
    });
};

exports.info = {
    name: 'ping',
    usage: 'ping',
    description: 'shows ping'
};
