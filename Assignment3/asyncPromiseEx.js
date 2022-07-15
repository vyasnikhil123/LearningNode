const doSomethingAsync = () => {
   return new Promise(resolve => {
       setTimeput(() => resolve('I did something'), 3000)
   });
}

const doSomething = async () => {
    console.log(await doSomethingAsync())
}

console.log('Before');
doSomething();
console.log('After');

// or

cont aFunction = async () => {
  return 'test';
};

aFunction().then(alert);  //This will alert test

// or

const aFunction = () => {
   return Promise.resolve('test');
};

aFunction().then(alert); //This will alert test


//async await

const getFirstUserData = async () => {
   const response = await fetch('/users.json');
   const users = await response.json();
   const user = users[0];
   const userResponse = await fetch(`/users/${user.name}`);
   const userData = await userResponse.json();
   return userData;
   
};

getFirstUserData();

//or Multiple async function

const promiseToDoSomething = () => {
   return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 10000);
   })
}

const watchOverSomeoneDoingSomething = async () => {
   const something = await promiseToDoSomething()
   return something + '\n and I watched'
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
   const something = await watchOverSomeoneDoingSomething();
   return something + '\n and I watched as well'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
   console.log(res);
});

