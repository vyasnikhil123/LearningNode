const ProgressBar = require('progress');
ar
const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
   bar.tick();
   if(bar.complete){
      clearIterval(timer);
   }
   
}, 100);
