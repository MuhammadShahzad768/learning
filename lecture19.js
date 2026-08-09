const a = [1,2,3,4,5,6,7,8,9,0];
for(let i in a){
//console.log(a[i]);
}
for(let i =0;i<a.length;i++){
//console.log(a[i]);
}
for(let i in a){
//console.log(a[i] * a[i])
}

a.forEach((element)=>{
//console.log(element * element);
})

//It is use to create a Array of a html Collection or string
const name = "Shahzad";
let c = Array.from(name);
console.log(c);