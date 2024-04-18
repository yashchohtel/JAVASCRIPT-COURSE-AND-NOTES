/*

FUNCTION IN JSVASCRIPT :-

In javascript, a function is a block of resuable code that performs a specific tast or set of tasks. functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.


Syntax :-

function functionName(parameters){
    code to be executed
    return reslut: // optional return statement
}

functionName(); // this is calling the function

---------

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

1. FUNCTION DECLERATION :- 

Declare a function suing the function keyword, followed by the function name, paramaters (if any), and the function body. This step defines the function and specifies what code should be execute when the function is called.

2. FUNCTION INVOCATION (calling a function) :-

After declearing a function, you can invoke or call it by using name followed by parethenses. [ functionName() ]. If the function has parameters, provide values (arguments) for those parameters inside parenteses.


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

*/ 




