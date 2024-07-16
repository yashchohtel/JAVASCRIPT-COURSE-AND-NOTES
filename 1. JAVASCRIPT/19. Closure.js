/*

CLOSURES

A closure in JavaScript is a powerful feature where an inner function has access to the outer (enclosing) function's variables, even after the outer function has finished executing. Closures allow functions to capture and remember their lexical environment, enabling data privacy and maintaining state across executions.

Key Characteristics of Closures
- Access to Outer Scope: An inner function can access variables and parameters of its outer function.
- Preservation of State: The inner function retains access to the variables of the outer function even after the outer function has returned.
- Data Privacy: Closures can be used to create private variables and functions that cannot be accessed from outside the closure.

example 1:-

var sum = function (a){ // here reciving value of a 

    console.log("hello "+ 2);

    var b = 4; // creating new variable b with value 4

    return function(c){ //here reciving value of c 
        return a+b+c // returning
    }

}

var store = sum(2); // calling first function sum and storing it returning function in store variable. which also contain its lexical scope like  value of a and b. 

console.log(store(5)); // calling sotre function. and it has all the access of variables in function sum.


example 2:-

var sum = function (a,b,c) {

    return {

        getSumTwo : function(){
            return a+b
        },

        getSumThree: function(){
            return a+b+c
        }

    }

};

var store = sum(3,4,5)
console.log(store.getSumTwo());
console.log(store.getSumThree());

console.log("-------------");

var store2 = sum(1,2,3)
console.log(store2.getSumTwo());
console.log(store2.getSumThree());

*/



