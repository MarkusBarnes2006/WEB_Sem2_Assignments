function takeSquareroot(){
    let number = +document.getElementById("input1").value;
    
    
    let Squareroot = Math.sqrt(number);
    document.getElementById("result").innerHTML = Squareroot;
}
