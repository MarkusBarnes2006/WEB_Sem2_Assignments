let firstName = prompt("Enter Your Name");
console.log(firstName);
let lastName = prompt("Enter last name");
let fullName = firstName + lastName;
console.log(fullName)
document.getElementById("name").innerHTML = fullName;