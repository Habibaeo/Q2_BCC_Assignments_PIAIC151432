//Question 14//
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
a = --a;
document.write("a is -1 from a(2)=1");
document.write("<br>");
b = --a - --b;
document.write("b is -1 from a(2)=1, -1 from b(1)=0, now 1-0=1")
document.write("<br>");
c = --a - --b + ++b + b--;
document.write("result is " + c);