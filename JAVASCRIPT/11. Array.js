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

QUESTIONS

1. Using map to suqare each number and create a new array

let numbers = [2,3,4,5,6]
let newArr = numbers.map((curElem)=>{
  return curElem * curElem
})
console.log(newArr);

2. Uing the map method, write a function that take an array of strings and returns a new array where each string is capitalized.

let strings = ["apple", "boy", "cat", "dot", "elephant", "fish"];
let newArr = strings.map((curElm, index, array) => {
  return curElm.toUpperCase();
});

console.log(newArr);

3. Using the map method, write a function that takes an array of numbers and returns a new array where each numbers is squared, but only if it's an even number.

let numbers = [1,2,3,4,5,6,7,8,9,10];

let newArr = numbers.map((curElem)=>{
    if(curElem % 2 == 0){
      return curElem * curElem;
    }
}).filter((curElem)=>{
    return curElem != undefined;
})

console.log(newArr);

4. Using the map method. write a function that takes an array of name and returns a new array where each name is prefixed with "MR".

let strings = ["apple", "boy", "cat", "dot", "elephant", "fish"];
let newArr  = strings.map((curElem)=>{
  return `Mr ${curElem}`
})

console.log(newArr);

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

TO INSERT, ADD, REPLACE AND DELET ELEMENTS IN ARRAY FROM START AND END (CRUD) 

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

QUESTIONS :-

1. Add Dec at the end of an array.
let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov"];
console.log(months);
newArr = months.push("dec");
console.log(newArr);
console.log(months);

2. Update mar to march
let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

let indexOfMar = months.indexOf("mar");
let extractedArr = months.splice(indexOfMar, 1 , "march");
console.log(extractedArr);
console.log(months);

3. Delete jun from an array
let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

let indexOfJun = months.indexOf("jun");
let extractedArr = months.splice(indexOfJun, 1 );
console.log(extractedArr);
console.log(months);

---------------

TO ADD OR REMOVE ELEMENT ANYWHERE IN AN ARRAY :-

5. splice() : splice method of array instances changes the contents of an array by removing or replacing existing elements and / or adding new elements in place

syntax : splice(start, deleteCount, item1, item2, ---------- itemN)

let fruits = ["apple", "oranges", "mangoes", "bananas", "grapes", "gwava"];
console.log(fruits);
let newArr = fruits.splice(1, 2, "aam", "santra", "kela");
console.log(newArr);
console.log(fruits);

here 1 is the starting point which is index number of elemet shows we are start from the 1 index number element and 2 is the num of element we want delet it means it will delete the 2 element from the 1 index number and return the removed element from an array. and "amm", "santra", "kela" is the inserted element to the array. if we give the 0 value insted of 2 it will not delete an element but it will insert the new element there. and return empty element.

---------------

SEARCHING IN AN ARRAY :-

6. indexOf() : indexOf method returns the first index at which a give elemnt can be found in the array, or -1 if it is notpresent

syntax : indexOf(searchElement, fromIndex)

let fruits = ["apple", "oranges", "mangoes", "bananas", "grapes", "gwava"];
console.log(fruits);

let newArr = fruits.indexOf("apple",1); // here "apple" is the element we want to search and 1 is the given index number from where we want to start searching if the element found it will return the elements index number or if not found it will return -1.
console.log(newArr);


7. lastIndexOf() : the lastInddexOf() method of array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromindex.

const numbers = [1, 2, 3, 4, 1, 2, 3, 4];

const lastIndex = numbers.lastIndexOf(2);
console.log(lastIndex); // Output: 5

const lastIndexFromIndex = numbers.lastIndexOf(2, 3);
console.log(lastIndexFromIndex); // Output: 1

The first lastIndexOf(2) call returns 5 because 2 is found at index 5 in the array.
The second lastIndexOf(2, 3) call returns 1 because it starts searching from index 3 (moving backwards), and the last occurrence of 2 before index 3 is at index 1.
If the specified item is not found in the array, lastIndexOf() returns -1.

It's important to note that lastIndexOf() performs a strict equality comparison (===) when searching for the specified item. This means that it checks both the value and the data type of the elements in the array. If you want to perform a different type of comparison, you may need to use a custom function with findIndex() or findLastIndex().


8. includes() : the includes mtthod checks whether an array includes a certain element returning true or false

syntax : includes(searchElement, fromIndex)

let fruits = ["apple", "oranges", "mangoes", "apple", "bananas", "grapes", "gwava"];
console.log(fruits);

let newArr = fruits.includes("apple",4); // here "apple" is the element we want to search and 4 is the given index number from where we want to start searching if the element found it will return true or if not found it will return false.
console.log(newArr);

---------------

FILLTE IN AN ARRAY

9. find() : find method is used to find the first element in an array that satisties a provided testing function. It retuns the first matching element or undefined if no element is found.

let number = [1, 2, 3, 4, 5, 6, 2, 7, 8, 9, 5];
let newArr = number.find((curElem,index,arr)=>{
    return curElem > 8;
});
console.log(newArr);

10. findIndex() : The findIndex() method of TypeArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no element satisfy the testing function -1 is returned.

let number = [1, 2, 3, 4, 5, 6, 2, 7, 8, 9, 5];
let newArr = number.findIndex((curElem,index,arr)=>{
    return curElem > 8;
});
console.log(newArr);

11. filter () : the filter method creates a new aray with all elements that pass the test implemnted by the provided function.

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = number.filter((curElem,index,arr)=>{
    return curElem >= 1;
});
console.log(newArr);

QUESTION :-

1. Delete the value 6 from an array.

let value = 6;

let number = [1, 2, 3, 6, 5, 6, 7, 8, 9, 6];

let newArr = number.filter((curElm)=>{
    return curElm !== value;
})

console.log(newArr);

2. Given an array of products where each product has a name and a price, wirte a function that used the filter method to return an array containing only the products with a price less than or equal to 500.


let product = [
  {
    name: "laptop",
    price: 1200,
  },
  {
    name: "phone",
    price: 100,
  },
  {
    name: "tablet",
    price: 300,
  },
  {
    name: "smartwatch",
    price: 150,
  },
];

let newArr = product.filter((curElm)=>{
    return curElm.price < 500;
});

console.log(newArr);

3. find unique value

let number = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

let uniqueValue = number.filter((curElem, index, arr) => {
  return arr.indexOf(curElem) === index;
});

console.log(uniqueValue);

---------------

TO SORT AND COMPARE AN ARRAY

11. sort() : the sort method sorts the elements of an array in place and returns sorted array. By default, it sorts elements as strings.

let fruits = ["apple", "oranges", "mangoes", "bananas", "grapes", "gwava"];
fruits.sort();
console.log(fruits);

---------------

VERY IMPORTANT ARRAY METHODS REDUCE

12. Reduce() : The reduce method in javascript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. the reduce method taks a callback function as its first argument and an potional initial value for the accumulator as the second argument.

syntax : array.reduce(function callback(accumulator,currentValue,index,array)=>{}, initialValue)

accumulator : The accumulated result of the previous iterations.
currentValue : the current element being processed in the array.
index (optional) : the index of the current element being processed.
array (optianal) : the array reduce was called upon.
initialValue (potional) : an initial value for the accumulator. if not provide the first element of the array is used as the initial accumulator value.                            

Write a js function that calculates the total price of items in a shopping createImageBitmap. The function should take an array of item prices as input and return the total price.

const productPrice = [100,200,300,400,500,600]

const totalPrice = productPrice.reduce((accum,curElem)=>{
  return accum + curElem
},0)

console.log(totalPrice);

*/









