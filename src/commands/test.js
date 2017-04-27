exports.run = function (bot, msg, args) {
	msg.delete()
  msg.channel.sendMessage("test").then(msg => { 
  msg.edit("test 1.")
  msg.edit("test 1.2.")
  msg.edit("test 1.2.3.")
  msg.delete(1000);
});
};

exports.info = {
    name: 'test',
    usage: 'test',
    description: 'test if bot is running'
};

