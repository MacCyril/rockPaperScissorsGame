
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
let totalScore = {playerScore:0 , computerScore:0}

function getComputerChoice(){
    // getting random choices fom the computer
    const rpsChoice = ['Rock', 'Paper', 'Scissors']
    const randomChoice = Math.floor(Math.random()*rpsChoice.length)
    return rpsChoice[randomChoice]
  
}
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

let score;
function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    if(playerChoice == computerChoice){
        score = 0
    }else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
        score = 1
    }else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score = 1
    }else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1
    }else{
        score = -1
    }

    return score;
}
function showResult(score, playerChoice,computerChoice){
     // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score');

  if(score == 1){
   resultDiv.innerText = 'you won'
  }else if(score == -1){
    resultDiv.innerText = 'you lost'
  }else{
    resultDiv.innerText = "it's a draw"
  }
  // Don't forget to grab the div with the 'result' id!
  

  //using template literals to show which is human and computer choice
 handsDiv.innerText = `🧑${playerChoice} VS 🤖${computerChoice}`
  playerScoreDiv.innerText = `your score: ${totalScore.playerScore}`

    }

    // ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
     console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
   const score = getResult(playerChoice, computerChoice)
   totalScore['playerScore'] += score
   console.log({score})
   showResult(score, playerChoice, computerChoice)

}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
   const rpsButtons = document.querySelectorAll('.rpsButton')
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
    rpsButtons.forEach(rpsButton =>{
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
    // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks

  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
}
// ** endGame function clears all the text on the DOM **
function endGame() {
    const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');

  playerScoreDiv.innerText = ''
   resultDiv.innerText = ''
   handsDiv.innerText = ''
}
playGame()  

//       game improvement ideas ------------------------

/// add animation to game effect asin when a player picks an object 
// and loses it should display a short clip and if player wins it should 
// display another short clip else another clip
