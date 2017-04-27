exports.run = function (bot, msg, args) {
msg.edit(`${args.join(' ')} (╯°□°）╯︵ ┻━┻`);
};

exports.info = {
    name: 'flip',
    usage: 'flip',
    description: 'prints a flipped table'
};
