var num1 = prompt("Enter first number.");
var num2 = prompt("Enter second number.");
var opr = prompt("What operation do you want to perform.");
if(opr == "+"){
    var add = parseInt(num1) + parseInt(num2);
    document.write("Addition of " + num1 + " & " + num2 + " is " + add);
}
else if(opr == "-"){
    var sub = parseInt(num1) - parseInt(num2);
    document.write("Subtraction of " + num1 + " & " + num2 + " is " + sub);
}
else if(opr == "*"){
    var mul = parseInt(num1) * parseInt(num2);
    document.write("Multiplication of " + num1 + " & " + num2 + " is " + mul);
}
else if(opr == "/"){
    var div = parseInt(num1) / parseInt(num2);
    document.write("Division of " + num1 + " & " + num2 + " is " + div);
}
else{
    var rem = parseInt(num1) % parseInt(num2);
    document.write("Remainder of " + num1 + " & " + num2 + " is " + rem);
}