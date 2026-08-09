//Variables in JavaScript are used to store data values
//Var, let, and const are used to declare variables in JavaScript.
// Var is a global variable, it can be accessed anywhere in the code
// Var can be re-declared and updated
//Let is a block-scoped variable, it can only be accessed within the block it is defined in
//Let can be updated but not re-declared within the same block
//Const is a block-scoped variable, it can only be accessed within the block it is defined in
//Const cannot be updated or re-declared within the same block
var a = 10;
let b = 20;
b = 25; //I can update the value of b
const c = 30;
//const c = 35; //I cannot re-declare the value of c. it should throw an SyntaxError