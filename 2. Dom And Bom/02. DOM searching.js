/*

====================
[2] DOM SEARCHING :-
====================

a) getElementById : getElementById is a method in JavaScript that allows you to access an HTML element by its id attribute. It is a part of the Document Object Model (DOM) and is used to retrieve a single element with the specified id. The method returns a reference to the element, which can then be manipulated using various DOM properties and methods.

let findElementById = document.getElementById("heading");
console.log(findElementById);

-------------

b) getElementByClassName : getElementsByClassName is a method in JavaScript that allows you to select all elements in the document with a specified class name. It returns a live HTMLCollection of elements with the given class name. This means that if the document is updated and elements are added or removed with the specified class, the collection will automatically update to reflect those changes.

let findElementByClass = document.getElementsByClassName("list");
console.log(findElementByClass);

-------------

c) getElementsByTagName : getElementsByTagName is a method in JavaScript that allows you to select all elements in the document (or within a specified element) with a specified tag name. It returns a live HTMLCollection of elements with the given tag name. This means that if the document is updated and elements are added or removed with the specified tag, the collection will automatically update to reflect those changes.

var getElementsByTagName = document.getElementsByTagName('p');
console.log(getElementsByTagName);

-------------

d) querySelector : The querySelector and querySelectorAll methods in JavaScript are powerful tools for selecting elements in the DOM using CSS selectors. These methods provide more flexibility and precision than traditional methods like getElementById, getElementsByClassName, and getElementsByTagName.

querySelector
The querySelector method returns the first element within the document (or within the specified element) that matches the specified CSS selector(s). If no matches are found, it returns null.

let querySelectorForClass = document.querySelector(".list");
console.log(querySelectorForClass);

let querySelectorForId = document.querySelector("#heading")
console.log(querySelectorForId);

let querySelectorForTag = document.querySelector("p")
console.log(querySelectorForTag);

let querySelectorForAll = document.querySelectorAll("p");
console.log(querySelectorForAll);



*/ 

