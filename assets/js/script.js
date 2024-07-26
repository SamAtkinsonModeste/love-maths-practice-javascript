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



function runGame() {

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