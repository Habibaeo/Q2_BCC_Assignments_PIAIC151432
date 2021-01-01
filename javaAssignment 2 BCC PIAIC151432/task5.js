var secretNumber = 8;
var guessNumber = prompt("Guess the secret number between 1 to 10.");
guessNumber = parseInt(guessNumber);
if (guessNumber === secretNumber){
    alert('"Bingo!');
}
else if(guessNumber === ++secretNumber){
    alert('"Close enough to the correct answer"');
}
else {
    alert("Your answer is incorrect");
}