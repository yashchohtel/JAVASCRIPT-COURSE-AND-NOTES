/*

ASYNC AND DEFER :-

In HTML, the async and defer attributes are used with the <script> tag to control how and when JavaScript files are loaded and executed. They are particularly useful for optimizing page load times and improving performance by managing the loading behavior of external scripts.

In HTML, the async and defer attributes are used with the <script> tag to control how and when JavaScript files are loaded and executed. They are particularly useful for optimizing page load times and improving performance by managing the loading behavior of external scripts.

async Attribute
The async attribute allows the script to be downloaded in the background while the rest of the page continues to load. Once the script is downloaded, it is executed immediately, potentially before the entire page has finished loading.

Characteristics of async
Scripts with the async attribute do not block the HTML parsing.
The script is executed as soon as it is downloaded, which may happen at any time.
Multiple async scripts can execute in any order, as they are executed immediately once downloaded.

example :-
<head>
  <script src="script1.js" defer></script>
  <script src="script2.js" defer></script>
</head>

In this example:

script1.js and script2.js are downloaded asynchronously but their execution is deferred.
The scripts are executed in the order they appear in the HTML, after the document is fully parsed.

Use async when the script is independent of other scripts and does not rely on the DOM being fully loaded. It is suitable for scripts that can execute as soon as they are downloaded, such as analytics or advertisement scripts.
Use defer when the script relies on the DOM being fully parsed or when the script needs to be executed in order relative to other scripts. It is suitable for scripts that manipulate the DOM or need to ensure that the document is fully loaded.


In HTML, the async and defer attributes are used with the <script> tag to control how and when JavaScript files are loaded and executed. They are particularly useful for optimizing page load times and improving performance by managing the loading behavior of external scripts.

async Attribute
The async attribute allows the script to be downloaded in the background while the rest of the page continues to load. Once the script is downloaded, it is executed immediately, potentially before the entire page has finished loading.

Characteristics of async
Scripts with the async attribute do not block the HTML parsing.
The script is executed as soon as it is downloaded, which may happen at any time.
Multiple async scripts can execute in any order, as they are executed immediately once downloaded.
Example
html
Copy code
<!DOCTYPE html>
<html>
<head>
  <script src="script1.js" async></script>
  <script src="script2.js" async></script>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
In this example:

script1.js and script2.js are downloaded asynchronously.
Each script is executed as soon as it is fully downloaded, potentially before the HTML document is fully parsed.
defer Attribute
The defer attribute ensures that the script is downloaded in the background but defers its execution until the HTML document has been completely parsed.

Characteristics of defer
Scripts with the defer attribute do not block HTML parsing.
The script is executed in the order they appear in the document, after the entire HTML has been parsed.
Useful for ensuring that scripts run only after the document is ready, without blocking the page rendering.
Example
html
Copy code
<!DOCTYPE html>
<html>
<head>
  <script src="script1.js" defer></script>
  <script src="script2.js" defer></script>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
In this example:

script1.js and script2.js are downloaded asynchronously but their execution is deferred.
The scripts are executed in the order they appear in the HTML, after the document is fully parsed.
When to Use async vs defer
Use async when the script is independent of other scripts and does not rely on the DOM being fully loaded. It is suitable for scripts that can execute as soon as they are downloaded, such as analytics or advertisement scripts.
Use defer when the script relies on the DOM being fully parsed or when the script needs to be executed in order relative to other scripts. It is suitable for scripts that manipulate the DOM or need to ensure that the document is fully loaded.


Summary
-async Attribute:
.Loads the script in the background and executes it as soon as it is downloaded.
.Does not block HTML parsing.
.Scripts execute in no particular order.

-defer Attribute:
.Loads the script in the background and defers execution until the HTML document is fully parsed.
.Does not block HTML parsing.
.Scripts execute in the order they appear in the document.
.Using async and defer effectively can help improve page load times and ensure a smooth user experience by optimizing how and when JavaScript is loaded and executed.








*/ 