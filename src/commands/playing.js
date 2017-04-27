exports.run = function(bot, msg, args) {
  var game = args.join(" ");

  bot.user.setGame(game);

  msg.edit(`\`\`LOG>\`\`your now playing \`\`${args.join(' ')}\`\``).then(msg.delete(1000).catch(console.error));
};

exports.info = {
    name: 'playing',
    usage: 'playing <custom game>',
    description: 'displays custom game'
};
