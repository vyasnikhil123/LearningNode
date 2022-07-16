
const fs = require('fs'); //synchronous file read
const data = fs.readFileSync('/file.md'); //blocks here until file is read

//Asynchronous file read
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
    if(err) throw err;
});

// Or

const data = fs.readFileSync('/file.md'); //blocks here until file is read
console.log(data);
moreWork();// will run after console.log

//Async example

fs.readFile('/file.md', (err, data) => {
       if(err) throw err;
       console.log(data);
});
moreWork(); //will run before console.log

//Mixture of Blocking and Non Blocking Code

const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
   if(err) throw err;
   console.log(data);
});

fs.unlinkSync('/file.md'); //Execute first and delete file.md before read

//Or 

const fs = require('fs');
fs.readFile('/file.md', (readFileErr, data) => {
    if(readFileErr) throw readFileErr;
    console.log(data);
    fs.unlink('/file.md', (unlinkErr) => {
       if(unlinkErr) throw unlinkErr;
    });
}); // it is a non-blocking call to fs.unlink() with a callback of fs.readFile() which gives correct order




































