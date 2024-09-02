var a = 6;
var b = prompt("Enter a number between 1 to 10");
if (a == b){
    alert("Bingo! Correct Answer.");
}
else if(a == --b){
    alert("Close enough to the correct answer.");
}
else{
    alert("Try Again.");
}