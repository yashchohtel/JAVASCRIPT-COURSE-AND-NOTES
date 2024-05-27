/*

FUNCTION IN JSVASCRIPT :-

In javascript, a function is a block of resuable code that performs a specific tast or set of tasks. functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.


Syntax :-

function functionName(parameters){
    code to be executed
    return reslut: // optional return statement
}

functionName(); // this is calling the function

======================================

1. FUNCTION DECLERATION :- 

Declare a function suing the function keyword, followed by the function name, paramaters (if any), and the function body. This step defines the function and specifies what code should be execute when the function is called.


2. FUNCTION INVOCATION (calling a function) :- After declearing a function, you can invoke or call it by using name followed by parethenses. [ functionName() ]. If the function has parameters, provide values (arguments) for those parameters inside parenteses.


3. FUNCTION PARAMETER :- A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value what be provided when the function is called. Parameters allow to pass information into a function, making it more versatile and reusable.


4. FUNCTION ARGUMENT :- A function argument is a value that you provide when you call a function arguments are passed into a function to fill the parameters define in the function decleration.


function greet(greetingWord){
    console.lgo( greetingWord + " everyone" )
}

greet("goodmorning")

here :-

function - function keyword to decleare a function
greet - is a name of function by which this function will be called.
(greetingWord) - is a parameter which will revice value from argument while calling the function.
{ console.lgo("hello world!") } - is function body a block of code which will be executed. 
greet("goodmorning") - is called calling or invocation the function.
("goodmorning") - is argument or value for the parameter inside the function name.

TIPS :- "1st declare the function and then call it" In javascript, it's a good practie to declare your function before you call them. this ensures that the function is available for use  when ou try to call it.


example 1:- (say hello world with the helop of fucntion)

function sayHello(){
    console.log('hello world!');
}

sayHello(); // output: hello world!

---------

example 2 :- (function with a parameter and argument)

function sayName(myName){
    console.log("my name is " + myName);
}

sayName("yash chohtel");

---------

example 3 :- (function with multiple parameter and argument)

function sayFullName(firstName, lastName){
    console.log("my name is " + firstName + " " + lastName);
};

sayFullName("yash","chohtel");

---------

example 4 :- (wrhite a function to find the sum of two numbers)

function addNumbers(num1,num2){
    console.log(`sum of ${num1} and ${num2} is ${num1+num2}`)
}

addNumbers(1,2)
addNumbers(234,2123)

======================================

5. FUNCTION EXPRESSION :- A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it become a name function expression. and we can call the function by its name which is a variavle.

let result = function(num1,num2){
    console.log(num1+num2);
}

result(1,1);

======================================

6 ANONYMOUS FUNCTIONS :- An anonymous fnction is a function without a name. It came be creted withous using a name. It can be created using either a function expression or a funciton decleration without a speficied name.
we can assign a a anonymous function in a variable and can make it a function expression.

anonymous function :-
function(a,b){
    console.log(a+b);
}


anonymous function with function expression :-
let result = function(num1,num2){
    console.log(num1+num2);
}

======================================

7. RETURN KEYWORD :- In javascript, the return statement is used within a function to specify the value that the function should produce or provid back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller. We can store a returned value to a variable.

example 1:-

function addNumbers(num1, num2) {
    return `sum of ${num1} and ${num2} is ${num1 + num2}`;
}

let result1 = addNumbers(1, 2);
let result2 = addNumbers(234, 2123);


console.log(addNumbers(1, 2));
console.log(result1);
console.log(addNumbers(234, 2123));
console.log(result2);

======================================

8. IMIDATILY INVOKE FUNCTION (IIFE) -> IIFE or Immediately INoked function expression, is a javascript function that is defined and executed immediately after its creation. it is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immeditely

SYNTAX :-

(function(){
    code to be executed
}())


example 1:-

var sum = (function (num1, num2) {
  return num1 + num2;
})(5, 5);

console.log(`sum of two numbers is ${sum}`);


*/

