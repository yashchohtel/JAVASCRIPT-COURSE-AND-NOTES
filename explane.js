// is message ko copy karke vs code mai js file mai paste karte phir padhna jayada acche se samajh aaiga


// ye eak normal function hai without return statement ke 

function sum(num1, num2){
    let total = num1 + num2;
    console.log(total);
}

sum(10,5);   // output : 15 

// idhar tak clear?
// aab issi function ko banatae hai return statement ke sath usse pehle samajhte hai return kya hai.
// return eak aisa statement hota hai jo ke kissi value ko wapas bhejne ka kaam karta hai caller ke pass. jaise ke niche wale function mai lika hai [ return total; ] abb return kya karega jo total ke value hai usse caller ke pass lekar jaiga yaane ke [ sum(10,5) ] ke pass or issme store kar dega. abb agar hume is value ko dekhna hai ke kya aaya hai. to hume usse print ya console.log kar hoga; to print karne ke liye ya to hum sidha is function ko console.log ke andar he call karde ya usse kissi variavle mai store kar ke phir us variable ko print karde.


function sum(num1, num2){
    let total = num1 + num2;
    return total; // ye hai function return yaha jo total ke value hai usse wo caller ke pass lekar jaiga or usme sotre kar dega
}

sum(10,5) // ye hai caller yaha par total ke value store hai.

console.log(sum(10,5)) // aab sum ko console ke andar call kar rahe hai to jo return statement value return kiya hai total ko wo sum mai store hai to wo print ho jaiga.

let a = sum(10,5); // or idhar sum ke pass jo value hai usse a mai store kara hare hai to sum ke jo value hai wo a mai store ho jaige.

console.log(a); // ab idhar hum a ko console mai print kara rahe hai.


// eak baat or function ke andar jaha kahi bhe return statement hoga uski aage wali line se function execute hona band ho jaiga.

function sayHello (){
    console.log('hello'); // ye wala print hoga kyuki return statement iske baad hai
    return "hello"; // ye wala caller ke pass wapas jaiga. kyuki ye return kar raha hai.
    console.log("hello"); // or ye wala print nahi hoga kyuki iske upper wali line mai return statement hai or wo retrn statment wo wali line ko execute karke function ko execute hona band kar diya.
}

sayHello();
let b = sayHello(); // or isme jo return hua hai usse bhe b mai store kar rahe hai.
console.log(b); // abb b ko print kar rahe hai

