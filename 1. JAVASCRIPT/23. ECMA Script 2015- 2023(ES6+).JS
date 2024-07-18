/*

ES6 [2015]

1] VAR AND LET AND CONST :- 

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

====================================================================================
====================================================================================

2]. DEFAULT PARAMETERS :-

In ECMAScript 6 (ES6). default parameters were introduced, providing a more consise way to handle function parameter defaults. Default parameters allow you to specify deault values for function parameters in te function declaration itself.If a parameter is not provided when the function is called, the default value is used.

Dedfault function parameters allow named parameters to be initialized with deault values if no values or undefined is passed.

example 1:- 

function sum(num1 = 10,num2 = 20){
console.log(num1+num2);
}
    
sum();
    
====================================================================================
====================================================================================

3]. ARROW FUNCTION :-

IN ECMAScript 6 (ES6), arrow function, algo known as fat arrow functions or lambda function, were introduced as a consise way to write annymous functions. Arrow functions provide a shorter syntax compared to traditional function expressions, making them particularly useful for writing compact and expressive code.

Syntax :- 

(parameters) => { function body };


example 1:-

let sum = (a,b) => {
    console.log(`sum of ${a} and ${b} is ${a+b}`);
}

sum(10,6);

NOTES :- 

1: If the function body consists of a single expression, the braes {} and the return keyword can be ommited.

let sum = (a, b) => `sum of ${a} and ${b} is ${a + b}`;
console.log(sum(10, 6));

2: If there is only one parameter, the parentheses () around the aramete list can be moitted.

let greet = message => console.log(`${message} and welcome everyone`);
greet("HELLO");

3: If there are no parameters, use an empty set of parentheses ().

const greet = () => console.log(`welcome everyone`);
greet();

-----------------------------------------------

example 1 :- Write a js function calculator that take two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subraction, multilication, and  division.

let calculation = (num1, num2, operater) => {
  let result;

  switch (operater) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
  }

  console.log(result);
};

calculation(4,2,"*")


example 2 :- Write a function to reverse a given string without using built-in reverse methods.

const isReverse = (str) => {

  let reversed = "";

  for(let char = str.length; char >= 0; char-- ){
      console.log(str[char]);
      reversed = reversed + str[char]
  }

  console.log(`reversed name of ${str} is ${reversed}`);

};

example 3 :-  create a function to determine if a given string is a palindrone.

let isPalindrome = (str) => {

  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }

  if (reversedStr === str) {
    console.log(`yes your word ${str} is a palandrome word`);
  } else{
    console.log(`no your word ${str} is not a palandrome word`);
  }

};

isPalindrome("malayalam");

====================================================================================
====================================================================================

4]. OBJECT PROPERTIES

const name = 'yash';
const age = 30;

traditional way 
const person = {name : name , age: age};

using shorthand notation for object property
const person1 = {name,age};
console.log(person);
console.log(person1);

Insted of specifing name:name and age:age, you can simply use name and ag directly withn the object literal, thansks to es6 sorthand property natation.

====================================================================================
====================================================================================

5]. DESTRUCTURING 

Destructuring in Javascript is a way to extract values from arrays or objects and assign them to variables in a consise and readable manner. 

use case : make code cleaner and avoides reptitive copying of values.

-------------

DESTRUCTURING ARRAY

Destructuring is a js expression that makes it possible to unpack values from arrays, or properties from oejects, into distinct variables that is, we can extract data from arrays and objects and assign them to variables. 

Array destructuring lets you assign elements of an array to variables directly.

example 1:-
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

example 2:-

let arr = [1, 2, 3];
let [a, b, c, d] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // undefined (because there is no value for d in the array)

------------

Skipping Elements : You can skip elements in the array by leaving empty spaces between commas.

example 1:-
let [a, , c] = [1, 2, 3];
console.log(a); // 1
console.log(c); // 3

example 2:-
let [a, b, c,d] = [1, ,2, 3];
console.log(a); // 1
console.log(b); // undefined
console.log(c); // 2
console.log(d); // 3

------------

Default Values : You can provide default values that will be used if the array does not have enough elements.

let [a, b = 2] = [1];
console.log(a); // 1
console.log(b); // 2

------------

Rest Syntax : You can use the rest syntax to collect the remaining elements into a single variable.

let [a, ...rest] = [1, 2, 3, 4];
console.log(a);    // 1
console.log(rest); // [2, 3, 4]

-------------

Destructuring nested array :-

let book = ["js", 100, 200, ["js prints",]];

let [name,price,pages,[publication, year = 2024]] = book;
console.log(year);

------------------------

DESTRUCTURING OBJECT

Object destructuring allows you to extract properties from an object and assign them to variables.

let book =  {
    name: "javascript",
    page: 200,
    price: 299,
    publication: "js prints",
    year : 2024
}

let {name, page, price, publication, year} = book;
console.log(publication);

----------

Renaming Variables : You can assign properties to variables with different names using ":" syntax

let book =  {
    name: "javascript",
    page: 200,
    price: 299,
    publication: "js prints",
    year : 2024
}

let {name : title, page : size, price : value, publication: prints, year : print_date} = book;
console.log(prints);

------------

Default Values : You can provide default values for properties that might be undefined.

let book =  {
    name: "javascript",
    page: 200,
    price: 299,
    publication: "js prints",
}

let {name : title, page : size, price : value, publication: prints, year = 2030} = book;
console.log(year);

------------

Nested Destructuring : You can destructure nested objects as well.

let book =  {
    name: "javascript",
    page: 200,
    price: 299,
    publication:{
        printName: "ja prints",
    }
}

let {name : title, page : size, price : value, publication : {printName : pName, year : printYear = 2024}} = book;
console.log(printYear);

-------------

Combined Array and Object Destructuring : You can combine array and object destructuring for more complex structures.

let people = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
let [{ name: firstName }, { age: secondAge }] = people;
console.log(firstName); // "Alice"
console.log(secondAge); // 30

--------------

Function Parameters Destructuring : Destructuring can be used directly in function parameters, making it easy to handle objects or arrays passed as arguments.

array :-

function print([a, b]) {
  console.log(a, b);
}
print([1, 2]); // 1 2


object :-

function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}
greet({ name: "Alice", age: 25 }); // Hello, Alice. You are 25 years old.

====================================================================================
====================================================================================

7]. SPREAD OPERATOR 

The spread operator (...) in JavaScript is a powerful tool that allows you to expand iterable objects (such as arrays or strings) and expand object literals into individual elements or properties. It is used in various contexts, such as function calls, array literals, and object literals, to simplify operations and make the code more readable.

------------

Spread Operator with Arrays

Copying Arrays : You can create a shallow copy of an array using the spread operator.

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2); // [1, 2, 3]


Concatenating Arrays : The spread operator allows you to concatenate arrays easily.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

Adding Elements to Arrays : You can add elements to an array in a concise way.

let arr = [1, 2, 3];
let newArr = [0, ...arr, 4];
console.log(newArr); // [0, 1, 2, 3, 4]

------------

Spread Operator with Object

Copying Objects : You can create a shallow copy of an object using the spread operator.

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 };
console.log(obj2); // { a: 1, b: 2 }


Merging Objects : The spread operator can merge objects by combining their properties.

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }


Adding/Overwriting Properties : You can add or overwrite properties in an object.

let obj = { a: 1, b: 2 };
let newObj = { ...obj, b: 3, c: 4 };
console.log(newObj); // { a: 1, b: 3, c: 4 }

------------

Spread Operator with Object

Passing Array Elements as Arguments : The spread operator allows you to pass array elements as arguments to a function.

function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

------------

Spread Operator with Strings : You can use the spread operator to split a string into individual characters.

let str = "hello";
let chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

====================================================================================
====================================================================================

8]. REST PARAMETER 

The rest parameter syntax in JavaScript allows you to represent an indefinite number of arguments as an array. It provides a way to collect multiple arguments into a single parameter, which makes handling function arguments more flexible and concise.

The rest parameter syntax uses three dots (...) followed by the name of the parameter.

function myFunction(...args) {
  args is an array
}

Usage
Collecting Function Arguments
When you use the rest parameter, it collects all remaining arguments passed to the function and stores them in an array.

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

-------------

Combining with Other Parameters
The rest parameter can be combined with regular parameters, but it must be the last parameter in the function definition.

function myFunction(a, b, ...rest) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [3, 4, 5]
}

myFunction(1, 2, 3, 4, 5);

-------------

Note :- A function defination can only have one rest parameter, and the rest parameter must be the last parameter in the function defination.

function wrong1(...one, ...wrong){}
function wrong2(...one, arg1, arg2){}
function right1(arg1, arg2, ...last){}

*/ 


