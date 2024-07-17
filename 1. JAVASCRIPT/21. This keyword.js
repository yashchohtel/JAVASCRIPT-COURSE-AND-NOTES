/*

THIS OBJECT :-

In javascript, the this keyword refers to an object. 
Which objecct depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object. 
In a function, in stric mode, this is undefined.
In an event, this refers to the element that received te event.
Method like call(), apply(), and bind() can refer tis to any object. 

Note:- this is not a variable. it is a keyword. You cannot change the balue of this.

----------------

1. In a function, this refers to the global object.

function callMe(){
    console.log(this);
}

callMe();

-------

2. In an object method, this refers to the object.

const obj = {
    name: "yash",
    greet: function(){
        console.log(this);
    }
}

obj.greet();

-------

3. Alone, this refers to the global object.

console.log(this);

-------

4. When a method is define in a object by arrow function then this refer to global object.

const obj = {
    name: "yash",
    greet: () => {
        console.log(this);
    }
}

obj.greet();

let car1 = {
    model:"maruti Suzuki",
    colo:"red",
    price:500000,
    info: function(){
        return this.model + " " + this.price;
    }
}

let car2 = {
    model:"toyota",
    colo:"black",
    price:5000000,
    info: function(){
        return this.model + " " + this.price;
    }
}

console.log(car1.info());
console.log(car2.info());

*/


