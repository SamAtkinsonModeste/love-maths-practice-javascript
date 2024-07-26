/*
To cut down on Global variables 
we just created all the functions.
 */

//STEPS: 1.Event listener on the document to do below
//Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
  console.log(buttons);
    for(let button of buttons){
      button.addEventListener('click', function(){
          if(this.getAttribute('data-type') === "submit") {
            alert("You clicked Submit!");
          } else {
            let gameType = this.getAttribute('data-type');
            alert(`You clicked ${gameType}`);
          }
      });
    }
});

/**
 * WE ARE USING A DOCSTRINGS USED TO DESCRIBE FUNCTIONS
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame() {
    //STEPS:Create two random numbers between 1 and 25
    //NOTE: The reason why we add the plus one is so we do not get zero as a number
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}
function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}