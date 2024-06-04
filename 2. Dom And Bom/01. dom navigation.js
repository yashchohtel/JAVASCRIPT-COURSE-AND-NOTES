/*

=====================
[1] DOM NAVIGATION :-
=====================

a) Document.documentElement returns the element that is the root element of the document  (for example, the <html> element for html document.)

let parent = document;
console.log(parent); // it represent the entire html document.

let docElm = document.documentElement
console.log(docElm);

let headElement = document.head;
console.log(headElement);

let bodyElement = document.body;
console.log(bodyElement);

---------------

b) parentNode / parentElement :- navigate to the parent mode of element. Document and documentFragment nodes can never have parent, so paretnNode will always erturn null. it also returns null if the node has ust been crated and is not yet attached to the tree

let bodyElement = document.body;
console.log(bodyElement);

let firstChild = bodyElement.firstElementChild;
console.log(firstChild);

let parent = firstChild.parentNode;
console.log(parent);

let parElm = firstChild.parentElement;
console.log(parElm);

---------------

c) childNode / children : navigate to child nodes or elements. childNOdes is a property that returns a nodeList containing all child nodes of a given element, including text nodes and comment nodes.

let bodyElement = document.body;
console.log(bodyElement);

let bodyChild = bodyElement.childNodes;
console.log(bodyChild);

let bodyChild2 = bodyElement.children;
console.log(bodyChild2);

---------------

d) firstChild / firstElementChil : navigate to the first child node or element. 

the element suffix in firstElementChild and similar properties signifies that only element nodes ae considered.

let bodyElement = document.body;
console.log(bodyElement);

let firstChild = bodyElement.firstChild;
console.log(firstChild);

let firstElmChild = bodyElement.firstElementChild;
console.log(firstElmChild);

---------------

e) lastChild / lastElementChild : navigate to the last child node or element.

let bodyElement = document.body;
console.log(bodyElement);

let lastChild = bodyElement.lastChild;
console.log(lastChild);

let lastElmChild = bodyElement.lastElementChild;
console.log(lastElmChild);

---------------

f) nestSibling / nextElementSibling : nagivate to the next sibling node or element.

let bodyElement = document.body;
console.log(bodyElement);

let firstChild = bodyElement.firstElementChild;
console.log(firstChild);

let nSibling = firstChild.nextSibling;
console.log(nSibling);

let nElmSibling = firstChild.nextElementSibling;
console.log(nElmSibling);

---------------

g) previousSibling / prebiousElementSibling : Navigate to the previous sibling node or element

let bodyElement = document.body;
console.log(bodyElement);

let firstChild = bodyElement.firstElementChild;
console.log(firstChild);

let pSibling = firstChild.previousSibling;
console.log(pSibling);

let pElmSibling = firstChild.previousElementSibling;
console.log(pElmSibling);


*/ 


