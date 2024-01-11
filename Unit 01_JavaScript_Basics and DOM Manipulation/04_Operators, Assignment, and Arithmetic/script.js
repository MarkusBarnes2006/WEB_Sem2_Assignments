let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

num1 = +num1
num2 = +num2

sum = num1 + num2;
dif = num1 - num2;
prod = num1 * num2;
quo = num1 / num2;
mod = num1 % num2;
document.getElementById("sum").innerHTML = sum;
document.getElementById("dif").innerHTML = dif;
document.getElementById("prod").innerHTML = prod;
document.getElementById("quo").innerHTML = quo;
document.getElementById("mod").innerHTML = mod;