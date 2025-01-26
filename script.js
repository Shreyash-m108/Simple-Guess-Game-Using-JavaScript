"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0

function displayMessage(message){
  document.querySelector(".message").textContent=message
}



document.querySelector(".check").addEventListener("click", function () {
  let num = Number(document.querySelector(".guess").value); //Giving a random number to guess between 1-20

  if (!num) {
    displayMessage("No Number ❌");//If number field is empty
  } 
  
  //Condition for player wins
  else if (num === secretNumber) {
    displayMessage("Yehh! Correct Number 💯");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('body').style
      .backgroundColor = "#60b347";
    document.querySelector(".number").style
      .backgroundColor = "#CBC3E3";
    document.querySelector(".number").style
    .width = '30rem'
    document.querySelector(".number").style
        .border = "4px solid #000000"

    if(score > highscore ){
        highscore = score
        document.querySelector(".highscore").textContent =score
      }
    }
    //Checking the other number guessings
    else if(num != secretNumber){
      if(score >1){
        displayMessage(num>secretNumber ? "Guess is High 🤷‍♂️" : "Guess is Low 🤏")
        score --
        document.querySelector(".score").textContent=score
      }
      else{
        displayMessage("You lost the game!👎")
        document.querySelector('body').style
          .backgroundColor = "#ff0000"
        document.querySelector(".score").textContent=0
      }
    }
});

//Code for AGAIN button
document.querySelector(".again").addEventListener(
  "click", function() {
    secretNumber = Math.trunc(Math.random()*20)+1
    score = 20

    displayMessage("Start Guessing...")
    
    document.querySelector(".score").textContent = 
    score

    document.querySelector(".guess").value = ""

    document.querySelector(".number").textContent= "?"
    
    document.querySelector("body").style
      .backgroundColor="#222"

    document.querySelector(".number").style
      .width= "15 rem"
    }
)


