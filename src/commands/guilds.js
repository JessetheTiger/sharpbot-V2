const utils = require('../utils');

exports.run = function (bot, msg) {
  msg.delete();
  msg.channel.sendMessage('', {
        embed: utils.embed(`${bot.user.username}'s Servers`, `${bot.user.username} is a part of the following servers:\n\n${bot.guilds.map(g => '- ' + g.name).sort().join('\n')}`)
    }).then(m => m.delete(30000));
};

exports.info = {
    name: 'guilds',
    usage: 'guilds',
    description: 'Lists all guilds that you\'re a member of'
};