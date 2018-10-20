const EventEmitter = require('events');
// const Math = require('Math');
const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send a HTTP request to log the received message
        console.log(message);
        var id = Math.random();
    
        // Raise an event
        this.emit('messageLogged', {id: id, url: url});
    }
}

module.exports = Logger;
