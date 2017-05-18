# SharpBot-V2
SharpBot-V2 is an ever-expanding selfbot for Discord.js v11.1 with mostly utilitarion commands, but also a few fun commands.

# Download and install
Make sure that the git command-line tools are installed on your computer, and have NPM isntalled as well
- `git clone https://github.com/JessetheTiger/sharpbot-V2.git`
- `cd sharpbot-V2`
- `unzip node_modules.zip`
- `i recommend installing pm2 from` [here](https://github.com/Unitech/pm2)
- `edit config.json by adding your user-token`

# running
Assuming you have set up the config file with the user-token, and installed pm2 simply run `pm2 start bot.js` from `sharpbot-V2\src`
then to view the console simply run `pm2 m`or `pm2 m 0` (as 0 is the default id for the bot to have)

> Again, if you have `npm` and but not `pm2` then you can do `npm run bot.js` instead. I cannot gaurantee this will work! `npm` is not very stable.

## Credits
the original base for the selfbot came from [here](https://github.com/eslachance/djs-selfbot-v9). 
The `prune` and `purge` commands are basically the only remaining parts of the original code,
and even **they** have been modified to some degree or another. 

The rest is all either my code, or snippets I have found online (but mostly just my code).

