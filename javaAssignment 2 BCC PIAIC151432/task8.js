var userInput = prompt("Give any number to check if it is positive, neagative or zero");
userInput = Number(userInput);
if (userInput === 0){
    alert("Your provided integer is zero")
}
else if (userInput < 0){
    alert("Your provided integer is a negative number")
}
else if (userInput > 0){
    alert("Your provided integer is a positive number")
};