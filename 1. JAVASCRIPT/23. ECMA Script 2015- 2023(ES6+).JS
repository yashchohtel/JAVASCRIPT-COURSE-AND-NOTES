/*

ES6 [2015]

1] VAR AND LET AND CONST :- 

1. var :- var is function-scoped. This means that variables declared with var are function-scoped, meaning their scope is limited to the function they are declared in, or if not declared inside a function, they have global scope.
Variables declared with var can be re-declared and updated anywhere within their scope.

var variables are hoisted to the top of their scope during execution. This means you can access a var variable before it's declared, although its value will be undefined.

----------

2. let :- The let keyword is used to declare variable with block scope variables declared with let are mutable, meaning their values can be reassigned.

let is block-scoped. This means that variables declared with let are limited to the block in which they are defined, such as a loop, conditional statement, or a block of code inside curly braces {}.

Variables declared with let can be updated, but not re-declared within the same block.
let variables are not hoisted to the top of their block.

----------

3. const :- The const keyword is used to declare variable with block scope, but once a value is assigned to a const variable, it cannot be reassigned. const variable are immutable.

const is also block-scoped.
Variables declared with const are constant and cannot be reassigned a new value once they are initialized.

However, for objects and arrays declared with const, their properties or elements can still be mutated. In other words, while you can't reassign a new object or array to a const variable, you can modify its properties or elements.


================================

TEMPLATE STRING :- IN ECMAScript 6 (es6), template stings, also knwon as template literals, provide a convenient and flexible way to create strings in javascript. Template strings are enclosed in backtics rather single or double quotes.

let firstName = "yash";
let lasttName = `chohtel`;

let fullName = firstName + lasttName;
let fullName = `my full name is ${lasttName} ${lastName}`; // exampele of template string.

Template strings support string interpolation, allowing you to embed expressions directly within the string. Interpolated expression are enclosed in ${}


String Interpolation :- Template strings supports strin interplation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}.


let age = 30;
console.log(`i am ${age} years old`);


========================

2]. DEFAULT PARAMETERS :-

In ECMAScript 6 (ES6). default parameters were introduced, providing a more consise way to handle function parameter defaults. Default parameters allow you to specify deault values for function parameters in te function declaration itself.If a parameter is not provided when the function is called, the default value is used.

Dedfault function parameters allow named parameters to be initialized with deault values if no values or undefined is passed.

example 1:- 

function sum(num1 = 10,num2 = 20){
console.log(num1+num2);
}
    
sum();
    
========================

3]. ARROW FUNCTION :-

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

const isReverse = (str) => {

  let reversed = "";

  for(let char = str.length; char >= 0; char-- ){
      console.log(str[char]);
      reversed = reversed + str[char]
  }

  console.log(`reversed name of ${str} is ${reversed}`);

};

example 3 :-  create a function to determine if a given string is a palindrone.

let isPalindrome = (str) => {

  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }

  if (reversedStr === str) {
    console.log(`yes your word ${str} is a palandrome word`);
  } else{
    console.log(`no your word ${str} is not a palandrome word`);
  }

};

isPalindrome("malayalam");

========================

4]. OBJECT PROPERTIES

const name = 'yash';
const age = 30;

traditional way 
const person = {name : name , age: age};

using shorthand notation for object property
const person1 = {name,age};
console.log(person);
console.log(person1);

Insted of specifing name:name and age:age, you can simply use name and ag directly withn the object literal, thansks to es6 sorthand property natation.

========================

5]. DESTRUCTURING 

Destructuring in Javascript is a way to extract values from arrays or objects and assign them to variables in a consise and readable manner. 

use case : make code cleaner and avoides reptitive copying of values.

-------------

DESTRUCTURING ARRAY

Destructuring is a js expression that makes it possible to unpack values from arrays, or properties from oejects, into distinct variables that is, we can extract data from arrays and objects and assign them to variables. 

Array destructuring lets you assign elements of an array to variables directly.

example 1:-
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

example 2:-

let arr = [1, 2, 3];
let [a, b, c, d] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // undefined (because there is no value for d in the array)

------------

Skipping Elements : You can skip elements in the array by leaving empty spaces between commas.

example 1:-
let [a, , c] = [1, 2, 3];
console.log(a); // 1
console.log(c); // 3

example 2:-
let [a, b, c,d] = [1, ,2, 3];
console.log(a); // 1
console.log(b); // undefined
console.log(c); // 2
console.log(d); // 3

------------

Default Values : You can provide default values that will be used if the array does not have enough elements.

let [a, b = 2] = [1];
console.log(a); // 1
console.log(b); // 2

------------

Rest Syntax : You can use the rest syntax to collect the remaining elements into a single variable.

let [a, ...rest] = [1, 2, 3, 4];
console.log(a);    // 1
console.log(rest); // [2, 3, 4]

-------------

Destructuring nested array :-

let book = ["js", 100, 200, ["js prints",]];

let [name,price,pages,[publication, year = 2024]] = book;
console.log(year);

------------------------

DESTRUCTURING OBJECT

Object destructuring allows you to extract properties from an object and assign them to variables.

let book =  {
    name: "javascript",
    page: 200,
    price: 299,
    publication: "js prints",
    year : 2024
}

let {name, page, price, publication, year} = book;
console.log(publication);

----------

Renaming Variables : You can assign properties to variables with different names using ":" syntax

let book =  {
    name: "javascript",
    page: 200,
    price: 299,
    publication: "js prints",
    year : 2024
}

let {name : title, page : size, price : value, publication: prints, year : print_date} = book;
console.log(prints);

------------

Default Values : You can provide default values for properties that might be undefined.

let book =  {
    name: "javascript",
    page: 200,
    price: 299,
    publication: "js prints",
}

let {name : title, page : size, price : value, publication: prints, year = 2030} = book;
console.log(year);

------------

Nested Destructuring : You can destructure nested objects as well.

let book =  {
    name: "javascript",
    page: 200,
    price: 299,
    publication:{
        printName: "ja prints",
    }
}

let {name : title, page : size, price : value, publication : {printName : pName, year : printYear = 2024}} = book;
console.log(printYear);

-------------

Combined Array and Object Destructuring : You can combine array and object destructuring for more complex structures.

let people = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
let [{ name: firstName }, { age: secondAge }] = people;
console.log(firstName); // "Alice"
console.log(secondAge); // 30

--------------

Function Parameters Destructuring : Destructuring can be used directly in function parameters, making it easy to handle objects or arrays passed as arguments.

array :-

function print([a, b]) {
  console.log(a, b);
}
print([1, 2]); // 1 2


object :-

function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}
greet({ name: "Alice", age: 25 }); // Hello, Alice. You are 25 years old.

========================

7]. SPREAD OPERATOR 

The spread operator (...) in JavaScript is a powerful tool that allows you to expand iterable objects (such as arrays or strings) and expand object literals into individual elements or properties. It is used in various contexts, such as function calls, array literals, and object literals, to simplify operations and make the code more readable.

------------

Spread Operator with Arrays

Copying Arrays : You can create a shallow copy of an array using the spread operator.

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2); // [1, 2, 3]


Concatenating Arrays : The spread operator allows you to concatenate arrays easily.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

Adding Elements to Arrays : You can add elements to an array in a concise way.

let arr = [1, 2, 3];
let newArr = [0, ...arr, 4];
console.log(newArr); // [0, 1, 2, 3, 4]

------------

Spread Operator with Object

Copying Objects : You can create a shallow copy of an object using the spread operator.

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 };
console.log(obj2); // { a: 1, b: 2 }


Merging Objects : The spread operator can merge objects by combining their properties.

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }


Adding/Overwriting Properties : You can add or overwrite properties in an object.

let obj = { a: 1, b: 2 };
let newObj = { ...obj, b: 3, c: 4 };
console.log(newObj); // { a: 1, b: 3, c: 4 }

------------

Spread Operator with Object

Passing Array Elements as Arguments : The spread operator allows you to pass array elements as arguments to a function.

function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

------------

Spread Operator with Strings : You can use the spread operator to split a string into individual characters.

let str = "hello";
let chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

========================

8]. REST PARAMETER 

The rest parameter syntax in JavaScript allows you to represent an indefinite number of arguments as an array. It provides a way to collect multiple arguments into a single parameter, which makes handling function arguments more flexible and concise.

The rest parameter syntax uses three dots (...) followed by the name of the parameter.

function myFunction(...args) {
  args is an array
}

Usage
Collecting Function Arguments
When you use the rest parameter, it collects all remaining arguments passed to the function and stores them in an array.

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

-------------

Combining with Other Parameters
The rest parameter can be combined with regular parameters, but it must be the last parameter in the function definition.

function myFunction(a, b, ...rest) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [3, 4, 5]
}

myFunction(1, 2, 3, 4, 5);

-------------

Note :- A function defination can only have one rest parameter, and the rest parameter must be the last parameter in the function defination.

function wrong1(...one, ...wrong){}
function wrong2(...one, arg1, arg2){}
function right1(arg1, arg2, ...last){}

====================================================================================
====================================================================================

ES7 [2016]

9]. EXPONENTATION OPERATOR

ES7 introduces a new mathamatical operator called expoenetation operator this is similor to using math.pow() method. 

The exponentiation operator (**) in JavaScript is used to raise a number to the power of another number. It provides a concise and readable way to perform exponentiation operations. This operator was introduced in ECMAScript 2016 (ES7).

Syntax : The syntax for the exponentiation operator is straightforward:

base ** exponent : Where base is the number you want to raise to a power, and exponent is the power to which you want to raise the base.

console.log(2 ** 3); // 8
console.log(5 ** 2); // 25
console.log(10 ** -1); // 0.1

====================================================================================
====================================================================================

ES8 [2017]

10]. String padding :-

String padding in javascript is a way to add extra characters (like spaces) to a string to make it a specific length.

Use Case : makes formattign text easier and more perdictable, especially for tabels. alignments, and ui elements. No more messy, unveven lnes disrupting your visual spells.

using padStart() to pad from the beginning:

const value = "yash";
const paddedValue = value.padStart(18);
console.log(paddedValue);
console.log(paddedValue.length);

usind padStart() to pad from the last:

const value = "yash";
const paddedValue = value.padEnd(18);
console.log(paddedValue);
console.log(paddedValue.length);

Key points :-

Both padStart() and end() create a new padded string without modifying the original one.
. targetLength: the total length of the padded string.
. padString(potional) : string to use for padding (default space)

if the original string is already longer than equal to targetLength it's returned as it is.

========================

11]. TRAILING COMMAS :-

This feature allows to have traillin commas in function declarations, functions calls, array litral & object literal:

function greet(name, age,){
  console.log(`hello ${name}, your are ${age} years old.`);
}

greet("john", 30)

====================================================================================
====================================================================================

ES9 [2018]


====================================================================================
====================================================================================

ES10 [2019]

12]. ARRAY.FLAT AND ARRAY.FLATMAP :-

flat() : The Array.prototype.flat() method in JavaScript is used to create a new array with all sub-array elements concatenated into it recursively up to a specified depth. This method is particularly useful for flattening nested arrays.

syntax : 

array.flat(depth);
depth (optional): The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

-------
 
const arr1 = [1, 2, [3, 4]];
const flattened1 = arr1.flat();
console.log(flattened1); // Output: [1, 2, 3, 4]

-------
 
Specifying Depth

const arr2 = [1, 2, [3, 4, [5, 6]]];
const flattened2 = arr2.flat(1);
console.log(flattened2); // Output: [1, 2, 3, 4, [5, 6]]

const flattened3 = arr2.flat(2);
console.log(flattened3); // Output: [1, 2, 3, 4, 5, 6]

-------
 
Flattening Deeply Nested Arrays

const arr3 = [1, [2, [3, [4, [5]]]]];
const flattened4 = arr3.flat(Infinity);
console.log(flattened4); // Output: [1, 2, 3, 4, 5]

-------

Handling Empty Slots
The flat() method also removes empty slots in arrays:

const arr4 = [1, 2, , 4, 5];
const flattened5 = arr4.flat();
console.log(flattened5); // Output: [1, 2, 4, 5]

========================

flatMap() : 
The Array.prototype.flatMap() method in JavaScript is a combination of the map() method followed by the flat() method with a depth of 1. It first applies a function to each element of the array, and then flattens the result by one level. This method is particularly useful for situations where you want to map each element to an array and then flatten the resulting arrays into a single array.

Syntax

array.flatMap(callback, thisArg);

const arr1 = [1, 2, 3, 4];

const result1 = arr1.flatMap(x => [x * 2]);
console.log(result1); // Output: [2, 4, 6, 8]


const arr2 = [1, 2, 3, 4];
const result2 = arr2.flatMap(x => [[x * 2]]);
console.log(result2); // Output: [[2], [4], [6], [8]]

========================

13]. Object.fromEntries()

Objects have an entries() method, since es2017 it returs an array containing all the boject own propertes, as an array of [key, value] pairs:

const person = {name: "vinod", age: 30};
const entries = Object.entries(person);
console.log(entries);

es2019 introduces a new object, from entries() method, which can create a new object from such array of properties:

let perArr= [ [ 'name', 'vinod' ], [ 'age', 30 ] ];
const entries = Object.fromEntries(perArr);
console.log(entries);

========================

14]. strimSTart() & trimEnd()

In JavaScript, the trimStart() and trimEnd() methods are used to remove whitespace characters from the beginning and the end of a string, respectively. These methods are particularly useful for cleaning up input data where extra spaces might be present.

trimStart() Method
The trimStart() method removes whitespace from the beginning of a string. It does not modify the original string but returns a new string with the leading whitespace removed.

Syntax
str.trimStart()

Example
const str = '   Hello World!   ';
const trimmedStart = str.trimStart();
console.log(trimmedStart); // Output: 'Hello World!   '

--------------

trimEnd() Method
The trimEnd() method removes whitespace from the end of a string. Like trimStart(), it does not modify the original string but returns a new string with the trailing whitespace removed.


Syntax
str.trimEnd()

Example
const str = '   Hello World!   ';
const trimmedEnd = str.trimEnd();
console.log(trimmedEnd); // Output: '   Hello World!'

-----------------

Combining trimStart() and trimEnd()
If you need to remove whitespace from both the beginning and the end of a string, you can combine trimStart() and trimEnd() methods or use the trim() method which removes whitespace from both ends.

Example
const str = '   Hello World!   ';
const trimmed = str.trimStart().trimEnd();
console.log(trimmed); // Output: 'Hello World!'

const fullyTrimmed = str.trim();
console.log(fullyTrimmed); // Output: 'Hello World!'

===========================

15]. SYMBOL DATATYPE

In javascript, a symbol is a primitive data type introduced in ECMAStript 2015 (ES6). it represents a unique identifier that is immutable and guaranteed to be unique. symbols are often used as property keys in objects to avoid naming conflicts.

The symbol.prototype.description property is a new feature indroduced in es10 it allows you to retireve the description of a symbol. when you create a symbol, you can optionallly provide a description as its parameter. The description property lets you access this desciption. 

const mySyombal = Symbol('this is my symbol');
console.log(mySyombal.description);
console.log(typeof mySyombal);

====================================================================================
====================================================================================

ES11 [2020]

16]. BIGINT 

In JavaScript, BigInt is a built-in object that provides a way to represent whole numbers larger than the range supported by the Number data type. Introduced in ECMAScript 2020 (ES11), BigInt allows you to work with arbitrarily large integers, which is particularly useful for cryptographic applications, scientific calculations, and working with large datasets.

const bigIntLiteral = 1234567890123456789012345678901234567890n;
console.log(bigIntLiteral); // Output: 1234567890123456789012345678901234567890n

const bigIntFunction = BigInt("1234567890123456789012345678901234567890");
console.log(bigIntFunction); // Output: 1234567890123456789012345678901234567890n


const bigIntLiteral = 1234567890123456789012345678901234567890n;
console.log(bigIntLiteral); // Output: 1234567890123456789012345678901234567890n

const bigIntFunction = BigInt("1234567890123456789012345678901234567890");
console.log(bigIntFunction); // Output: 1234567890123456789012345678901234567890n

-----------------

Operations with BigInts
You can perform arithmetic operations with BigInt values, similar to Number values. However, you cannot mix BigInt and Number values directly in operations; you must explicitly convert one type to the other.

const a = 123456789012345678901234567890n;
const b = 987654321098765432109876543210n;

const sum = a + b;
const difference = b - a;
const product = a * b;
const quotient = b / a; // Division results in the nearest integer
const remainder = b % a;

console.log(sum); // Output: 1111111110111111111011111111100n
console.log(difference); // Output: 864197532086419753208641975320n
console.log(product); // Output: 121932631356500531591068431581771069347203169112635269000n
console.log(quotient); // Output: 8n
console.log(remainder); // Output: 9000000000900000000090n

===========================

17]. NULLISH COALESCING OPERATOR ??

In js, the nullish coalishing operator (??) is a logical operator that provides a consise way to handle nullish (null undefined) values. it returns its right-hand operand when it left-hand operand is null or undefined otherwise it returns the left-hand operand.

let favNum = 0; // falsy
userFavNum = favNum || 10;
userFavnum2 = favNum ?? 10;
console.log(userFavNum);
console.log(userFavnum2);

===========================

18]. OPETIONAL CHANING OPERATOR (?.)

it provides a conside way to access properties of an object without about the existence of intremediate properties. it's particularly usefull when working with nested objects or accessing properties of  objects that may be null or undefined.


const person = {

  name: "john",
  address: {
    city: "new york",
    zipCode: 12345,
  },

};

const city = person.address ? person.city : "city is not present"
const city2 = person.address?.city ?? "city is not present"
console.log(city);

====================================================================================
====================================================================================

ES12 [2021]

19]. LOGICAL ASSIGNMENT OPERATORS (||=, &&+, ??=)

===========================                                                                                                                                                                                        
20]. NUMERIC SEPRATORS

This feature allows underscroes (_) to be used as spearatrs within numeric leterals to improve readability.

const bigNum = 1_000_000_000_000;
console.log(bigNum);

====================================================================================
====================================================================================

ES13 [2022]

Before ES2033, square bracket notation was used to fetch a particular element in an array. This method is straight forward unless you need to perform a backword iteration, i.e. negative indexing. In the case of negative indexing, the common practice was to use arr[arr.length-N], where array length is referred to and indexed from the end.

The .at() method introduced n ES2022. has simplified this process. in a case of positive indexing, .at() will work thesame as the square brackets. but for negative indexing, the .at() method allows starting the iteration from the end.


const array = [1,2,3,4,5,6,7];
console.log(array.at(-2));

===========================    

Object.hasOwn() is a static method that you can use to check if a property exists in an object or not. it returns true if the specified object contains the indicated property as its own, and if the porperty is inherited or dosen't exist, it returns false. this method takes the object as the fist argument and the proeprty you want to check as the second.

Object.HasOwn is the intended alternative fot the object.prototype.hasOwnProperty mehhod. although object.prototype.hasOwnProperty has been in javascript specification for quite a time, it has some drawbacks.

const book = {
  name : 'js mastery',
  page : 100,
}

console.log(book.hasOwnProperty("name"));
console.log(Object.hasOwn(book, "name"));

====================================================================================
====================================================================================

ES14 [2023]

*/

