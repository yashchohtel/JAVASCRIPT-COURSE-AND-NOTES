/*

CLASSES IN JAVASCRIPT (OOP's) :-

What is a class in JavaScript?
A class is like a blueprint to create objects with properties and methods.
It helps you organize your code in a clean, reusable, and object-oriented way.

Think of a class like a recipe. The recipe itself doesn’t cook the food — but you can create many dishes from it (just like you can create many objects from a class).

--------------------------

Syntax of a JavaScript Class

// create a class named Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
   // method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

1. class Person
This defines a class named Person.

2. constructor(name, age)
This is a special method that runs automatically when you create a new object from the class.
this.name and this.age store the data in the object.

3. greet()
This is a method inside the class. Every object created from Person can use this method.

Creating an Object from Class

const person1 = new Person("Yash", 25);
person1.greet();  // Output: Hello, my name is Yash and I am 25 years old.

--------------------------

CONSTRUCTORS IN JAVASCRIPT (OOP'S) :- 

what is constructor in classes?
constructor() is a special method that runs automatically when you create a new object from a class.

Purpose: To initialize properties (like name, age, etc.).

example:

class User {
  constructor(name) {
    this.name = name; // store the value inside object
  }
}

const user1 = new User("Yash");
console.log(user1.name);  // Output: Yash

--------------------------

PROTOTYPE IN JAVASCRIPT (OOP'S) :- 

2. prototype in class (concept)
What it is :- In JavaScript, every class method is stored in its prototype.

When you create an object using new, JavaScript looks in the prototype for methods.

Example:

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const user1 = new User("Yash");

//  This greet method is not inside the object; it’s in the prototype
console.log(user1.__proto__ === User.prototype); // true

--------------------------

3. static methods
What they are :- Static methods belong to the class itself, not to the objects.

You cannot call them using an object.

✅ Example:

class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 3)); // ✅ Output: 8

const calc = new MathUtil(); // Error: Can't use static method with object
calc.add(5, 3);  // This will throw an error

Use case: Utility/helper functions that don’t need to access object data.
*/ 