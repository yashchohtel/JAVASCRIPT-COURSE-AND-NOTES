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


The window.open() method in JavaScript is used to open a new browser window or tab. It can be used to display a specified URL or to create a new window with specific properties. This method is part of the Browser Object Model (BOM) and provides a way to control the new window's size,position, and other features.

Syntaxwindow.open(url, windowName, windowFeatures);

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

--------------------

NAVIGATOR OBJECT 

The navigator object in JavaScript provides information about the web browser and the user's environment. It is part of the Browser Object Model (BOM) and includes details such as the browser's name, version, the operating system, and user agent string. Additionally, it provides methods and properties to interact with the browser, such as checking if cookies are enabled, managing geolocation, and more.

Properties of the Navigator Object
appName
Description: The name of the browser.
Example:console.log(navigator.appName); // Typically "Netscape" in most modern browsers

appVersion
Description: The version information of the browser.
Example:console.log(navigator.appVersion); // Browser version and platform details

userAgent
Description: The user agent string for the browser.
Example:console.log(navigator.userAgent); // Information about the browser, version, and operating system

platform
Description: The platform on which the browser is running (e.g., "Win32", "MacIntel").
Example:console.log(navigator.platform); // The platform of the browser

language
Description: The language of the browser.
Example:console.log(navigator.language); // The language setting of the browser (e.g., "en-US")

onLine
Description: A Boolean value indicating whether the browser is online.
Example:console.log(navigator.onLine); // true if the browser is online, otherwise false

cookieEnabled
Description: A Boolean value indicating whether cookies are enabled in the browser.
Example:console.log(navigator.cookieEnabled); // true if cookies are enabled, otherwise false

METHODS OF NAVIGATOR OBJECT :-

geolocation
Description: Provides access to the Geolocation API, which allows you to request the user's location.
Example:navigator.geolocation.getCurrentPosition(function(position) {

    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);
});

javaEnabled()
Description: Returns a Boolean value indicating whether Java is enabled in the browser.
Example:console.log(navigator.javaEnabled()); // true if Java is enabled, otherwise false

sendBeacon()
Description: Used to asynchronously send a small amount of data to a web server.
Example:navigator.sendBeacon('https://example.com/collect', JSON.stringify({ event: 'page_load' }));

vibrate()
Description: Causes the device to vibrate for a specified duration.
Example:navigator.vibrate(200); // Vibrate for 200 milliseconds
Practical Examples
Detecting Browser Informationconsole.log("Browser Name: " + navigator.appName);

console.log("Browser Version: " + navigator.appVersion);
console.log("User Agent: " + navigator.userAgent);
console.log("Platform: " + navigator.platform);
console.log("Language: " + navigator.language);
conole.log("Online Status: " + navigator.onLine);
console.log("Cookies Enabled: " + navigator.cookieEnabled);
Checking Geolocation Support and Getting Positionif ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log("Latitude: " + position.coords.latitude);
            console.log("Longitude: " + position.coords.longitude);
        },
        function(error) {
            console.error("Error Code = " + error.code + " - " + error.message);
        }
    );
} else {    console.log("Geolocation is not supported by this browser.");
}
Using sendBeacon to Send Datavar data = { event: 'user_click', timestamp: Date.now() };

navigator.sendBeacon('https://example.com/collect', JSON.stringify(data));

Summary
The navigator object is a powerful interface for accessing and interacting with the browser's environment. It provides a wealth of information about the browser and device, as well as useful methods for handling tasks like geolocation, sending data to a server, and more. This makes it an essential tool for building dynamic, context-aware web applications.

----------------------

SCREEN OBJECT :-

The screen object in JavaScript provides information about the user's screen, such as its size, width, height, color depth, and more. It is part of the Browser Object Model (BOM) and can be used to gather details about the screen properties, which can be useful for optimizing web page layout and presentation.

Properties of the Screen Object :-

width
Description: The width of the user's screen in pixels.
Example:console.log(screen.width); // e.g., 1920

height
Description: The height of the user's screen in pixels.
Example:console.log(screen.height); // e.g., 1080

availWidth
Description: The width of the screen available for web content, excluding interface features like the taskbar.
Example:console.log(screen.availWidth); // e.g., 1920

availHeight
Description: The height of the screen available for web content, excluding interface features like the taskbar.
Example:console.log(screen.availHeight); // e.g., 1040

colorDepth
Description: The color depth of the screen in bits per pixel.
Example:console.log(screen.colorDepth); // e.g., 24

pixelDepth
Description: The pixel depth of the screen in bits per pixel.
Example:console.log(screen.pixelDepth); // e.g., 24
Practical Examples

Displayng Screen Informationconsole.log("Screen Width: " + screen.width);
console.log("Screen Height: " + screen.height);

console.log("Available Width " + screen.availWidth);
console.log("Available Height: " + screen.availHeight);
console.log("Color Depth: " + screen.colorDepth);
console.log("Pixel Depth: " + screen.pixelDepth);
Example: Adjusting Layout Based on Screen Size
You can use the screen object to adjust the layout of a web page based on the screen size. This can be particularly useful for responsive design.
if (screen.width < 600) {
    
// For small screens (e.g., mobile devices)    document.body.style.fontSize = "14px";
} else {
    // For larger screens (e.g., desktops)
    document.body.style.fontSize = "18px";
}
Example: Dynamically Loading High-Resolution Images
You can use the screen object to determine the screen's pixel depth and decide whether to load high-resolution images.
if (screen.pixelDepth > 24) {

    // Load high-resolution images    document.getElementById("hero-image").src = "high-res-image.jpg";
} else {
    // Load standard-resolution images
document.getElementById("hero-image").src = "standard-res-image.jpg";
}
Summary
The screen object in JavaScript provides essential information about the user's screen, including its dimensions and color depth. This information can be used to optimize the user experience by adapting the layout, content, and resources of a web page based on the user's screen properties. While not all properties are writable, they offer valuable data for creating responsive and adaptive web designs.


*/ 



