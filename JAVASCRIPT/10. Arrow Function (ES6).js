/*

ARROW FUNCTION :-

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










*/























































