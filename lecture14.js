const Name = "Shahzad";
for(let a in Name){
console.log(Name[a]);
}
const Name1 = "Irfan"
for(let i = 0; i < Name1 .length; i++){
console.log(Name1[i]);
}

const plus = Name.concat(Name1);
for(let i = 0; i < plus .length; i++){
console.log(plus[i]);
}
console.log(plus);

const repl = Name.replace("Shah","Ali");
console.log(repl);