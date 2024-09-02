var regpass = prompt("Register your password.");
console.log(regpass);
if(regpass == ""){
    regpass = prompt("Please Register your password");
}
var pass = prompt("Enter your password.");
if(regpass == pass){
    document.write("Correct! The password you entered matches the original password.");
}
else{
    document.write("Incorrect password.")
}