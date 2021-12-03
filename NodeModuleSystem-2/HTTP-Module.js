const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.write('hello world');
        res.end();
    }

    if(req.url === '/api/cs'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
}); //server is event emitter



server.listen(3000);

console.log('Listening on port 3000...');


















//BASIC SERVER \/


// const http = require('http');

// const server = http.createServer(); //server is event emitter

// server.on('connection',(socket) =>{
//     console.log('New connection...');
// });

// server.listen(3000);

// console.log('Listening on port 3000...');




//https://nodejs.org/dist/latest-v8.x/docs/api/http.html