/*

ARRAY :- 

Javascript Array is a data structure that allows you to store and organize mutiple values within a single varible. it is a versatile and dynamic object.It can hold various data types. including much strings. objects and even other arrays. Arrays in javascript are zero-index i.e. the first element accessed with in index 0. the second element with an element with an inddex of 1, and so forth.

Iterable - object where you can sue the for-of-loop.
Array-like object - any object iwth length property and use indexes to access items
Array as Objects - arrays in js are a specific type of object that has mumeric keys (indices) and a length property. The indices are automatically naintaned, and the length property is automatically updated when you add or remove elements from the array.
Typeof Operator : the type of operatr in js return object for both array and regulat object. 


----------------------------

CREATING ARRAY :-

1. Using Array Constructor 
let fruits = new Array("apple", "oranges", "mangoes", "bananas");
console.log(fruits); 
output : [ 'apple', 'oranges', 'mangoes', 'bananas' ]

2. Using Array literal
let fruits =  ['apple', 'oranges', 'mangoes', 'bananas' ];
console.log(fruits); 
output : [ 'apple', 'oranges', 'mangoes', 'bananas' ]

----------------------------

ACCESSING ELEMENTS :-

Accessing array Elements using zero-based indices. 

let fruits = new Array("apple", "oranges", "mangoes", "bananas");
console.log(fruits[0]); output : "apple"
console.log(fruits[1]); output : "oranges"
console.log(fruits[2]); output : "mangoes"
console.log(fruits[3]); output : "bananas"

----------------------------

MODIFYING ELEMENTS :-

Moditying Elements : You can modify array elements by assigning new values to specific indices.

let fruits = new Array("apple", "oranges", "mangoes", "bananas");
console.log(fruits); output : [ 'apple', 'oranges', 'mangoes', 'bananas' ]
fruits[2] = "kiwi";
console.log(fruits); output : [ 'apple', 'oranges', 'kiwi', 'bananas' ]

----------------------------

ARRAY TRAVERSAL / ITERATING OVER ARRAYS

1. for of loop :- also know as iterable the for..of loop is used to iterate over the values of an interable object, such as array, strings, or other iterable objects.

example 1 :-


let fruits = new Array("apple", "oranges", "mangoes", "bananas", "grapes", "gwava");

for(let items of fruits){
    console.log(items);
} 

output : 
apple
oranges
mangoes
bananas
grapes
gwava

------------

2. For..in loop : The for...in loop is used to iterate over the properties (including indices) or an object.

let fruits = new Array("apple", "oranges", "mangoes", "bananas", "grapes", "gwava");

for(item in fruits){
    console.log(item);
}

---------------

3. For each Method :- the arr.forEach() metod calls the provided function once for each elemet for the array. The provided function may perform any kind of operation of the element of the given array. 


Here's a breakdown of each part :
array: the array on which the foreeach method is called. 
callback: A function that will be caled once for each element in the array.
currentValue: the current elemet beint processed in the array. index (optional): the index of the current element being processed.
array (optional) the arra foreach was called upon.
thisValue(optional): A value to sue as this when executing the callback function.


example:-

let fruits = new Array("apple", "oranges", "mangoes", "bananas", "grapes", "gwava");

fruits.forEach((curElm, index, array)=>{
    
    console.log(`${curElm} and its index no is ${index} and this is in this array ${array}`);

})

---------------

4. Map method :- map() creates a new array from calling a fucntion for every element. map() does not change the original array.

let fruits = new Array("apple", "oranges", "mangoes", "bananas", "grapes", "gwava");

const myMapArr = fruits.map((curElem, index, arr) =>{
    return `${curElem} ${index}`
});

console.log(myMapArr);

example 1 :- write a program to multiply each element by 2

with for eeach :- 

let numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach((curElem) => {
    console.log(curElem*2); // perform an action on each element
})

with map method :-

let numbers = [1,2,3,4,5,6,7,8,9,10];

let multiplyedArray = numbers.map((curElem) => {
    return curElem*2 // creates  a new array with transformed elements
})

console.log(multiplyedArray);

---------------

KEY DEFFERENCES IN FOR-EACH AND MAP METHOD :-

1. Return Value :- 

for each - It dosen't return a value. The forEach method is used for iterating over the elements of an array and perfoming a side effect, such as modifing the array or performing a task for each elemet.

map - it returs a new array contaiing the reutlts of applay a function to each element in the original array. the original array remains unchanged.

2. Chainig :-

for each - It doesn't return a value, so it cannot be directly chained with other array methods.

map: Since it returns a new array, you can chain other array methods after using map. 

3. Use Case :- 

for ech - Used when you want to iterate over the array elements and perform an action on each eement, but you dont need a new array.

map - used when you want to create a new aray based on the transformation of each element in the original array. 

---------------

HOW TO INSERT, ADD, REPLACE AND DELET ELEMENTS IN ARRAY (CRUD) 

1. push() : Method that adds one or moe elements to the end of an array. and return new length of an array.

let fruits = ["apple", "oranges", "mangoes", "bananas", "grapes", "gwava"];
console.log(fruits);
let newLength = fruits.push("pear")
console.log(newLength);
console.log(fruits);



2. pop() : method that removes the last element from an array. and returns the poped or deleted element fron an array.

let fruits = ["apple", "oranges", "mangoes", "bananas", "grapes", "gwava"];
console.log(fruits);
let newLength = fruits.pop()
console.log(newLength);
console.log(fruits);


3. unshift() : Mthod that adds one or more elements to the beginning of an aray. and return new length of an array.

let fruits = ["apple", "oranges", "mangoes", "bananas", "grapes", "gwava"];
console.log(fruits);
let newLength = fruits.unshift("pear")
console.log(newLength);
console.log(fruits);



4. shift() : Method that removes the first element from an array. and returns the poped or deleted element fron an array.

let fruits = ["apple", "oranges", "mangoes", "bananas", "grapes", "gwava"];
console.log(fruits);
let newLength = fruits.shift()
console.log(newLength);
console.log(fruits);


*/

let fruits = ["apple", "oranges", "mangoes", "bananas", "grapes", "gwava"];
console.log(fruits);
let newLength = fruits.shift()
console.log(newLength);
console.log(fruits);














