const bar = () => console.log('bar');
const baz = () => console.log('baz');

const foo = () => {
  console.log('foo');
  bar(),
  baz()
}
// o/p - foo  bar  baz
 
   //Or
   
const foo = () => {
  console.log('foo');
  setTimeout(bar, 0);
  baz();
}  
//o/p - foo baz bar

      //Or
      
const foo = () => {
   console.log('foo');
   setTimeout(bar, 0)
   new Promise((resolve, reject) => {
     resolve('shoul be right after baz, before bar')
   }).then(resolve => console.log(resolve))
   baz()
}      
//o/p - foo baz should be right after ba, before bar bar

foo();




