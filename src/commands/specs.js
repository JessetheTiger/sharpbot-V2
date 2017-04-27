const Discord = require('discord.js');
const utils = require('../utils');

exports.run = function (bot, msg) {
  msg.delete();
  msg.channel.sendMessage('', {
        embed: utils.embed('SharpBot Stats', '***This message will self-destruct in 20 seconds.***', 
           [{ name: 'Free Memory:',
           value: `${((require('util').inspect(require('os').freemem())) / 1024 / 1024 / 1024).toLocaleString()}GB`,
           inline: true },
           { name: 'Total Memory:',
           value: `${((require('util').inspect(require('os').totalmem())) / 1024 / 1024 / 1024).toLocaleString()}GB`,
           inline: true },
           { name: 'Mem Usage:',
           value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
           inline: true },
           { name: 'CPU:',
           value: `${require("util").inspect(require('os').cpus().map(m => m))}`,
           inline: true },
           ]
        )
    }).then(m => m.delete(20000));
};

exports.info = {
    name: 'specs',
    usage: 'specs',
    description: 'Shows you the host specs'
};
