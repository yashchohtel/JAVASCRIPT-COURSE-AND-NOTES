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

---------------------------------------------------------------------

TRAVERSING ELEMENT IN JS:-

a) parentElement : it is used to select parent element on a selected element.

let elm = document.getElementById("heading");
console.log(elm);

let parentElm = elm.parentElement;
console.log(parentElm);

-------------

b) firstElementChild : used to select the first element child of the selected element.

let elm = document.getElementById("intro");
console.log(elm);

let node = elm.firstElementChild;
console.log(node);

-------------

c) lastElementChild : used to select the last element child of the selected element.

let elm = document.getElementById("intro");
console.log(elm);

let node = elm.lastElementChild;
console.log(node);

-------------

d) children : used to select the all element child of the selected element.

let elm = document.getElementById("intro");
console.log(elm);

let node = elm.children;
console.log(node);

-------------

e) previousElementSibling : used to select the previous sibling element of selected element.

let elm = document.getElementById("list-1");
console.log(elm);

let node = elm.previousElementSibling;
console.log(node);

-------------

f) nextElementSibling : used to select the next sibling element of selected element.

let elm = document.getElementById("list-1");
console.log(elm);

let node = elm.nextElementSibling;
console.log(node);

---------------------------------------------------------------------

MANIUPLATING HTML :-

a) innerHTML : It is used to get and set the innerHTML of the select document (of its child element).

let elm = document.getElementById("divOne");
console.log(elm);

let content = elm.innerHTML; // getting
console.log(content);

elm.innerHTML = "<h1>THIS IS HEADING ONE</h1>" // setting

-------------

b) innerText : it is used to get and set the inner text of the selected element.

let elm = document.getElementById("para");
console.log(elm);

let content = elm.innerText; // getting
console.log(content);

elm.innerText = "THIS IS HEADING ONE" // setting

-------------

c) textContent : it is used to get and set the text contentof the selected element.

let elm = document.getElementById("para");
console.log(elm);

let content = elm.textContent; // getting
console.log(content);

elm.textContent = "this is text by text content" // setting

---------------------------------------------------------------------

CREATING AND APPENDING ELEMENT IN HTML

a) createElement : this method is used to create element dinimacly expecting one parameter which is the tag name we want to create.

b) createTextNode : this metod is used to ceate a text node for the element where we want to append this.

c) appendChild : this is used to append the created element or text into the selected element.

d) className : it is used to add class to selected element. we can add multiple classes.

e) id : it is used to add id to selected element.

let elm = document.getElementById('divOne'); // selecting the element

let h1 = document.createElement('h1'); //creating element (a)

let text = document.createTextNode("this is h1 tag inserted by js") // creating textnode for element (b)

elm.appendChild(h1).appendChild(text); // appending h1 to elm and then appending text to h1.(c)

h1.className = "try catch"; // creating clss dynamicly. can add multiple casses with this (d)

h1.id = "h1"; // creating id dynamicly (e)

-----------------------

INSERT BEFORE 

let list = document.getElementById("before"); // selecting element

let item = document.createElement("li"); item.textContent = "new list 5" // creating new element

let pos = list.firstElementChild; // seleting pisition of the wehere we want to insert element before element.

list.insertBefore(item, pos) // this is insert before it will insert the element before the selected elemnt 

-----------------------

DELETING CHILD ELEMENT

let list = document.querySelector(".before"); // selecting element

let elm = list.firstElementChild;
console.log(elm);


list.removeChild(elm) // remove child property used to remove child element of selected parent element it expect one argument which is the selected child element

-----------------------

CLONE ELEMENT

cloneNode = it is used to clone the element to clone select the element we want to clone and call it with the .notation with the element we want to clone. it expect one argument true if we want to clone it children also. and it can be empty for not cloneing children.

let list = document.querySelector(".before"); // selecting element

let cloneElm1 = list.cloneNode();
console.log(cloneElm1);

let cloneElm = list.cloneNode(true);
console.log(cloneElm);

document.body.appendChild(cloneElm).id = 'before1'

-----------------------

REPLACE ELEMENT

replaceChild : it is used to replace childElement it expect two argument, first element to be place ,second element to home replace with.

let list = document.querySelector(".before"); // selecting element

let itemNew = document.createElement("li");
itemNew.textContent = "services";
console.log(itemNew);

let replace = list.firstElementChild;

list.replaceChild(itemNew , replace);

-----------------------

INSERT ADJECENT HTML

insertAdjacentHTML : it is used to insert html element before and after of select elements's sratring and closing tag. it expect two argument first where to insert and sect what to insert.

let elm = document.querySelector(".adjecent"); // selecting the element

let pBeforeBegin = "<p>this is beforebegin p</p>" 
let pafterbegin = "<p>this is afterbegin p</p>" 
let pbeforeend = "<p>this is beforeend p</p>" 
let pafterend = "<p>this is afterend p</p>" 

elm.insertAdjacentHTML('beforebegin', pBeforeBegin)
elm.insertAdjacentHTML("afterbegin", pafterbegin)
elm.insertAdjacentHTML('beforeend', pbeforeend)
elm.insertAdjacentHTML('afterend', pafterend)

-----------------------

CHANGING ATTRUBUTE OF AN ELEMENT

setAttribute = it is used to set the attribute and its value to html element it expect two argument first attribute which we want to set and second it's value.
let btn = document.getElementById("btn");
btn.setAttribute("class", "button");

getAttribute it is used to get the value of attribute of given attribute name in the argument.
let btn = document.getElementById("btn");
console.log(btn.getAttribute("id"));

removeAttribute = it is used to remove attribute it expect one argument which is the name of attribute which we want to remove.
let btn = document.getElementById("btn");
btn.removeAttribute("name")

hasAttribute = it is used to get the presence of attribute it expect one argument which is the name of arrtibute. it return true if present and false is not.
let btn = document.getElementById("btn");
console.log(btn.hasAttribute("id"));

-----------------------

SETTING INLINE STYLE IN HTML ELEMENT

style.cssText it is used to add inline css in html element, chain it with select element and assing the style with in a string form.

let element = document.querySelector(".inLine");
console.log(element);

element.style.cssText  = "background-color: red; color: white;"


let element = document.querySelector(".inLine");
console.log(element);

element.style.cssText  = "background-color: red; color: white;" // and if we don't want to override the exexting inlining style of element chain it with plus operator (+=) because if there allready a inline style cssText property will override it.

-----------------------

getComputedStyle = it is used to get computed style of html elemtn.

---------------------

className = it is used to add class to  html elemtnt

classList = it is used to get the list of exisisting class in html element

classList.replace = it is used to replace class

classList.contains = it is used to know the existence of class

classList.toggle = it is used to toggle the class

---------------------




*/ 

