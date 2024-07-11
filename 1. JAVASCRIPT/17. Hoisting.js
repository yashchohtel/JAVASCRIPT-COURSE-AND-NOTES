/*

HOISTING

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope (the script or function) during the compile phase. This means that you can use functions and variables before they are declared in your code.

When a funcion declaration is hoisted, its entire defination (including the body) is moved to the top of its containing scope during the creatio phase. This means that you can call the function before its actually declared in the code, and it will still works as expected.

example :-

var myVar = 10;
function greet(){
    console.log("hello this is javascript");
} // normally calling function and log after defineing
console.log(myVar); // output: 10
greet(); // output: hello this is javascript

// calling function and variable before decleration it will work the same because it is hoisted in the top of is scope. 
console.log(myVar); // output: undefined (because it only hoist declearation not initilization.)
greet(); // output: hello this is javascript

var myVar = 10;
function greet(){
    console.log("hello this is javascript");
} // normally calling function and log after defineing

NOTE :- let, const and arrow function not hoisted.

*/ 
