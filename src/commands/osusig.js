exports.run = function (bot, msg, args) {
  msg.delete()
  msg.channel.send(`osusig :arrow_forward:https://osusig.ppy.sh/image1.png?uid=${args.join(' ')}&m=0`);
};

exports.info = {
    name: 'osu',
    usage: 'osu',
    description: 'osu! signatue'
};
