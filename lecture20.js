const a = [1,2,3,4,5,4,3,2,12,"Shahzas","Shahzas","Ali"];
const values = a.filter((a)=>{
  return a == "Shahzas";
})
console.log(values);//Ais sa Array ma  jo things true pass kra ge auis ke ak array bana da ga 


const newMap = a.map((index)=>{
  return index + 1;
})
console.log(newMap);//Map hum is leya use krta ha ta ka hum array ma kuch function perform kr ka new array bana ska



const newReduce = a.reduce((a,b)=>{
  return a + b;
})
console.log(newReduce);