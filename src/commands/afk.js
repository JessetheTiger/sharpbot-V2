exports.run = function (bot, msg) {
    bot.afk = true;
    msg.edit(`\`\`LOG>\`\`marked as AFK`).then(m => m.delete(1000));
};

exports.info = {
    name: 'afk',
    usage: 'afk',
    description: 'Marks you as AFK'
};
