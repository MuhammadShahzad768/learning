const a = [10,20,30,20,30];
const b = ["Shahzad","Irfan"];
console.log(a.sort());
 delete a[0];
console.log(a.length);
console.log(a.concat(b));

let compare = (a,b) =>{
  return a - b;
}
const c = a.sort(compare);
console.log(c);

//Splice
//It is used to add or remove elements from an array. It modifies the original array.
const DeleteNumber = a.splice(1, 2,"Shahzad","Ali","Ahmed");
console.log("DeleteNumber " + DeleteNumber);
console.log("Array After DeleteNumber " + a);
console.log(a.join(", "))

//Slice
//It create a new array from the existing array. It does not modify the original array.
const arrays = [1,2,4,5,6,7,8,"Shahzad","Aki"];
const newArray = arrays.slice(2);
console.log(newArray);