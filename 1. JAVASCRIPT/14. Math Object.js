/*

MATHS OBJECT :- 

In JavaScript, the Math object is a built-in object that provides properties and methods for mathematical constants and functions. Unlike other objects, Math is not a constructor. All properties and methods of Math are static, meaning they are called directly on the Math object itself.

The math namescap objects contains static properties and methods for mathematical constants and funcions. Math work with the nuber type it dosen't work with Bigint.

-----------
CONSTANT :-
-----------

1) Math.PI : represents the mathematical constant PI (π).

const piValue = Math.PI;
console.log(piValue);

-------------------
BASIC OPERATIONS :-
-------------------

1) Math.abs() : the math.abs() static method returns the absolute value of a number.
console.log(Math.abs(8));

2) Math.round() : rounds a number to the nearest integer. if value if smaller than 0.5 than it will return its base value or if greater than 0.4 or starts from 0.5 it will return next nerrest integer
console.log(Math.round(0.4)); // output : 0
console.log(Math.round(0.5)); // output : 1
console.log(Math.round(1.4)); // output : 1
console.log(Math.round(1.5)); // output : 2

3) Math.ceil(x) : returns the value of x rounded up to its nearest integer
console.log(Math.ceil(1.2)); // output : 2
console.log(Math.ceil(1.6)); // output : 2
console.log(Math.ceil(-1.6)); // output : -1
console.log(Math.ceil(-1.2)); // output : -1

4) Math.flore(x) returns the value of x rounded down to its nearest integer;
console.log(Math.floor(2.7)); // output : 2
console.log(Math.floor(2.4)); // output : 2
console.log(Math.floor(2.9)); // output : 2
console.log(Math.floor(-2.4)); // output : -3

5) Math.trunc(x) : Returns the integer part of x
let trunkValue = Math.trunc(3.7);
console.log(trunkValue);


NOTES :-

-> No matter how many chars are there after decimal they all will always return only number before the decimal.
-> Round rounds to the nearest integer
-> floor always rounds downs
-> ceil always rounds up


----------------------------------------
EXPONENTIAL AND LOGARITHMIC FUNCTIONS :-
----------------------------------------

1. Math.pow() : The Math.pow() method in JavaScript is used to raise a base number to the power of an exponent. It returns the result of the base raised to the exponent.

syntax : Math.pow(base, exponent)

console.log(Math.pow(2, 3)); // Output: 8 (2^3 = 2 * 2 * 2)
console.log(Math.pow(5, 2)); // Output: 25 (5^2 = 5 * 5)
console.log(Math.pow(7, 0)); // Output: 1 (any number to the power of 0 is 1)
console.log(Math.pow(4, -1)); // Output: 0.25 (4^-1 = 1/4)
console.log(Math.pow(9, 0.5)); // Output: 3 (square root of 9)

In modern JavaScript (ES6 and later), you can also use the exponentiation operator (**) as an alternative to Math.pow().

console.log(2 ** 3); // Output: 8
console.log(5 ** 2); // Output: 25

2. Math.sqrt() : Math.sqrt(x) returns the square root of x.
let squareRoot = Math.sqrt(25);
console.log(squareRoot);


Math.log(x) : Math.log(x) retrns the natural logarithm of x.

let logResult = Math.log(1)
let logResult2 = Math.log(2)
console.log(logResult);
console.log(logResult2);

3. Math.roandom() : Math.ranomo() returns a random number 0 (inclusive) and 1 (exclusive).
let x = Math.random();
console.log(x);

examplee :- (generate a random number between zero to nine)

let randomNumber = Math.floor(Math.random()*10);
console.log(randomNumber);

examplee :- (generate a random number between zero to 10)

let randomNumber = Math.floor(Math.random()*11);
console.log(randomNumber);

*/ 




