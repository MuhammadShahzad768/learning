// What will the following print in JavaScript?
// console.log("har\"".length)
//4


//includes function

const Sentence = "The quick brown Fox jumps over the lazy Dog";
let word = "Foxs"
console.log(`The ${word} ${Sentence.includes(word) ? 'is' : 'is not'} in the Sentence`);


const Name = "SHAHZAD";

console.log(Name.toLowerCase());


const amount = "Please give Rs 1000";
const getAmount  = Number.parseInt(amount.slice("Please give Rs".length));
console.log(getAmount);



//Try to change 4th character of a given string. Were you able to do it?
//It cannot do this because strings are immutable in JavaScript. You cannot change a character at a specific index directly. Instead, you would need to create a new string with the desired changes.