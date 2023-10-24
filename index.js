//
let cards = []
let sum = 0
//variables connecting html text
let instructionsEl = document.getElementById("instructions")
let cardsEl = document.getElementById("cartas")
let sumaEl = document.getElementById("suma")
let computerEl = document.getElementById("computer")
//Booleans
let isAlive = false 

// functional functions

function randomNum(){
    let random = Math.floor( Math.random() * 13 + 1)
    if (random === 1){
        return 11
    } else if ( random < 11){
        return random
    } else {
        return 10
    }
}

function text(){
    if (sum<22 ){
        instructionsEl.textContent = "Agarra otra carta! Si ya tienes suficientes apreta el boton ´listo´"
    } else if (sum === 21){
        instructionsEl.textContent = "Felicidades! tenes blackjack. Si queres chequear que hubiera tenido la maquina, apreta listo"
    } else {
        instructionsEl.textContent = "Te pasaste... empieza una nueva ronda!"
        isAlive = false
    }
}

//buttons functions 

function startGame() {
    isAlive = true
    let firstCard = randomNum()
    let secondCard = randomNum()
   cards.push(firstCard, secondCard)
   cardsEl.textContent = "Cartas: " + cards[0] + " - " + cards[1]
    sum = cards[0] + cards[1]
    sumaEl.textContent = "Suman: " + sum
    text()
}
function newCard() {
    if ( isAlive === true ){
        let addedCard = randomNum()
        cards.push(addedCard)
        sum += addedCard
        cardsEl.textContent += " - " + addedCard
        sumaEl.textContent = "Suman: " + sum
        text()
    }
}


function ready() {
    if ( isAlive === true){
        let computerCards = Math.floor( Math.random() * 8 + 16)
        if (computerCards < 21 && computerCards < sum){
            alert("you won!");
        } else if(computerCards <= 21 && computerCards > sum) {
        alert("you lost!");
        }else if (computerCards === sum){
            alert("thats a tie!")
        } else{
            alert("you won")
        }
        isAlive = false 
        computerEl.textContent = "Computer had: " + computerCards
    }
 }