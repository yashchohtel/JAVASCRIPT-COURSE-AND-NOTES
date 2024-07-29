/*

ASYNC AND AWAIT :-

async and await are keywords in JavaScript that provide a more readable and convenient way to work with asynchronous code, built on top of promises. They allow you to write asynchronous code in a way that looks synchronous, making it easier to understand and maintain.

async Keyword
The async keyword is used to define an asynchronous function. When a function is declared with async, it automatically returns a promise. Even if you explicitly return a value, it will be wrapped in a promise.

await Keyword
The await keyword is used inside an async function to pause the execution of the function until a promise is resolved. It can only be used within an async function.

example :-
let myPromiseOne = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(1) promise is sucessfully resolved");
  } else {
    reject("(1) the promise is failed");
  }
});

let myPromiseTwo = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(2) promise is sucessfully resolved");
  } else {
    reject("(2) the promise is failed");
  }
});

async function doSomething() {
  let value1 = await myPromiseOne;
  console.log(value1);

  let value2 = await myPromiseTwo;
  console.log(value2);
}

doSomething();

---------------

TRY AND CATCH :-

In JavaScript, try and catch blocks are used for error handling. They allow you to execute code that may throw an error and provide a way to handle that error if it occurs. This ensures that your program can continue to run or handle exceptions gracefully without crashing.

Structure of try and catch

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code to run regardless of the try/catch result (optional)
}

Example of try and catch
Here's a basic example of using try and catch to handle an error:

try {
  let result = riskyOperation(); // This function might throw an error
  console.log('Result:', result);
} catch (error) {
  console.error('An error occurred:', error.message);
}

-----------------

let myPromiseOne = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(1) promise is sucessfully resolved");
  } else {
    reject("(1) the promise is failed");
  }
});

let myPromiseTwo = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(2) promise is sucessfully resolved");
  } else {
    reject("(2) the promise is failed");
  }
});

async function doSomething() {

  try{
    let value1 = await myPromiseOne;
    console.log(value1);
    console.log("first task 1st promise");
    console.log("second task 1st promise");
  
    let value2 = await myPromiseTwo;
    console.log(value2);
    console.log("first task 2nd promise");
    console.log("second task 2nd promise");
  }catch(reject){
    console.log(reject);
  }

}

doSomething();

-----------------

FETCHING API WITH ASYNC AWAIT :-

example 1 :-
async function fetching() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let convertedResponse = await response.json();
  console.log(convertedResponse);
}
fetching();


example 2 :-

async function fetching(){
    let response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    let conResponse = await response.json();
    console.log(conResponse.data[1]);
}

fetching();

example 3 :-

async function fetching(){
    let response = await fetch("https://catfact.ninja/fact");
    let conResponse = await response.json();
    console.log(conResponse.fact);
}

fetching();

*/


