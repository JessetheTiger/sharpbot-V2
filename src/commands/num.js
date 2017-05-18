exports.run = function (bot, msg, args) {
  var code = args.join(' ');
msg.delete()
  try {
      var evaled = eval(code);
      if (typeof evaled !== 'string')
          evaled = require('util').inspect(evaled);
      msg.channel.send('input :inbox_tray:```JS\n' + clean(code) + '\n``` output :outbox_tray:```JS\n' + clean(evaled) + '\n```');
  }
  catch (err) {
      msg.channel.send('`ERROR` ```xl\n' + clean(err) + '\n```');
  }
};

exports.info = {
  name: 'num',
  usage: 'num <som>',
  description: 'calculates'
};

function clean(text) {
    if (typeof (text) === 'string') {
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    }
    else {
        return text;
    }
}
