exports.run = function (bot, msg, args) {
console.log(args.join(' '))
msg.delete()
};

exports.info = {
    name: 'echo',
    usage: 'echo',
    description: 'echo'
};
