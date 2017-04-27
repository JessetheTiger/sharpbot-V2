const Discord = require('discord.js');
const utils = require('../utils');
 const toHHMMSS = seconds => {
            let secNum = parseInt(seconds, 10);
            let hours = Math.floor(secNum / 3600);
            let minutes = Math.floor((secNum - (hours * 3600)) / 60);
            seconds = secNum - (hours * 3600) - (minutes * 60);
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;
            return hours + ":" + minutes + ":" + seconds;
        };
exports.run = function (bot, msg) {
  msg.delete();
  msg.channel.sendMessage('', {
        embed: utils.embed('SharpBot V2 Stats', '***This message will self-destruct in 15 seconds.***',
           [{ name: 'Creator:',
           value: `Jesse#8621`,
           inline: true },
           { name: 'Discord.js Version',
           value: `v${Discord.version}`,
           inline: false },
           { name: 'Memory Info:',
           value: `**Used Memory:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB, **Free Memory:** ${((require('util').inspect(require('os').freemem())) / 1024 / 1024 / 1024).toLocaleString()}GB **Total Memory:** ${((require('util').inspect(require('os').totalmem())) / 1024 / 1024 / 1024).toLocaleString()}GB`,
           inline: true },
		       { name: 'Connection Info:',
           value: `SharpBot V2: Connected to ${bot.guilds.size} servers, for a total of ${bot.channels.size} channels and ${bot.users.size} users.`,
           inline: true },
		       { name: 'Bot Uptime',
		       value: `${toHHMMSS(process.uptime())}`,
		       inline: true },
       ]
        )
    }).then(m => m.delete(15000));
};

exports.info = {
    name: 'stats',
    usage: 'stats',
    description: 'Shows you stats about SharpBot'
};
