/*

CONTROL STATEMENT :-

JavaScript control statement is used to control the execution of a program based on a specific condition. If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition.

--------------

IF ELSE STATEMENT :- The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.

syntax of if else statement

if () {} // if condition is true if's block of code will be executed
else{}   // if condition is false else' block of code will be executed.

example 1 :-

let temperature = 25; // giving the input for condition

if (temperature > 30) { 
    // this is if statement chackeing the condition. for iven input
  console.log("lets go to beach"); 
    // this is block of code it will execute if the if's condition is true
} else {
  console.log("don't go to beach"); 
    // this else block of code it will executed if if's condition is false.
}

output : "don't go to beach" , because if condition is false the given temperature is 25 and the if condition is checking is temperature is greater than 30, but in this case temperatre is not greater than 30 so else block of code is executed.

-------------

ELSE IF CONDITION :- "else if" is a conditional statement that allows you to specify multiple conditions to be evaluated in a sequence. It is used when you have more than two possible outcomes for a decision.


syntax of else if with if else statement

if () {
    // if condition is true if's block of code will be executed
} else if (){
    // this is else if, if if's condition is false and its condition is true it will execute this block of code
} else{ 
    // if condition is false else' block of code will be executed.
}   

example 1 :-

let temperature = 30; // giving the input for condition

if (temperature > 30) { 
    // this is if statement chackeing the condition. for iven input
  console.log("lets go to beach"); 
    // this is block of code it will execute if the if's condition is true
} else if(temperature <= 30 && temperature >= 20){
    console.log("we can consider going to beach");
    // this is else if condition if, if's condiion is false than it will conde to it and if it is also not true than it will jump to else
} else {
  console.log("don't go to beach"); 
    // this else block of code it will executed if if's condition is false.
} 

// output : "we can consider going to beach" , because else if condition is true

-------------

QUESTIONS FOR IF ELSE :-

QUESTION 1:-

-> If the person is 18 years or older, a citizen and registered to vote displa a message saying they are eigible to vot.
-> If the person is youngr than 18 not a citizen, or not registered to vote display a message saying they are not eligible to vote.
-> If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
-> If the person is 18 or older, a citizen, but not registered to vote, display message saying they are not eligible due to resistration status.
-> extended voting eliiblety checker with addition cndiions.

let voterAge = 19;
let isCitizenOfIndia = true;
let hasVoterIdCard = true;

if(voterAge >= 18 && isCitizenOfIndia == true && hasVoterIdCard == true){
    console.log("You can vote: 1) you are elder citizen 2) you are INDIAN citizen 3) you have voter id card");
} else if(voterAge >= 18 && isCitizenOfIndia == true && hasVoterIdCard == false){
    console.log("You cant vote because you are elder and indian but you dont have voter id card");
} else if (voterAge >= 18 && isCitizenOfIndia == false && hasVoterIdCard == true){
    console.log("wrong input you can't register your self becaue you are not INDIAN citizen");
} else if (voterAge >= 18 && isCitizenOfIndia == false){
    console.log("you can't vote because you are not INDIAN citizen");
} else if (voterAge < 18 && isCitizenOfIndia == true && hasVoterIdCard == true){
    console.log("You can't have voter id because you are not 18+");
} else if(voterAge < 18 && isCitizenOfIndia == false && hasVoterIdCard == true){
    console.log("you can't have voter id card because you are not indian and also miner");
} else if(voterAge < 18 && isCitizenOfIndia == false && hasVoterIdCard == false){
    console.log("na na you cant -> no elder no indian no voter id card");
} else {
    console.log("you cant vote you are not 18+");
}  

QUESTION 2:-

-> Write a program to chekc if the number is odd or even
-> is a number can is completey divisible by 2 is even
-> is a number can't completely divisible by 2 is odd

let num = 11;

if(num%2 === 0){
    console.log("Yes " + num + " is even number");
} else{
    console.log("No " + num + " is odd number");
}

QUESTION 3:-

Write a programm to check is a number is posibite negative or zero.

QUESTION 4:-

-> Write a program t check is a number is prime.
-> todo prime numbers are numbers that have only 2 factors: 1 and themselves.
-> All prime numbers greater than 2 are odd.
-> However hot all odd umbers are prime

let num = 0;

if(num > 1){
    console.log(`your number ${num} is positive`);
} else if(num === 0){
    console.log(`your number ${num} is zero`);
} else{
    console.log(`your number ${num} is Negative`);
}

-----------------------

NESTED IF ELSE :- 

JavaScript allows us to nest if statements within if statements. i.e, we can place an if statement inside another if statement. A nested if is an if statement that is the target of another if or else.

A nested if-else statement in JavaScript is a series of conditional statements that are nested within each other. It allows for more complex decision-making in code by providing multiple levels of conditions to be evaluated.

*/

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             