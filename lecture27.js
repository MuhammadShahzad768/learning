alert("Hello World");
let a = prompt("Enter a Number");
alert("You Entered " + a);
let confirmed = confirm("Are you Sure?");
if(confirmed){
    document.write(a);
}else{
    document.write("You Cancelled");

}