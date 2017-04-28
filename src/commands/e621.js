const request = require('request');

exports.run = function (bot, msg, args) {
    if (args.length < 1) {
        throw 'You must enter something to search for!';
    }

    msg.delete();

    msg.channel.sendMessage(':arrows_counterclockwise: Searching...').then(m => {
        var options = {
            url: 'https://e621.net/post/index.json?tags= ' + args.join(' ') + ' order:random',
            json: true,
            headers: {
                'User-Agent': 'add your e621 username here @ E621'
            },
            qs: {
                limit: 3
            }
        };
        request.get(options, (err, res, body) => {
            //Return results if found
            if (!err && Object.keys(`${body[0]}`).length !== 9 && res.statusCode === 200) { // Object.keys(`${body[0]}`).length appears to be 9 when the body is "[]" I've used this to idicate a empty search
                //m.edit(Object.keys(`${body[0]}`).length );
                //m.edit(`${body[0]}`);
                m.edit(`\`\`\`tags =>${args.join(' ')}\`\`\` ${body[0].file_url}`);   //file_url is failure point.
            }
            //Return an error message if one is given
            else if (err) {
                m.edit(`:no_entry_sign: Error! (${res.statusCode}): ${res.statusMessage}`);
            }
            //Return a "No result found message"
            else {
                m.edit(`:mag: No results found.`);
            }
        });
    });
};

exports.info = {
    name: 'e6',
    usage: 'e6 <tags>',
    description: 'Shows you pictures from E621'
};
