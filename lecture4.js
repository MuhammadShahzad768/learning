//Premitives in Js
//There are 7 primitives in Js
//Number, String, Boolean, Null, Undefined, Symbol, BigInt
//Objects are non-primitive data types in Js    
let a = 10; //Number
let b = "Hello"; //String
let c = true; //Boolean 
let d = null; //Null
let e; //Undefined  
let f = Symbol("id"); //Symbol
let g = 1234567890123456789012345678901234567890n;  //BigInt

// if i want to check the type of variable i can use typeof operator
console.log(typeof a);

//Obejects in Js
//Objects are non-primitive data types in Js
//Objects are used to store collections of data and more complex entities
const person = {
    firstName: "John",
    lastName: "Doe",
}
console.log(person.firstName); //John
//it can be changed 