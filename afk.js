const mineflayer = require('mineflayer');
const loggers = require('./logging.js');
const logger = loggers.logger;

function createBot() {
    const bot = mineflayer.createBot({
        username: 'Spirite_BOT',
        auth: 'offline',
        host: 'jartexnetwork.com'
    });

    bot.once('spawn', () => {
        logger.info("Bot joined to the server");
        
        bot.chat("/login rjsingh07")

        setInterval(() => {
            bot.chat(`/spawn`);
            bot.chat(`/f warp afk`)            
        }, 1800 * 1000);

        setInterval(() => {
            bot.quit();
            createBot()
        }, 3600 * 1000)
    })



    bot.on('chat', (username, message) => {
       logger.info(`<${username}> ${message}`);

    });
}

createBot();