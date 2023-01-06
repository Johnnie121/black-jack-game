let messageEl= document.getElementById("messageel")
console.log(messageEl)
let sume=document.querySelector("#sum")
let cards=document.getElementById("cards")


let sumt = 0
let cardel= []
let hasBlackJack= false
let isAlive= false
let message= ""

function startGame() {
    isAlive= true
    let firstCard= getRandomCard()
let lastCard= getRandomCard()

 sumt = firstCard + lastCard
 cardel= [firstCard, lastCard]
    renderGame()
}
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) +1
    if (randomNumber > 10) { return 10  
    }
    else if (randomNumber=== 1) { return 11
        
    } else { return randomNumber
        
    }
}

function renderGame() { 

    cards.textContent = "Cards: " 
    for( i = 0; i < cardel.length; i++) {
    cards.textContent += cardel[i] + " "}
sume.textContent ="Sum:" + sumt
if(sumt < 30){ 
    message= "do you want to draw another card"
}
else if(sumt === 30){
    message="wohoo!!!, you've got blackedjacked"
    hasBlackJack= true
}
else{message="you're out of the game" 
isAlive= false}
console.log(isAlive)

messageEl.textContent= message
 

} 

function newGame() {
    if
 ( isAlive=== true && hasBlackJack=== false ){ 
        let car= getRandomCard()
        sumt += car 
        cardel.push(car) }
    renderGame()  
        
}

