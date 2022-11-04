//Record the round number the player is on. Start it on 1
//Provide the player with a way to choose between rock, paper or scissors
//The player will play against the computer so return either rock,paper or scissors
//Once a round ends, record it somewhere so the player can see the results of the previous rounds
//Next, check who won that round and record the score
//If the player or the computer won or it's a draw:
  //1. Display "Win","Lose" and "Draw" respectively
  //2. Let the player choose again and return one of the 3 again
  //3. Increment the round number by 1
//If the player's score is more than the computer's:
  //1. Display congratulations message
  //2. Stop the player from being able to choose again
  //3. Display control allowing the player to restart the game
//If the computer's score is more than the player's, tell the player they lost and repeat steps 2 and 3 above
//If the scores are the same, tell the player it's a tie and repeat steps 2 and 3
//When game restarts, make sure everything resets and start from step 1
//Provide instructions on how to play

const choice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)]
}

function round(playerSelection, computerSelection) {
  if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper')
      || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors')
      || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
        alert ('You lose!');
        computerScore++;
      } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors')
      || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')
      || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
        alert('You win!');
        playerScore++;
      } else {
        alert('Draw!');
      }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose rock, paper or scissors');
    const computerSelection = getComputerChoice();
    round(playerSelection, computerSelection);
  }
  result();
}

function result() {
  if (playerScore > computerScore) {
    alert('Congratulations! You win!')
  } else if (playerScore < computerScore) {
    alert('You lost! Better luck next time!')
  } else {
    alert("It's a tie!")
  }
}

game();
