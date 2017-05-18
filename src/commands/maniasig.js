exports.run = function (bot, msg, args) {
  msg.delete()
  msg.channel.send(`maniasig :arrow_forward:https://osusig.ppy.sh/image1.png?uid=${args.join(' ')}&m=3`);
};

exports.info = {
    name: 'mania',
    usage: 'mania',
    description: 'mania signatue'
};
