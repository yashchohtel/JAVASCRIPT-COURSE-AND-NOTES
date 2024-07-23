/*

CALLBACK FUNCTION 

A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed. This pattern is commonly used for asynchronous operations, such as loading data from a server, reading files, or responding to user events.


Key Concepts of Callback Functions
Function as an Argument: A callback function is a function that is passed as an argument to another function.
Execution After Operation: The callback function is called (executed) after the completion of the operation in the host function.
Asynchronous Behavior: Callbacks are often used to handle asynchronous operations to prevent blocking the main execution thread.

------------

Example of a Callback Function :-


Synchronous Callback : In this example, the callback function is executed immediately during the execution of the host function.


function greet(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  const name = 'John Doe';
  callback(name);
}

processUserInput(greet); // Output: Hello John Doe

------------

example 2:-

function add(x,y){
  return x+y;
}

function test(x,y,operation){
  console.log(operation);
  let result = operation(x,y);
  console.log(result);
}

test(3,1,add)

*/ 



