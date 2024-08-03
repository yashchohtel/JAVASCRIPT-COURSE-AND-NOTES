/*

DATA TYPES IN JAVASCRIPT :- A data type is a classification of data which tells the compiler or interpreter how the programmer intends to use the data. Most programming languages support various types of data, including integer, real, character or string, and Boolean. Data types in JavaScript define the type of value that a variable can store.

There are two categories of Data type in javascript Primitive and Non-premetive.

-----------

There are six premetives data types :-

1. Numbers - The NUmber data type is used to represent positive or negative numbers with or withour decimal place, or numbers written using exponential notiation e.g. 1.5e-4 (equivalent to 1.5x10-4).

The Number data type also includes some special values whichs are - infinity, -infinity and Nan. Infinity represents the mathematicall infinity, which is greater than any number. Infinity is the result of dividing a nonzero number by 0.

example :-

var a = 1;
console.log(a)
output: 1 // integer

var b = 1.2345;
console.log(b)
output: 1.2345 // floating-point number

var c = 4.25e+6;
console.log(c) 
output: 4250000 // exponential notation, same as 4.25e6 or 4250000

var d = 4.25e-6;
console.log(d)
output: 0.00000425 //exponential notation, same as 0.00000425

var e = 1/0;
console.log(e)
output: Infinity // Infinity occur we non zero-number divided by zero

var f = -1/0;
console.log(f)
output: -Infinity // -Infinity occur when nevative non-zero number divided by zero

var g = "abc"/1;
console.log(g)
output: NaN // Not a Number (Nan) occur when we not use the number where it suposed to used.


-----------

2. Strings - The String Data type is used to represent textual data for like sequances of characters. Strings are created using single or doule quotes surrounding one or more characters one word or sentences. or if we write any thing inside single or double quotes it becomes stirng.

example:-

var a = 'Hello World';
console.log(a)
output: Hello Wrold // string in single quotes

var b = "Hello World";
console.log(b)
output:  Hello Wrold // String in double quotes

var c = "HelloWorld";
console.log(c)
output: HelloWorld // String without spaces

var d = "h";
console.log(d)
output: h // single character string

var e = "this is s\"tring"
console.log(e)
output: this is s'tring // we can use single quotes inside double quotes and double quotes in single quotes. but we canot use single quotes inside single or double quotes inside double quotes. to use single quotes inside single quotes or double quotes inside double quotes we have to use escape sequance character. Write backword slash (\) before single or double quotes in string as shown in (e variable).

-----------

3. Boolean - The Boolean Data type can hold only two falues: ture or false. it is typically used to store values like yes(true) or no(false). on(ture) or off(false). boolean data type is used to check the condition weather it is ture or false.

var isMarried = ture;
console.log(isMarried)
output: ture // it says, yes i'm married

var isMarried = false;
console.log(isMarried)
output: false // it says, no i'm not married

-----------

4. Undefined - The Undefined data type can only have one value-the special value undefined. If a variable has been declared, but has not been assigned a value, has the value undefined.

example:-

var a =;
console.log(a)
output: undefined; // becaused a is decleared but has not assigned a value.

var b = "Hello Wrold!"
console.log(b)
output: Hello Wrold!

-----------

5. Null - The Null Data type is another special data type that can have only one value-the null value. A null value means that there is no value. It is not equivalent to an empty string ("") or 0, it is simpley noting. A variable can be explicitly emptied of its current contents by assigning it the null value.

example:- 

var a = null;
console.log(a)
output: null 

-----------

6. Bigint - Represent integers of arbitrary precision (available since ECMAScript 2020).

example :-

var bigNumber = 209348752938475029384752093847520937845209384752093847502983475n;
console.log(bigNumber);
output: 209348752938475029384752093847520937845209384752093847502983475n;

-----------

7. Symbol

================================================================

CONCATENATION IN JAVASCRIPT :-

In javascript, the (+) sign in not only used for arithmetic addition but also for string concatenation. When the (+) operator is used with strings, it concatenates the strings together.

It's important to note that if any operand of the + operator is a string, JS will treat the other operands as strings as well, resultin in string concatenation. If both operands are numbers, the + operator performs numeric additon


let str = "Hello" + "World";
console.log(str);
output = HelloWorld // + operator has strings on both of its operands thats why it performed string concatination. (note: there is no specing in HelloWorld because if there is no specinf in string there will be no specing in concatination as well).

------------------------

https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9XPjUFEOFXanMtEAMbbsYA.png -> Differenc between type coercion and conversion.
https://dorey.github.io/JavaScript-Equality-Table/unified/ -> example of boolean type coercion.

TYPE COERCION :-

Type coercion is the automatic conversion of "values" from one data type to anothe || automatic conversion of value during operations or conparision involving differen data type. It occure automatically by javascrit 

It is a fundamental part of Javascript and can be used to make code morereadable and efficien. 
There are two types of coercion in javascript: implici and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.

Note :- type coercion can lead to unexpected results, so its essential to be aware of how javascript handles these situations.

1. 
let a = 5+null;
console.log(typeof(a));
console.log(a); 
output = 5; // because null is considered as a zero

2.
let b = "5"+null;
console.log(typeof(b));
console.log(b); 
output = 5null; // because null is considered as a string

3.
let c = "5"+2;
console.log(typeof(c));
console.log(c); 
output = 52; // because 2 is considered as a string

4.
let d = "5"-2;
console.log(typeof(d));
console.log(d); 
output = 3; // because - sign has only one task to substrack same with multiplication and diision

5.
let e = "5"-"2";
console.log(typeof(e));
console.log(e); 
output = 3; // because - sign has only one task to substrack same with multiplication and diision

6.
let f = "5"-"yes";
console.log(typeof(f));
console.log(f); 
output = nan; // if we * - /  word string with number string or string with number it gives nan

------------------------

TYPE CONVERSION :-

Explicit conversion of value from one value to another. It deliberatly perform by the developer.

1. String() - it is used to convert values in string
2. Number() - it is used to convert values in number
3. Boolean() - it is used to convert values in booleans

example :- 

1. number to string
let a = 5;
console.log(a);
console.log(typeof(a));
console.log(String(a));
console.log(typeof(String(a)));

2. Boolean to string
let a = true;
console.log(a);
console.log(typeof(a));
console.log(String(a));
console.log(typeof(String(a)));

3. String to number (if there any non numerical string it will convert it in nan)
let a = "1234";
console.log(a);
console.log(typeof(a));
console.log(Number(a));
console.log(typeof(Number(a)));

4. Boolean to number (it convert true in 1, and false in zero)
let a = false;
console.log(a);
console.log(typeof(a));
console.log(Number(a));
console.log(typeof(Number(a)));

5. String to Boolean (it convert empty string to false and string to true)
let a = "abcde";
console.log(a);
console.log(typeof(a));
console.log(Boolean(a));
console.log(typeof(Boolean(a)));

6. Number to Bolean (it convert zero or -0 to false and non zero number neg or pos in true)
let a =1;
console.log(a);
console.log(typeof(a));
console.log(Boolean(a));
console.log(typeof(Boolean(a)));

----------------------------------------

SET

In JavaScript, a Set is a built-in object that allows you to store unique values of any type, whether primitive values or object references. Sets are particularly useful when you need to ensure that a collection of values does not contain duplicates.


let myset = new Set([1,2,3,4,5,5])
console.log(myset);

----------------------------------------

MAP

In JavaScript, a Map is a built-in object that allows you to store key-value pairs and remembers the original insertion order of the keys. Unlike regular objects, which only allow strings and symbols as keys, Map objects can use any value (including functions, objects, and primitive values) as either a key or a value.

Creating a Map
You can create a new Map using the Map constructor:


const myMap = new Map();
You can also initialize a map with an array of key-value pairs:


const myMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
]);
console.log(myMap); // Output: Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

*/ 


