/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const totalScore = {computerScore: 0, playerScore: 0 }

// getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}


function getResult(playerChoice, computerChoice) {
  let score = 0

  // All situations where human draws.
  if (playerChoice === computerChoice) {
    score = 0
  
  // All situations where human wins
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1

  // human loses
  } else {
    score = -1
  }
  
  // score
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score.
function showResult(score, playerChoice, computerChoice) {

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  if (score == -1) {
    resultDiv.innerText = 'You lose!'
  } else if (score == 0) {
    resultDiv.innerText = "It's a Draw!"
  } else {
    resultDiv.innerText = 'You win!'
  }

  handsDiv.innerText = `🧔🏻‍♂️ ${playerChoice} vs 🤖 ${computerChoice}`
  playerScoreDiv.innerText = `Your score: ${totalScore['playerScore']}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  showResult(score, playerChoice, computerChoice)
}


function playGame() {
  // querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons[0].onclick = () => console.log(rpsButton[0].value)

  // * onclick event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
 
  // onclick event listener to the end game button that runs the endGame() function on click
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  
  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()