exports.run = function (bot, msg, args) {
    let messagecount = parseInt(args[0]) || 1;

    var deletedMessages = -1;

    msg.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
        .then(messages => {
            messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
        }).then(() => {
            if (deletedMessages === -1) deletedMessages = 0;
            msg.channel.send(`\`\`LOG>\`\`Purged \`${deletedMessages}\` messages.`)
                .then(m => m.delete(5000));
        }).catch(console.error);

};

exports.info = {
    name: 'purge',
    usage: 'purge [amount]',
    description: 'Deletes a certain number of messages'
};
