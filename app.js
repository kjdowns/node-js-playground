const http = require('http');
const server = require('./modules/server')

const hostname = '127.0.0.1';
const port = 3000;

server.start(http, hostname,port)