/*

===============
DOM EVENTS :-
==============

DOM (Document Object Model) events in JavaScript are actions or occurrences that happen in the web browser and can be detected and handled by JavaScript. Events are a core part of interactivity in web applications. They allow scripts to respond to user actions, browser actions, or other conditions. Examples include clicking a button, loading a page, submitting a form, or even a timer expiring.

Common Types of DOM Events
Here are some of the most common types of DOM events in JavaScript:

Mouse Events: Related to mouse actions.

click: Triggered when an element is clicked.
dblclick: Triggered when an element is double-clicked.
mousedown: Triggered when a mouse button is pressed down.
mouseup: Triggered when a mouse button is released.
mousemove: Triggered when the mouse pointer is moved.
mouseover: Triggered when the mouse pointer is moved onto an element.
mouseout: Triggered when the mouse pointer is moved out of an element.
Keyboard Events: Related to keyboard actions.

keydown: Triggered when a key is pressed.
keyup: Triggered when a key is released.
keypress: Triggered when a key is pressed and released (deprecated, use keydown and keyup instead).
Form Events: Related to form elements.

submit: Triggered when a form is submitted.
change: Triggered when the value of an input element changes.
input: Triggered when the value of an input element is changed (more comprehensive than change).
focus: Triggered when an element gains focus.
blur: Triggered when an element loses focus.
Window Events: Related to browser window actions.

load: Triggered when the entire page is fully loaded.
resize: Triggered when the browser window is resized.
scroll: Triggered when the document view is scrolled.
Clipboard Events: Related to clipboard operations.

copy: Triggered when content is copied to the clipboard.
cut: Triggered when content is cut to the clipboard.
paste: Triggered when content is pasted from the clipboard.
Media Events: Related to media elements like audio and video.

play: Triggered when media playback is started.
pause: Triggered when media playback is paused.
ended: Triggered when media playback ends.
Drag and Drop Events: Related to drag and drop operations.

dragstart: Triggered when the user starts dragging an element.
drag: Triggered when the element is being dragged.
dragend: Triggered when the user stops dragging the element.
drop: Triggered when a dragged element is dropped on a drop target.

------------------------------------------------------------------------------------------------------------

TIME OUT AND TIME INTERVAL

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


*/ 




















