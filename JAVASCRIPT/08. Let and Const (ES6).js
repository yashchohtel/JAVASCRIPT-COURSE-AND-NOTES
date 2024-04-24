/*

VAR ANDLET AND CONST :- 

1. var :- var is function-scoped. This means that variables declared with var are function-scoped, meaning their scope is limited to the function they are declared in, or if not declared inside a function, they have global scope.
Variables declared with var can be re-declared and updated anywhere within their scope.

var variables are hoisted to the top of their scope during execution. This means you can access a var variable before it's declared, although its value will be undefined.

----------

2. let :- The let keyword is used to declare variable with block scope variables declared with let are mutable, meaning their values can be reassigned.

let is block-scoped. This means that variables declared with let are limited to the block in which they are defined, such as a loop, conditional statement, or a block of code inside curly braces {}.

Variables declared with let can be updated, but not re-declared within the same block.
let variables are not hoisted to the top of their block.

----------

3. const :- The const keyword is used to declare variable with block scope, but once a value is assigned to a const variable, it cannot be reassigned. const variable are immutable.

const is also block-scoped.
Variables declared with const are constant and cannot be reassigned a new value once they are initialized.

However, for objects and arrays declared with const, their properties or elements can still be mutated. In other words, while you can't reassign a new object or array to a const variable, you can modify its properties or elements.


================================

TEMPLATE STRING :- IN ECMAScript 6 (es6), template stings, also knwon as template literals, provide a convenient and flexible way to create strings in javascript. Template strings are enclosed in backtics rather single or double quotes.

let firstName = "yash";
let lasttName = `chohtel`;

let fullName = firstName + lasttName;
let fullName = `my full name is ${lasttName} ${lastName}`; // exampele of template string.

Template strings support string interpolation, allowing you to embed expressions directly within the string. Interpolated expression are enclosed in ${}


String Interpolation :- Template strings supports strin interplation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}.


let age = 30;
console.log(`i am ${age} years old`);























*/
