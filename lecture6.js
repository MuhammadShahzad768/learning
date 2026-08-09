//JavaScript Operators and Expressions
//Operators are used to perform operations on variables and values
//There are different types of operators in JavaScript
//Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Bitwise Operators, Ternary Operator
//Arithmetic Operators
//There are 7 arithmetic operators in JavaScript
//Addition, Subtraction, Multiplication, Division, Modulus, Increment, Decrement, Exponentiation
console.log(10 + 5); //15 //Addition
console.log(10 - 5); //5 //Subtraction
console.log(10 * 5); //50 //Multiplication
console.log(10 ** 5); //100000 //Exponentiationv // means 10 to the power of 5
console.log(10 / 5); //2 //Division
console.log(10 % 5); //0 //Modulus //reminder
console.log(10++); //10 //Increment
console.log(10--); //10 //Decrement
let a = 10;
console.log(--a); //First decrement the value of a and then print it
console.log(++a); //First increment the value of a and then print it

//Assignment Operators
// +=, -=, *=, /=, %=, **=,
let a = 10;
a += 5; //Equivalent to a = a + 5
console.log(a); //15
a -= 5; //Equivalent to a = a - 5
console.log(a);
a *= 5; //Equivalent to a = a * 5
console.log(a);
a /= 5; //Equivalent to a = a / 5   


//Comparison Operators
//There are 6 comparison operators in JavaScript
//Equal to, Not equal to, Greater than, Less than, Greater than or equal to, Less than or equal to
console.log(10 == 10); //true //Equal to    
console.log(110  != 10); //false //Equal to and same datatype
console.log(10 != 10); //false //Not equal to
console.log(10 > 5); //true //Greater than
console.log(10 < 5); //false //Less than
console.log(10 >= 5); //true //Greater than or equal to
console.log(10 <= 5); //false //Less than or equal to
console.log(a === 10); //true //It checks the value and the datatype of the variable

//Logical Operators
//There are 3 logical operators in JavaScript
//Logical AND, Logical OR, Logical NOT

let a = 10;
console.log(a > 5 && a < 15); //true
console.log(a > 5 || a < 15); //true
console.log(!(a > 5)); //false