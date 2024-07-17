// class User {
//     constructor (username, email, password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encryptPassword(){
//         return `1234${this.password}abcd`;
//     }

//     userCaptilize(){
//         return this.username.toUpperCase();
//     }

// }

// const user1 = new User("yash", "yah@gmail.com", "passwordthis")

// console.log(user1.encryptPassword());
// console.log(user1.userCaptilize());


/*

CONSTRUCTOR FUNCTION :-



*/ 

function Student(first,last,age,cls){
    this.firstName = first,
    this.lastName = last,
    this.aget = age,
    this.class = cls
}

Student.prototype.nationality = 'Indian'

var student1 = new Student("yash","chohtel",22,"12th");

student1.fullName = function(){
    return `${this.firstName} ${this.lastName}`
}
console.log(student1.nationality);
console.log(student1.fullName());