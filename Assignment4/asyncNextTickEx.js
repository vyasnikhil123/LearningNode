let bar;

//this has async signature, but calls callback synchronously
function someAsyncApiCall(callback){
   callback();
}

// the callback is called before 'someAsyncApiCall' compltes.
someAsyncApiCall(() => {
// since someAsyncApiCall hasn't completed, bar hasn't been assigned to any value
   console.log('bar', bar); // undefined
});

bar = 1;

 //Or
 
 let bar;
 
 function someAsyncApiCall(callback){
   process.nextTick(callback);
 }
 
 someAsyncApiCall(() => {
    console.log('bar', bar); //1 
 });
 
  bar = 1;
 
 //Or
 
 const server = net.createServer(() => {}).listen(8080);
 server.on('listening', () => {}); 
 
 //Or
 
 const server = net.createServer();
 server.on('connection', (conn) => {});
 
 server.listen(8080);
 server.on('listening', () => {});
 

