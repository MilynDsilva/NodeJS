const EventEmitter = require('events');
//const emitter = new EventEmitter();

var url ='http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        //send http request
        console.log(message);
    
        
        // Raise an event
        this.emit ('messageLogged', { id: 1, url: 'http:// ' });
        
    }
}

// function log(message){
//     //send http request
//     console.log(message);

    
//     // Raise an event
//     emitter.emit ('messageLogged', { id: 1, url: 'http:// ' });
    
// }

module.exports = Logger;// for obj
//module.exports - log; //exports a log function
//module.exports.enPointurl = url;