/*

========================
BROWSER OBJECT MODEL :- 
========================

The Browser Object Model (BOM) in JavaScript is a collection of objects provided by the browser that allows developers to interact with the browser itself. Unlike the Document Object Model (DOM), which deals with the structure and content of web pages, the BOM focuses on the browser window and provides methods and properties to control browser-specific features.

All global objects, funciton, and variables with the var keyword automatically become members of the window object.
Global variables are properties of the window object.
Global functions are methods of the window object. 

--------------------------------------------------------------------

PROPERTIES OF BOM :-

1) innerWidth and innerHeight : The inner dimensions of the browser window.
console.log(window.innerHeight);
console.log(window.innerWidth);

--------------------

2) outerWidth and outerHeight : The outer dimensions of the browser window.
console.log(window.outerHeight);
console.log(window.outerWidth);

--------------------


3) The window.open() :  method in JavaScript is used to open a new browser window or tab. It can be used to display a specified URL or to create a new window with specific properties. This method is part of the Browser Object Model (BOM) and provides a way to control the new window's size, position, and other features.


The window.open() method in JavaScript is used to open a new browser window or tab. It can be used to display a specified URL or to create a new window with specific properties. This method is part of the Browser Object Model (BOM) and provides a way to control the new window's size, position, and other features.

Syntax
javascript
Copy code
window.open(url, windowName, windowFeatures);
Parameters
url (optional): The URL to be loaded in the new window. If not specified, a new blank window is opened.
windowName (optional): A name for the new window. This name can be used as a target for links and forms. Common values include _blank, _self, _parent, and _top.
windowFeatures (optional): A string that specifies the features of the new window. This string can include settings like the window's size, position, whether it has scrollbars, etc.


window.open('https://www.example.com', 'exampleWindow', 'width=600,height=400'); // Open a new window with specific features

--------------------

LOCATION OBJECT 

The Location object in JavaScript is part of the Browser Object Model (BOM) and provides information about the current URL of the document. It also allows you to manipulate the URL, such as redirecting the browser to a new page or reloading the current page.

console.log(window.location.href);       // Full URL
console.log(window.location.protocol);   // Protocol
console.log(window.location.host);       // Hostname and port
console.log(window.location.hostname);   // Hostname
console.log(window.location.port);       // Port
console.log(window.location.pathname);   // Pathname
console.log(window.location.search);     // Query string
console.log(window.location.hash);       // Fragment identifier
console.log(window.location.origin);     // Origin

*/ 


console.log(window.location.href);       // Full URL
console.log(window.location.protocol);   // Protocol
console.log(window.location.host);       // Hostname and port
console.log(window.location.hostname);   // Hostname
console.log(window.location.port);       // Port
console.log(window.location.pathname);   // Pathname
console.log(window.location.search);     // Query string
console.log(window.location.hash);       // Fragment identifier
console.log(window.location.origin);     // Origin
