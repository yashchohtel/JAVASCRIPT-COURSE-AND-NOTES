/*

VALUE AND REFRENCE :-


In JavaScript, the concepts of value and reference pertain to how data is stored and accessed in memory. Understanding these concepts is crucial for manipulating variables effectively. Here's a breakdown:

Value Types (Primitives)
Value types, also known as primitive types, are data types that store the actual value in the variable. These include:

- Number: let x = 10;
- String: let str = "hello";
- Boolean: let flag = true;
- null: let n = null;
- undefined: let u;
- Symbol (ES6+): let sym = Symbol("id");
- BigInt (ES11+): let big = 123n;

Characteristics:
- Stored directly in the variable: The variable holds the actual data.
- Independent copy: When you assign or pass a value type, a copy of the value is created. Changes to the new variable do not affect the original variable.

let a = 10;
let b = a; // b is a copy of a
console.log(b + " value of b"); // 10
b = 20;
console.log(a + " value of a"); // 10
console.log(b + " value of b"); // 20

-----------------------

Reference Types (Objects) :-

Reference types include objects, arrays, functions, and instances of classes. They store a reference (or address) to the actual data in memory, not the data itself.

- Object: let obj = { key: "value" };

- Array: let arr = [1, 2, 3];

- Function: let func = function() { console.log("Hello"); };


Characteristics:
- Stored as a reference: The variable holds a reference to the memory location where the data is stored.
- Shared reference: When you assign or pass a reference type, you are passing a reference to the same data. Changes to the new variable affect the original variable.

example 1:-

let obj1 = { key: "value" };
let obj2 = obj1; // obj2 is a reference to obj1
obj2.key = "new value";
console.log(obj1.key); // "new value"
console.log(obj2.key); // "new value"

example 2:-

let a = [1,2,3,4,5] // original array
console.log(a); // logining original array
let b = a; // assigning a to b (it pass the refferece of a from the memroy)
console.log(b); //  logining b array
b.push(6) // adding value to b
console.log(b); // again logining b array output: [ 1, 2, 3, 4, 5, 6 ]
console.log(a); // again loging original array output: [ 1, 2, 3, 4, 5, 6 ] here the original array is changed because the change occure in the memory where it is store.

Key Differences:
Memory storage: Primitives store the actual value, while reference types store a reference to the value.
Copy behavior: Copying a primitive creates a new independent value, while copying a reference type creates a new reference to the same data.
Mutability: Primitives are immutable, meaning their value cannot be changed once created. Reference types are mutable, meaning their properties or elements can be changed.
Practical Implications:
Understanding these differences is important for:

Avoiding unintended side effects when modifying data.
Efficient memory usage and performance considerations.
Writing functions and methods that correctly handle different types of data.
By being aware of how value and reference types work in JavaScript, you can better manage variables and data structures in your code.

*/ 

