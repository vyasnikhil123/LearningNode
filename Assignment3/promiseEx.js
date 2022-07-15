const fs = require('fs');

const getFile = fileName => {
   return new Promise((resolve, reject) => {
      fs.readFile(fileName, (err, data) => {
           if(err){
             reject(err);
             return;
           }
           resolve(data);
      })
   })
}

getFile('etc.passd')
   .then(data => console.log(data))
   .catch(err => consoe.error(err));
   
   //Or
   
const isItDone = new Promise(/*..as above..*/);   
 const checkIfItsDone = () => {
   isItDoneYet
     .then(ok => {
        console.log(ok);
     })
     .catch(err => {
         console.error(err);
     });
};

// Chain promise

const status = response => {
   if(response.status >= 200 && response.status < 300){
      return Promise.resolve(response);
   }
   return Promise.reject(new Error(response.statusText))
}

const json = response => response.json();

fetch('./todo.json')
     .then(status)
     .then(json)
     .then(data => {
       //
       console.log('Request succeded with JSON response', data);  
     })
     .catch(error => {
         console.log('Request failed', error);
     });
     
     
  //Handle errors
  
new Promise((resolve, reject) => {
   throw new Error('Error');
}).catch(err => { 
   console.log(err);
})   

 // Or
 
 new Promise((resolve, reject) => {
      reject('Error');             
 }).catch(err => {
      console.error(err) 
 });
 
 //Promise.all()
 const f1 = fetch('./something.json');
 const f2 = fetch('/something.json');
 
 Promise.all([f1, f2])
      .then(res => {
         console.log('Array of results', res);
      })
      .catch(err => {
        console.error(err)
      });
      
  // Or
 Promise.all([f1, f2]).then([res1, res2]) => {
    console.log('Results', res1, res2);
 });    
 
