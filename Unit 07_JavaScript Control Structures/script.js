function Roll(){
    var diceElement = document.getElementById("dice");
    diceElement.src = "images/dice1.jpg";
    let random = Math.random() * 6 + 1;
    random = Math.trunc(random);
    console.log(random)

    if(random === 1){
        diceElement.src = "image/dice1.jpg"
    } else if(random === 2){
        diceElement.src = "image/dice2.jpg"
    } else if(random === 3){
        diceElement.src = "image/dice3.jpg"
    } else if(random === 4){
        diceElement.src = "image/dice4.jpg"
    } else if(random === 5){
        diceElement.src = "image/dice5.jpg"
    }else if(random === 6){
        diceElement.src = "image/dice6.jpg"
    }


}