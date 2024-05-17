/*

STRINGS

In JavaScript, a string is a sequence of characters used to represent text. Strings are one of the primitive data types in JavaScript and are immutable, meaning that once a string is created, it cannot be changed directly. However, you can create new strings based on existing ones.

const singleQuoteString = 'Hello, world!';
const doubleQuoteString = "Hello, world!";
const templetLiteralString = `Hello, world!`


=========================
STRING PROPERTY :-
=========================

1. length : length property that returns the length of the string(numbers of characters). Includes space and all symbols.
const str = 'Hello World';
console.log(str.length); // Output: 11 


=========================
ESCAPE CHARACTER :- 
=========================

1. \'  to use single quote in a string which is created by single quotes we can use single quotes in double qotes and viceversa.
let str = 'hello \'world\'';
console.log(str);

2. \"  to use double quotes in a string which is created by double quotes. we can use single quotes in double qotes and viceversa.
let str = 'hello \"world\"';
console.log(str);

3. \\  to use backslash in string because first backslash is considered as escapse character symbol
let str = 'hello \\world\\"';
console.log(str);

=========================
STRING METHOD :-
=========================

1. length : length property that returns the length of the string(numbers of characters). Includes space and all symbols.
const str = 'Hello World';
console.log(str.length); // Output: 11 

2. 

*/  



let str = 'hello \\world\\"';
console.log(str);