// const NewArray = [];
// console.log(NewArray);
// for(let i=0;i<5;i++){
// const UserNumber = Number.parseInt(prompt("Enter a Number"));

// console.log(UserNumber);
// NewArray.push(UserNumber);
// }
// console.log(NewArray);

// let NewArray = [];
// let value = 0;
// while(true){
//     value = Number.parseInt(prompt("Enter a Value"))
//    if(value == 0){
//   break;
// }else{
// NewArray.push(value);
// console.log(NewArray);
// }
// }


// let FilterArray = [1,2,3,5,10,12,20,30];
// let newArrays = FilterArray.filter((v)=>{
//  return v % 10 == 0;

// })
// console.log(newArrays);


// let SquareArray = [2,3,4,5,6,7];
// let Squared = SquareArray.map((b)=>{
//   return b * b
// })
// console.log(Squared);

let SquareArray = [2,3,4,5,6,7];
let Squared = SquareArray.reduce((acc, b)=>{
  return  acc * b
},)
console.log(Squared);