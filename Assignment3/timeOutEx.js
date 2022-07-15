const myFunction = (firstParam, secondParam) => {
   //code
}

setTimeout(myFunction, 2000, firstParam, secondParam);

 //Or
 
 const id = setTimeout(() => {
   //code
 }, 2000);
 
 clearTimeout(id);
 
 //Or zero delay
 
 setTimeout(() => {
    console.log('after');
 }, 0);
 
 console.log('before');
 
 //setInterval
 
 const id = setInterval(() => {
    //code
 }, 2000);
 
 clearInterval(id);
 
 //or
 
 const interval = setInterval(() => {
     if(App.somethingIWait === 'arrived'){
        clearInterval(interval);
     }
     //other things
 } 100);
 
 //recursive setTimeout
 
 const myFunction = () => {
    // do
    
    setTi,eout(myFunction, 1000);
 };
 
 setTimeout(myFunction, 1000);
 
 
 
