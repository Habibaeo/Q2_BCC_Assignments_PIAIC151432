//part a//
var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
};
//part b//
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
else{
    alert("condition for b is False");
};
//part c//
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
else if (c === 13){
alert("condition 2 is true");
}
else if (++c < 14){
alert("condition 3 is true");
}
else if(c === 14){
alert("condition 4 is true");
};
//part d//
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals" + "\nCondition for d is true");
};
//part3//
if (true){
    alert("True");
    }
    else if (false){
    alert("False");
    };
//part f//
if("car" < "cat"){
    alert("car is smaller than cat" + "\nCar and Cat pass true so the given alert isdislayed");
    }