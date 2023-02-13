const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer ((request, respond) => {
    console.log(
        `http request`
    )
})