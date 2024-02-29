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

6. Bigint

-----------

7. Symbol



*/ 


