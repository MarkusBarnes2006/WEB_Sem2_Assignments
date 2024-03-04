const numbers = []

for(let i = 0; i < 10; i++){
    let num = Math.floor(Math.random() * 10) + 1;
    numbers.push(num);
}

document.getElementById("unsorted").innerHTML = numbers;

<<<<<<< HEAD
numbers.sort(function(a, b){return a - b});
document.getElementById("sorted").innerHTML = numbers
=======
//YOUDO:  finish the sort and print to the sorted id

>>>>>>> 1551dd6c9aec443bd0988855fb18b825404962b9
