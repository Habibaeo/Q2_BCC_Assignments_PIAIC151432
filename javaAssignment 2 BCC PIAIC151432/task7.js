var num1 = prompt("To calculate your answer enter your First Number");
num1 = Number(num1);
var num2 = prompt("To calculate your answer enter your Second Number");
num2 = Number(num2);
var requiredOperation = prompt("To calculate your answer enter your required operation using +,-,*,/ or %");
var addition = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var remainder = num1 % num2;
if (requiredOperation == "+"){
    alert("Your answer after performing addition is "+ addition);

}
else if(requiredOperation == "-"){
    alert("Your answer after performing subtraction is "+ subtraction);

}
else if(requiredOperation == "*"){
    alert("Your answer after performing multiplication is "+ multiplication);

}
else if(requiredOperation == "/"){
    alert("Your answer after performing division is "+ division);

}
else if(requiredOperation == "%"){
    alert("Your answer for finding remainder is "+ remainder);

};
