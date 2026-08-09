//Conditional statements
let condition = true;
let condition2 = false;
let condition1 = true;
let expression = 2;
let value1 = 1;
let value2 = 2;
if (condition) {
    // code to be executed if condition is true
}
//if else statement
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
//if else if statement
if (condition1) {
    // code to be executed if condition1 is true    
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both condition1 and condition2 are false
}

//Switch statement
switch (expression) {
    case value1:   
    break;
    case value2:
    break;
}

//Ternary operator
//It is a shorthand for if else statement
//It takes three operands
// condition ? valueIfTrue : valueIfFalse

//parseInt is used to convert a string to an integer
const age = Number.parseInt(prompt("Enter your age"));
if(age >= 18) {
    console.log("You are eligible to vote");
}else {
    console.log("You are not eligible to vote");
}


//ternary operator
const ages = Number.parseInt(prompt("Enter your age"));
ages>18 ?alert('You are done') : alert('You are not done');  


