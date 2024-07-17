/*

OBJECTS :-

In JavaScript, an object is a complex data type that allows you to store collections of data and more complex entities. Objects are created using curly braces {}, with properties inside the braces. Each property is a key-value pair, where the key is a string (or symbol) and the value can be any data type, including other objects and functions.

const person = {
  name: "John",
  age: 30,
  email: "hello@johndoe.net",
  favMovies: ["dune", "ironman", "ddlj", "bahubali"],
  greet: function () {
    console.log("Hello, " + this.name);
    return "Hello, " + this.name;
  },
  living: {
    city: "Mumbai",
    country: "India",
  },
};

console.log(person); // we only can print whole object in console but if want to print object on document, we cannot only can print its property and methods.

console.log(person.name); // we can print values of keys with the help of dot (.) notation.

console.log(person.favMovies); // printing array with the help of dot natation.

console.log(person.favMovies[2]); // printing specific value of array in the object.

console.log(person.living); // printing object which is inside a object.

console.log(person.living.city); // printing value of object inside the object with dot notation chaining.

console.log(person.greet()); // call function (method) of object.

--------------------------

KEY CHARACTERISTICS OF JAVASCRIPT OBJECTS :-

1. Key-Value Pairs : Objects store data as key-value pairs, where each key (property name) is unique within the object.

const person = {
    name: "John",
    age: 30
};

2. Dynamic Nature : Properties can be added, modified, or deleted at runtime.

const person = {
    name: "John",
    age: 30
};

person.height = 180; // Adding a new property
person.age = 31;     // Modifying an existing property
delete person.height; // Deleting a property

3. Accessing Properties : Properties can be accessed using dot notation or bracket notation.

const person = {
    name: "John",
    age: 30
};

console.log(person.name);      // Output: John
console.log(person["age"]);    // Output: 30

4. Methods : Functions can be stored as properties, and when they are, they are called methods.

const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // Output: Hello, John

--------------------------

CREATING OBJECTS :-

1. Using Object Literals : The most common way to create an object is using object literals.

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

2. Using the new Object() Syntax : You can also create objects using the new Object() syntax, although it is less common.

const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

3. Using Constructor Functions : Constructor functions are used to create multiple objects of the same type.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Accord", 2019);

--------------------------

ARRAY OF OBJECTS :-

An array of objects in JavaScript is a common data structure used to store a collection of related objects. Each object in the array can represent an item with various properties.

const people = [
    {
        name: "John Doe",
        age: 30,
        occupation: "Software Developer"
    },
    {
        name: "Jane Smith",
        age: 25,
        occupation: "Graphic Designer"
    },
    {
        name: "Emily Johnson",
        age: 35,
        occupation: "Project Manager"
    }
];

Accessing the array of objects
console.log(people[0].name); // Output: "John Doe"
console.log(people[1].occupation); // Output: "Graphic Designer"
console.log(people[2].age); // Output: 35

Iterating through the array of objects
people.forEach(person => {
    console.log(`${person.name} is a ${person.occupation}`);
});
Output:
John Doe is a Software Developer
Jane Smith is a Graphic Designer
Emily Johnson is a Project Manager


*/

