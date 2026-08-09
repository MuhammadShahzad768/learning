let Random = Math.floor(Math.random() * 10) + 1;
let getNumber = Number.parseInt(prompt("Enter a Number"));
if(Random < getNumber){
alert("You Enter above the Random Number");
}else if(Random == getNumber){
alert("You Enter Extact Number");
}else if(Random > getNumber){
alert("You Enter Below the Random Number");
}
console.log("Random " + Random + " Guess " + getNumber); 