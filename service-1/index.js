// Build a server with Node's HTTP module
const http = require('http');
const port = 3002;
const server = http.createServer();

server.on('request', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.end('Hello, I am service 2!')
})

// Start the server
server.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server is listening on port ${port}`)
})