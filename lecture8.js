//let age = Number.parseInt(prompt("Enter Your Age"));
// if((age > 1) & (age < 10)){
//   alert("Your Age Lies Between 1 to 10");
// }else if ((age > 11) & (age < 20)){
//  alert("Your Age Lies Between 11 to 20");
// }else{
//  alert("Your are Above 21");
// }

//Swicth Case

// 1. Prompt for input first
// let age = Number.parseInt(prompt("Enter Your Age"));

// // 2. Run switch evaluation with logical AND (&&)
// switch (true) {
//   case (age >= 1 && age <= 10):
//     alert("You are between 1 and 10");
//     break;

//   case (age >= 11 && age <= 20):
//     alert("You are between 11 and 20");
//     break;

//   default:
//     alert("You entered an incorrect number");
// }

let ages = Number.parseInt(prompt("Enter Your Number"));
if(ages % 2 == 0){
alert("You Number is Divided By 2");
}else if (ages % 3 == 0){
alert("You Number is Divided By 3");
}else{
alert("You Number cannot Divived by 2 or 3");
}