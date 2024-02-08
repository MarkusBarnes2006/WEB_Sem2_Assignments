function takeSquareroot(){
    let number = +document.getElementById("input1").value;
    
    
    let Squareroot = Math.sqrt(number);
    document.getElementById("result").innerHTML = Squareroot;
}

function takePower(){
    let number1 = +document.getElementById("input1").value;
    let number2 = +document.getElementById("input2").value;

    let Power = Math.pow(number1, number2);
    document.getElementById("result").innerHTML = Power;
}
function takeCubeRoot(){
    let number = +document.getElementById("input1").value;
    
    
    let CubeRoot = Math.cbrt(number);
    document.getElementById("result").innerHTML = CubeRoot;
}
function takeExponent(){
    let number = +document.getElementById("input1").value;
    
    
    let Exponent = Math.exp(number);
    document.getElementById("result").innerHTML = Exponent;
}

