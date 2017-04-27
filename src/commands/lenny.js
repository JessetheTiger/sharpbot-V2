exports.run = function (bot, msg, args) {
  msg.edit(`${args.join(' ')} ( ͡° ͜ʖ ͡°)`);
};

exports.info = {
    name: 'lenny',
    usage: 'lenny',
    description: 'prints a lenny face'
};
