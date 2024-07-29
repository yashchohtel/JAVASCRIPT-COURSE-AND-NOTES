/*

LOCAL STORAGE :-

Local storage in JavaScript refers to the localStorage object, which allows you to store key-value pairs in a web browser with no expiration time. This means the data stored in localStorage will persist even after the browser is closed and reopened. It's a part of the Web Storage API, providing a way to store data locally within the user's browser.

Key Characteristics of localStorage
-Persistence: Data stored in localStorage persists until explicitly deleted. It remains available even after the browser is closed and reopened.
-Storage Capacity: Typically, browsers allow around 5MB of storage per origin (domain) in localStorage.
-Data Format: Data is stored as strings. Non-string data must be serialized (e.g., JSON.stringify) before storing and deserialized (e.g., JSON.parse) after retrieving.

-------------------------

Common Methods of localStorage

setItem(key, value) : Stores a value associated with a key.
localStorage.setItem('username', 'JohnDoe');

-------------------------

getItem(key) : Retrieves the value associated with a key.
const username = localStorage.getItem('username');
console.log(username); // Output: 'JohnDoe'

-------------------------

removeItem(key) : Removes the key-value pair associated with a key.
localStorage.removeItem('username');

-------------------------

clear() : Removes all key-value pairs from localStorage.
localStorage.clear();

-------------------------

key(index) : Retrieves the key at the specified index.

localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('email', 'john@example.com');
const firstKey = localStorage.key(0);
console.log(firstKey); // Output: 'username' (or 'email', depending on the browser implementation)

-------------------------

Local Storage can only store strings, so when you want to store a complex data structure like an array or an object, yo need to convert it to a string using JSON.stringify;

JSON.stringigy: converts a javascript object into a JSON string.

-useful when you want to send data to a server or store it in a text file, as JOSN is a common data interchange format.

const data = {name:"yash", age:30, city:"pune"};
const jsonString = JSON.stringify(data);
console.log(jsonString);

-------------------------

JSON :-

JSON (JavaScript Object Notation) is a lightweight data-interchange format that's easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript programming language, but it is language-independent, with parsers available for many programming languages.

-------------------------

JSON.parse: converts a JSON string into a javascript object. 

useful when you receive JSON data from a server or read it from a file, and you want to work with it as a javascript object. 

const data = {name:"yash", age:30, city:"pune"};
const jsonString = JSON.stringify(data);
const parseData = JSON.parse(jsonString)
console.log(jsonString);
console.log(parseData);

document.write(parseData)

*/ 

