var sub1 = prompt("Enter marks of 1st subject.");
var sub2 = prompt("Enter marks of 2nd subject.");
var sub3 = prompt("Enter marks of 3rd subject.");
var totalmarks = 300;
var obtmarks = Number(sub1) + Number(sub2) + Number(sub3);
var percentage = (obtmarks/totalmarks) * 100;
document.write("<b>Marks Sheet</b>")
document.write("<br><br><br>Total Marks: " + totalmarks);
document.write("<br>Marks Obtained: " + obtmarks);
document.write("<br>Percentage: " + percentage + "%");
if (percentage >= 80){
    document.write("<br>Grade: A-one");
    document.write("<br>Remarks: Excellent");
}
else if (percentage >= 70){
    document.write("<br>Grade: A");
    document.write("<br>Remarks: Good");
}
else if (percentage >= 60){
    document.write("<br>Grade: B");
    document.write("<br>Remarks: You need to improve");
}else{
    document.write("<br>Fail");
    document.write("<br>Sorry");
}