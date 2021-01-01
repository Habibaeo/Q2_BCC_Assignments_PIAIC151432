var engMarks = prompt("Your marks in English","69");
engMarks = parseInt(engMarks);
var urduMarks = prompt("Your marks in Urdu","75");
urduMarks = parseInt(urduMarks);
var mathsMarks = prompt("Your marks in Maths","75");
mathsMarks = parseInt(mathsMarks);
var marksObtained = engMarks + urduMarks + mathsMarks;
var totalMarks = 300;
var percentage = marksObtained/totalMarks * 100;
if (percentage >= 80){
    document.write("<b>Marks Sheet</b>"+"<br><br>Total Marks: "+ totalMarks + "<br>Marks Obtained: "+ marksObtained 
    + "<br>Percentage: "+ percentage + "<br>Grade: A-one" + "<br>Remarks: Excellent")
}
else if (percentage >= 70){
    document.write("<b>Marks Sheet</b>"+"<br><br>Total Marks: "+ totalMarks + "<br>Marks Obtained: "+ marksObtained 
    + "<br>Percentage: "+ percentage + "<br>Grade: A" + "<br>Remarks: Good")
}
else if (percentage >= 60){
    document.write("<b>Marks Sheet</b>"+"<br><br>Total Marks: "+ totalMarks + "<br>Marks Obtained: "+ marksObtained 
    + "<br>Percentage: "+ percentage + "<br>Grade: B" + "<br>Remarks: You need to improve")
}
else if (percentage < 60){
    document.write("<b>Marks Sheet</b>"+"<br><br>Total Marks: "+ totalMarks + "<br>Marks Obtained: "+ marksObtained 
    + "<br>Percentage: "+ percentage + "<br>Grade: Fail" + "<br>Remarks: Sorry")
};