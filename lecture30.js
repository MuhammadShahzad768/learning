
const Game = ["Snake", "Water", "Gun"];

let i = 0;
let ComputerNumber = 0;
let UserNumber = 0;

while (i < 3) {
  let random = Game[Math.floor(Math.random() * Game.length)];
  let GetPrompt = prompt("Enter Your Choice: Snake, Water, or Gun");

  if (
    (GetPrompt == "Snake" && random == "Water") ||
    (GetPrompt == "Gun" && random == "Snake") ||
    (GetPrompt == "Water" && random == "Gun")
  ) {
    alert(
      "Computer Choose: " + random +
      "\nYou Choose: " + GetPrompt +
      "\nYou Win!"
    );

    UserNumber++;
  } 
  else if (
    (GetPrompt == "Water" && random == "Snake") ||
    (GetPrompt == "Snake" && random == "Gun") ||
    (GetPrompt == "Gun" && random == "Water")
  ) {
    alert(
      "Computer Choose: " + random +
      "\nYou Choose: " + GetPrompt +
      "\nComputer Win!"
    );

    ComputerNumber++;
  } 
  else if (
    GetPrompt == "Snake" ||
    GetPrompt == "Water" ||
    GetPrompt == "Gun"
  ) {
    alert(
      "Computer Choose: " + random +
      "\nYou Choose: " + GetPrompt +
      "\nIt's a Draw!"
    );
  } 
  else {
    alert("Please choose only Snake, Water, or Gun.");
    i--;
  }

  i++;
}

console.log(
  "Computer Number: " + ComputerNumber +
  " | User Number: " + UserNumber
);

if (ComputerNumber > UserNumber) {
  alert("Computer Wins This Match With " + ComputerNumber + " Points!");
} 
else if (ComputerNumber < UserNumber) {
  alert("User Wins This Match With " + UserNumber + " Points!");
} 
else {
  alert("Match Is Draw!");
}

