var fs = require('fs');
var file = process.argv[2];

//First Way
fs.readFile(file, function(err, contents){
  var lines = contents.toString().split('\n').length - 1;
  console.log(lines)
});


/*
//Second Way
function asyncPro(err, contents){
  if(err) return console.error(err);
  var lines = contents.toString().split('n').length - 1;
  console.log(lines);
}
 fs.readFile(file, asyncPro);
 */
 
 /*
 //Third Way
 fs.readFile(file, firstAsync)
 function firstAsync(err, contents){
   var lines = contents.toString().split('n').length - 1;
   console.log(lines); 
 }
 */
