exports.run = function (bot, msg, args) {
msg.delete()
msg.channel.send(`taikosig :arrow_forward:https://osusig.ppy.sh/image1.png?uid=${args.join(' ')}&m=1`);
};

exports.info = {
    name: 'taiko',
    usage: 'taiko',
    description: 'Taiko signatue'
};
