
//Example
response.statusCode = 404 // resource wasn't found

//Setting Headers
response.setHeaders('Content-Type', 'application/json');
response.setHeaders('X-Powered-By', 'bacon');
 
 //Or

response.writeHead(200, {
   'Content-Type': 'application/json',
   'X-Powered-By': 'bacon'
});

//Set Response Body
response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!<h1>');
response.write('</body>');
response.write('</html>');
resoponse.end();

//Or

response.end('<html><body><h1>Hello, World!</h1></body></html>')

// All above concept together

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
       //Code
       
       response.on('error', (err) => {
           console.log(err);
       });
       
       response.statusCode = 200;
       response.setHeader('Content-Type', 'application/json');
               // Or  
               //above two line replaced with new one
      //response.writeHead(200, {'Content-Type': 'application/json'});
      
      const responseBody = { headers, method, url, body };
      
      response.write(JSON.stringify(responseBody));
      response.end();
                 //Or
                 //above two line replaced with new one
      //response.end(JSON.stringify(responseBody))   
                       
      //End of new stuff
   });
}).listen(8080);

//Echo Server Example

const http = request('http');

http.createServer((request, response) => {
    let body = [];
    request.on('data', (chunk) => {
       body.push(chunk);
    }).on('end', () => {
       body = Buffer.concat(body).toString();
       response.end(body);
    });
}).listen(8080);

// use above concept for Echo

const http = require('http');

http.createServer((request, response) => {
   request.on('error', (err) => {
       console.log(err);
       response.statusCode = 400;
       response.end();
   });
    response.on('error', (err) => {
      console.error(err);
    });
    
    if(request.method === 'POST'  &&  request.url  ===  '/echo'){
        request.pipe(response);
    } else {
       response.statusCode = 404;
       response.end();
    }
    
}).listen(8080);











































