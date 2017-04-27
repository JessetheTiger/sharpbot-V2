exports.run = function(bot, msg, args) {
  msg.delete();
  msg.channel.sendMessage("Time?")
    .then(message => {
      message.edit(`\`\`LOG>\`\`its **${new Date().toLocaleString()}**`);
    });
};

exports.info = {
    name: 'time',
    usage: 'time',
    description: 'shows the time and date'
};
