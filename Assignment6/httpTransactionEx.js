const http = require('http');

const server = http.createServer((request, response) => {
    //code
});

const { method, url } = request;
const { headers } = request;
const userAgent = headers['user-agent'];
let body = [];

request.on('data', (chunk)) => {
    body.push(chunk);
}).on('end', () => {
    body = Buffer.concat(body).toString();
    //body has the entire request body stored in it as a string
});

//For Errors

request.on('error', () => {
 //prints the error message
    console.log(err.stack);
});

//All above concept together

const http = require('http');

http.createServer(() => {
   const { headers, method, url } = request;
   let body = [];
   request.on('error', (err) => {
       console.error(err);
   }).on('data', (chunk) => {
       body.push(chunk);
   }).on('end', () => {
        body = Buffer.concat(body).toString();
        //At this point, we have the headers, method, url and body
        // do code we need to in order to respond to this request.
   })   
}).listen(8080); //Activates this server, listening on port 8080.

















