var js = prompt("Please Enter your password");
if (js ==="" ){
    alert('"Please enter your password"');
};
var jsAgain = prompt("Please enter your password again");

if (jsAgain ===""){
    alert('"Please enter your password"');
}
else if (js === jsAgain){
    alert('"Correct! The passord you entered matches the original password"');
}
else if (jsAgain !=="" && jsAgain !== js){
    alert('"Incorrect password"');
};
