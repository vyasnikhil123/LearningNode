 
 //Callback Nesting
 
 window.addEventListener('load', () => {
    document.getElementById('button').addEventListener('click', () => {
       setTimeout(() => {
          items.forEach(item => {
              //code
          });
       }, 2000);
    });
 });
