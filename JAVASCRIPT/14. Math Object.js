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


*/ 



