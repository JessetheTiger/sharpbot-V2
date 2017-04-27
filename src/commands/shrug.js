exports.run = function (bot, msg, args) {
  msg.edit(`${args.join(' ')} ¯\\\_(ツ)\_/¯`);
};

exports.info = {
    name: 'shrug',
    usage: 'shrug',
    description: 'shrugs'
};
