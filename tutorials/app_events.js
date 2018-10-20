const EventEmitter = require('events');
const Logger = require('./logger');

const logger = new Logger;

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Lisener invoked. Arguments: ', arg);
})

logger.log('Log this!');
