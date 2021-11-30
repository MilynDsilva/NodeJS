
var url ='http://mylogger.io/log';

function log(message){
    //send http request
    console.log(message);
}

module.exports.log = log;// for obj
//module.exports - log; //exports a log function
//module.exports.enPointurl = url;