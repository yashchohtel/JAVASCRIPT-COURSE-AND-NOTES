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

==================
DOM NAVIGATION :-
==================

a) Document.documentElement returns the element that is the root element of the document  (for example, the <html> element for html document.)




*/ 

let parent = document;
console.log("hi");