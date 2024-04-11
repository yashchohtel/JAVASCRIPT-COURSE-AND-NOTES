/*

LOOPS IN JAVASCRIPT :-

Loops in programming are control structures that allow you to execute a block of code repeatedly based on a condition. They are fundamental for automating repetitive tasks and iterating over collections of data.

-------------------------

1. WHILE LOOP :- A while loop in javascript is a control structure that repetedly executes a block of code as long as a specified condition remains true. The loop continnues iterating while the condition is true, and it terminates when the condition becomes false.


syntax :-
while(condition){
    code to be executed as long as the condition is true
}

example 1 :- (print numbers 1 - 10 with the help of while loop)

let i = 1; // this is variable (initilization)
while (i<=10){ // this is condition which (condition)
    console.log(i); // this is the thing which we want to print
    i++ // (iteration)
}

example 2:- (print table of 1 whith the help of while loop)

let table = 1;
let num = 1;
while(num <=10){
    console.log(`${num} x ${table} = ${num*table} `)
    num++
}


example 3: - (print table 1 to 10 with the help of while loop)

let table = 1;

while(table <=10){

    let num = 1;
    while(num <=10){
        console.log(` ${table} x ${num} = ${num*table} `)
        num++
    }

    console.log("-------------------")

    table++

}

-------------------------

2. DO WHILE LOOP :- In JavaScript, a do-while loop is a control flow statement that allows you to execute a block of code repeatedly as long as a specified condition evaluates to true. The main difference between a do-while loop and a while loop is that a do-while loop guarantees that the block of code inside the loop will be executed at least once, regardless of whether the condition is initially true or false.

syntax :- 
do{
    code to be executed at least once
} while (condititon);

example 1 :-

let i = 1; // initilization
do{
    console.log(i); // printin
    i++ // iteration
}while(i<=10) // contition

example 2: - (print table 1 to 10 with the help of do while loop)

let table = 1;
let num = 1;

do{

    while(num <=10){
        console.log(` ${table} x ${num} = ${num*table} `)
        num++
    }

}while(num <=10)


example 3: - (print table 1 to 10 with the help of do while loop)

let table = 1;

do{

    let num = 1;
    do{
        console.log(` ${table} x ${num} = ${num*table} `)
        num++
    }while(num <= 10)

    console.log("----------------");

    table++

}while(table <= 10)

-------------------------

3. FOR LOOP :- A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a certain number of times. It consists of three parts :-

Initialization: This part initializes the loop counter variable.
Condition: This part defines the condition for continuing the loop. The loop will continue executing as long as this condition is true.
Increment/Decrement: This part updates the loop counter variable after each iteration.

syntax of for loop :- 

for (initialization; condition; increment/decrement) {
    // Code block to be executed
}

example 1 :-

for (let num = 1; num <= 10; num++){
    console.log(num);
}


example 2:-  (print table of two)

let table = 1;
for(let num = 1; num <= 10; num++){

    console.log(` ${table} x ${num} = ${num*table} `)

}


example 3: - (print table 1 to 10 with the help of for loop)


for(let table = 1; table <= 10; table++){

    document.write(`table of ${table}`);
    document.write("<br>")
    
    for(let num = 1; num <=10; num++){
        
        document.write(` ${table} x ${num} = ${num*table} `)
        document.write("<br>")

    }

    document.write("----------------");
    document.write("<br>")

}

example 4:- get the sum of 1 to 10 with the help of for loop.

let sum = 0;

for(let num = 1; num <= 10; num ++){
    sum = sum + num;

}
console.log(sum);

example 5 :- (write a program to check if a number is prime.)

prime numbers are numbers that have only 2 factors: 1 and themeselves. All prime numbers greater than 2 are odd. However, not all odd numbers are prime.


let num = 11;

let isPrime = true;

for(let i = 2; i<num; i++){

    if(num % i === 0){
        isPrime = false;
        break;
    }

}


if(isPrime){
    console.log(`${num} is a prime number`);
} else{
    console.log(`${num} is not a prime number`);
}

example 6 :-

Program to heck if a year i a leap year
if a year is divisible by 4 and not divisible by 100 or if a year is divisible by 400 then it is a leap year. otherwise it is not a leap year.

let year = 2028;

if( (year % 4 === 0 & year % 100 !== 0) || year % 400 === 0 ){

    console.log("yes");

} else{
    console.log("no");
}


example 7 :- Draw patern with astric with the help of for loop

*/ 



