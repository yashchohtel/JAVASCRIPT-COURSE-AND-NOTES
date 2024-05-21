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

4. \n to wtart string in a new line words after \n will start at new line. 
let str = 'hello \n world"';
console.log(str)

=========================
STRING METHOD :-
=========================

1. IndexOf() : the indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

syntax : indexOf(searchString,position)

let str = "yash chohtel";
let indexNo = str.indexOf("chohtel")
console.log(indexNo);

-------------------

2. lastIndexOf() :The lastIndexOf method in JavaScript is used to find the position of the last occurrence of a specified substring within a string. It searches the string from the end towards the beginning and returns the index of the last occurrence. If the substring is not found, the method returns -1.

syntax : lastIndexOf(searchString, position)

let text = "the quick fox jump over the lazy dog";
let index = text.lastIndexOf("the");
let index2 = text.lastIndexOf("the",7);
console.log(index);
console.log(index2);

-------------------

3. search() : The search() method in JavaScript is used to search a string for a match against a regular expression and return the index of the first match. If no match is found, it returns -1.

-------------------

4. match() : Retuns ana rray fo the matched values or null if not match is found.

-------------------

5. matchAll() : Returns an iterator of all matches providing deatiled information about each match. returns an empty iterator if no match is found.

-------------------

6. includes() : The includes() method in JavaScript is used to determine whether a string contains a specified substring. It returns true if the substring is found within the string, and false otherwise. This method is case-sensitive.

syntax : str.includes(searchString, position)

Parameters
searchString: The substring to search for within the string.
position (optional): The position within the string at which to begin searching for searchString. The default is 0.

const str = "Hello, world!";
const result = str.includes("world");
console.log(result); // Output: true

const str = "Hello, world! Hello again!";
const result = str.includes("Hello", 10);
console.log(result); // Output: true

-------------------

7. startWith() :The startsWith() method in JavaScript is used to determine whether a string begins with the characters of a specified substring. It returns true if the string starts with the substring, and false otherwise. This method is case-sensitive.


Syntax : str.startsWith(searchString, position)

Parameters
searchString: The substring to search for at the start of the string.
position (optional): The position in the string at which to begin searching for searchString. The default value is 0.

const str = "Hello, world!";
const result = str.startsWith("Hello");
console.log(result); // Output: true

const str = "Hello, world! Hello again!";
const result = str.startsWith("world", 7);
console.log(result); // Output: true

-------------------

8. endWith() : The endsWith() method in JavaScript is used to determine whether a string ends with the characters of a specified substring. It returns true if the string ends with the substring, and false otherwise. This method is case-sensitive.

syntax : str.endsWith(searchString, length)
searchString: The substring to search for at the end of the string.
length (optional): The length of the string to consider for the search. By default, it is the full length of the string.

const str = "Hello, world!";
const result = str.endsWith("world!");
console.log(result); // Output: true


const str = "Hello, world!";
const result = str.endsWith("Hello", 5);
console.log(result); // Output: true

-------------------

8. slice() : extracts a part of a string and returns the extracted part in a new string. The slice() method in JavaScript can be used with strings to extract a part of the string and return it as a new string without modifying the original string. It takes two parameters: the start index and the optional end index.

syntax : string.slice(startIndex, endIndex)

Parameters
startIndex: The zero-based index at which to begin extraction. If negative, it is treated as str.length + startIndex.
endIndex (optional): The zero-based index before which to end extraction. The character at this index is not included. If omitted, extraction continues to the end of the string. If negative, it is treated as str.length + endIndex.

const str = "Hello, world!";
const result = str.slice(7, 12);
console.log(result); // Output: "world"

-------------------

9. substring() : The substring() method in JavaScript is used to extract a portion of a string between two specified indices, and return it as a new string. This method does not modify the original string.

Syntax : string.substring(startIndex, endIndex)

const str = "Hello, world!";
const result = str.substring(7, 12);
console.log(result); // Output: "world"

substring is similar to slice the difference is that start and end values less than 0 are treates as 0 in substrings() 

const str = "Hello, world!";
const result = str.substring(0);
console.log(result); // Output: "worldHello, world!"



*/


  