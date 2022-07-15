const fs = require('fs');

function someAsyncOperation(callback){
   fs.readFile('/path/to/file', callback)
}

const timeoutScheduled = Date.now();

setTimeput(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

//do someAsyncOperation which takes 95ms to complete
someAsyncOperation(() => {
   const startCallback = Date.now();
   
   //do something that will take 10ms..
   while(Date.now() - startCallback < 10){
     //do nothing
   }
});

// timeout vs immediate.js

setTimeout(() => {
   console.log('timeout');
}, 0); 

setImmediate(() => {
   console.log('immediate')
});
//o/p - timeout immediate

//Or

const fs = require('fs');

fs.readFile(_filename, () => {
      setTimeput(() => {
         console.log('timeout');
      } 0);
      setImmediate(() => {
          console.log('immediate');
      });
});
//o/p - immediate timeout

