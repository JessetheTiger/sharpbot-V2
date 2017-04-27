const utils = require('../utils');

const getHelp = function (bot, command) {
    return {
        name: `\`${command.info.name}\``,
        value: `Usage: \`${bot.config.prefix}${command.info.usage}\`\nDescription: ${command.info.description}`
    };
};

exports.run = function (bot, msg, args) {
    if (args.length < 1) {

        var fields = [];
        for (const cmd in bot.commands) {
            fields.push(getHelp(bot, bot.commands[cmd]));
        }

        msg.delete();
        msg.channel.sendMessage('', {
            embed: utils.embed('Commands', 'This message will self-destruct in 20 seconds.', fields, { inline: true })
        }).then(m => m.delete(20000));

        return;
    }

    let command = bot.commands[args[0]];
    if (!command) {
          msg.delete();
  msg.channel.sendMessage(`:no_entry_sign: The command '${args[0]}' does not exist!`).then(m => m.delete(2000));
    } else {
          msg.delete();
  msg.channel.sendMessage('', {
            embed: utils.embed('', 'This message will self-destruct in 20 seconds.', [getHelp(bot, command)])
        }).then(m => m.delete(20000));
    }
};

exports.info = {
    name: 'help',
    usage: 'help [command]',
    description: 'Shows you help for all commands or just a single command'
};
