/*  

EXPRESSION AND OPERATOR :-

Operators are the symbols between values that allow different operations like addition, subtraction, multiplication, and more. Operators are used to assign values, compare values, perform arithmetic operations, and more.

example :-

let a = 5 + 10; Here (=) is assignment operator | 5 and 10 are operend 5 is left operend 10 is right operend | (+) is Arithmetic addition operator
Combination of left operand, operator and right operand is make an expression and this is we call expression.


There are different types of JavaScript operators:

Assignment Operators
Arithmetic Operators
Comparison Operators
Logical Operators
Conditional (ternary) Operators
Unary Operators
Type Operators

-------------------------------

1. ASSIGNMENT OPERATOR :- 

Assignment Operators in programming are symbols used to assign values to variables. They take the value on the right side of the assignment operator and assign it to the variable on the left side.

example:-

var myFavNum = 69; here myFavNum is variable (=) is assignment operator and 69 is number type value and (=) is assigning it to myFavNum variable.

-------------------------------

2. ARITHMETIC OPERATORS :-

Arithmatic operators in programming perform basic mathematical operations on variablesor values. They include addition, subtraction, multiplication, division, and modulus.

---------------

a)  Addition (+) : Adds two values or variables

example :-

let a = 1;
let b = 1;
let c = a+b;
console.log(c);
output = 2;

---------------

b) Subtraction (-) : subtract two number

example :-

let a = 1;
let b = 1;
let c = a-b;
console.log(c);
output = 0;

---------------

c) Multiplication (*) : used to multiplication

example :-

let a = 1;
let b = 1;
let c = a*b;
console.log(c);
output = 1;

---------------


_____________________________

75 divided by 6 (75%6) 

(a)6 | 75 (b) | 12 (c)
      -6
   ----------
       15
      -12
   ----------
       3 (d)
   ----------

(a) divisor | (b) divident | (c) quotient| (d) remainder
_____________________________

d) Division (/) : Divides the left operand by the right operand

example :-

let a = 1;
let b = 1;
let c = a/b;
console.log(c);
output = 0;

e) Modulus (%) : Returns the remainder when the left operand is divided by the right operand.

Var c = 17;
var d = 5;
var remainder = c%d;
output = 2

f) exponentiation Operator (**) : it returns the result of raising the first operand to the power of the second operand. 

let x = 10;
let y = 3;
console.log(x**3);
console.log(x**y);


-------------------------------

3. COMPARISON OPERATORS :-

Comparison operators in javascript are used to compare values and return a boolean result (true o false).

-------------

a) Equal (==) : Checks if two values are equal, performing type coercionif necessary.

console.log(5 == 5);
output : true

-------------

b) Stric Equal (===): Checks if two values are equal without performing type coercion. it also compare datatype

console.log("5" == 5);
output : false

What is the difference between === and == in JS?
== in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values. Checks the equality of two operands without considering their type. Compares equality of two operands with their types.

-------------

c) Not Equal (!=) : Ckecks if  two values are not equal. perform type coercion if necessary. it not compare data type.

console.log("5" != 5);
outpput false

-------------

d) Strict Not equal (!==) : checks if two values are not equal also compare data type. without perform tyep coercion.

console.log(5 !== 'acd');
output true

console.log(5 !== "5");
output true 

-------------

e) Greater Than (>) : Checks if the value on the left is greater than the value on the right.

console.log(9>8);
console.log(8>7);
console.log(3>8);

-------------

f) Less Than (<) : Checks if the value on the left is less than the value on the right. 

console.log(3<8);
console.log(8<7);
console.log(3<8);

-------------

g) Greater than or equal to (>=) : Checks if the value on the left is greater than or equal to the value on the right.

console.log(9>=8);
console.log(8>=8);
console.log(3>=8);

-------------

h) Less than or equal to (<=) : Cheks if the value on the left is less than or equal to the value on the right.

console.log(3<=8);
console.log(8<=8);
console.log(9<=8);

-------------------------------

4. LOGICAL OPERATOR :-

logical operator is mostly used to make decisions based on conditions specified for the statements. 

a) LOGICAL AND (&&) : Returh ture if both operands are true otherwise it return false.

let x = 10;
let y = 20;

console.log(x >= 10 && y >= 20);
console.log(x > 20 && y > 30);
console.log(x >= 30 && y >= 70);
console.log( 0>1 && 1>2 && 3>3);
console.log( 0<1 && 1<2 && 2<3);

-------------

b) LOGICAL OR (||) : Returns true if at least one of the operands is true, otherwise, it returns false.

let x = 10;
let y = 20;

console.log(x >= 10 || y >= 20);
console.log(x > 20 || y > 10);
console.log(x >= 30 || y >= 70);
console.log( 0<1 || 1>2 || 3>3);
console.log( 0<1 || 1<2 || 3<3);


-------------

c) LOGICAL NOT (!) : reutrns true if the operand is false and false if th eoperand is true.

var isOpen = true;
console.log(!isOpen);
console.log(!true);
console.log(!false);
console.log(! 1 > 0);
console.log(! 1 < 0);

-----

Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and have a valid driver's license?

let age = 18;
let hasDrivingLicense = false;

if( age >= 18 && hasDrivingLicense == true){
    console.log("YOU CAN DRIVE");
} else if( age >= 18 && hasDrivingLicense == false ){
    console.log("YOU CANT DRIVE BECAUSE YOU DON'T HAVE LICENSE");
} else{
    console.log("you cant drive you are minor");
}

-------------------------------

5. TERNARY OPERATOR :-  

A ternary operator is a conditional operator in JavaScript that evaluates a conditional expression and returns either a truthy or falsy value.

sytax: condition? ExpressionIftrue : expressionIfFalse;

------------

Write a program to check if the candidates is eligible or not age must be equal to or greater than 18.

let age = 18;
let result =  age >=18 ? "you can drive" : "you can't drive";
console.log(result);

------------

Var's say you have a variable score representing a studen't exam score. if the score is greater than or equal to 60, the student pass otherwise, they fail. use the conditional (ternary) operator to determine the result and store it in a variable called result. log the result in the console.

let score = 60;
let result = score>= 60 ? "passed" : "failed";
console.log(result);

-------------------------------

6. UNIRARY OPERATOR :-  

A unary operator is an operator which work with only one operand this this operator comes either before or after the operand.

1) UNARY PLUS (+) OPERATOR :- 

The Unary Plys (+)converts an operand into a number if possible. If the operand is a string that represents a valid number, it will be converted to a number. Otherwise, it will evaluate to NaN (Not-a-Nmber).

example 1 :-

var x = "10";
console.log(x);
console.log(typeof(x));

var y = +x;
console.log(y);
console.log( typeof y);

example 2 :-
let a = "yash";
console.log(a);
console.log(typeof a);

let b = +a;
console.log(b);
console.log(typeof b);

example 3 :-
let a = "";
console.log(a);
console.log(typeof a);

let b = +a;
console.log(b);
console.log(typeof b);

---------------

2) UNARY MINUS (-) OPERATOR :- 

The Unary Negative (-) Operator is used to convert its operand to a negative number if it isn't already a negative number.

example 1 :-

let a = 10;
console.log(a);
console.log(typeof a);

let b = -a;
console.log(b);
console.log(typeof b);

example 2 :-

let a = "10";
console.log(a);
console.log(typeof a);

let b = -a;
console.log(b);
console.log(typeof b);

example 3:-

let a = "yash";
console.log(a);
console.log(typeof a);

let b = -a;
console.log(b);
console.log(typeof b);

---------------

2) INCRIMENT AND DECRIMENT OPERATOR :- 

In Javascript, the increment and decrement operators are used to increase or decrease the value of variable by 1. They are represented by the symbols "++" and "--". these operators can be applied to both numeric and string variables.

1. Increment Operator (++); the increment operator increases the value of the oparand by adding 1 to current value of the operaned.

example: 

let num = 15;
num++
console.log(num);
output: 16;

in thsi exampe, the variable num is assigned the value of 15, when we use the increment operator ++, it adds 1 to the current value of num resulting in 16.


2. Decrement Operator (--) 


*/
