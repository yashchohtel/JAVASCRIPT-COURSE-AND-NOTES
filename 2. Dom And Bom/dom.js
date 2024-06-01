/*

===================================
JAVASCRIPT DOCUMENT OBJECT MODEL :-
===================================

1) DOCUMENT OBJECT MODEL (DOM) :-

The Dom represents the structured document as a tree of objects, where each object corresponds to a part of the document (such as elements, attributes, and text).

The DOM is primarily concerned with the content of the web page whic allow javascript to interact with and manipulate the HTML element.

When a web browser loads an htmldocument, it parse the html source code and creates a tree-like structure known as the document object model (DOM). this dom tree represents the structure of the html docuemtnt, with each html element being a node in the tree.

this entire dom tree is then accessable to js as an object. Javascript can interact with this object to manipluate the content, structure, and style fo the document the dom essentially serves as an interface between the html document and javascript providing a way for script sto access and modify the docuemtns structre and content.

thd (DOM) is an application programming interface (API). the dom tree is the structure of your html docuemtnt as represented by the dom api. as stated this api then gives us many methods and properties the we can use to manipulate the tree and therefore by extension the docuemtn.

Here is a types of nodes in js:

1) Elements node: an html tag the tree building block.
2) Text Node : in the dom tree, text content including new lines, spaces and tabs is treated as text nodes.
3) Attribute node: an attribute of an element.
4) Comment node : represent comments within the html document.
5) processing instruction node : a processing instruction node, such as <? xml stylesheet _ ?>
6) document node : a document node.
7) document type node : a document type node sucha sa <DOCTYPE html>

-----------------------------------------------------------------------------------------------------------------------------

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

---------------
*/ 


