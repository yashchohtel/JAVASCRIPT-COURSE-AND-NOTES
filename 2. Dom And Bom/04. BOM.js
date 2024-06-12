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

TIME OUT AND ITME INTERVL

setTimeout and clearTimeout in JavaScript
In JavaScript, the setTimeout function is used to execute a piece of code or a function after a specified delay. The clearTimeout function is used to cancel a timeout that was previously set with setTimeout.

setTimeout
The setTimeout function takes two arguments:

The function to be executed.
The delay in milliseconds before the function is executed.

clearTimeout
The clearTimeout function cancels a timeout that was previously set with setTimeout. This is useful if you need to prevent the function from being executed.
timeoutID: The identifier of the timeout you want to cancel. This ID is returned by setTimeout.


let timeOUtId = setTimeout(()=>{
    console.log("hi");
}, 5000)

clearTimeout(timeOUtId)

----------------------

setInterval : In JavaScript, the setInterval function is used to repeatedly execute a piece of code or a function at specified intervals

setInterval
The setInterval function takes two arguments:

The function to be executed.
The interval in milliseconds between each execution of the function.
Syntax : var intervalID = setInterval(function, interval);
function: The function to be executed at each interval.
interval: The time, in milliseconds, between each execution of the function.

function greet() {
    console.log('Hello, world!');
}

var intervalID = setInterval(greet, 2000); // Execute the greet function every 2 seconds

function greet() {
    console.log('Hello, world!');
}

var intervalID = setInterval(greet, 2000);

clearInterval = The clearInterval function is used to stop an interval that was previously set with setInterval.

function greet() {
    console.log('Hello, world!');
}

var intervalID = setInterval(greet, 2000); // Execute the greet function every 2 seconds

setTimeout(function() {
    clearInterval(intervalID);
}, 10000); // Stop the interval after 10 seconds

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
