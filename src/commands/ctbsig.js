exports.run = function (bot, msg, args) {
  msg.delete()
  msg.channel.send(`ctbsig :arrow_forward:https://osusig.ppy.sh/image1.png?uid=${args.join(' ')}&m=2`);
};

exports.info = {
    name: 'ctb',
    usage: 'ctb',
    description: 'CTB signatue'
};
