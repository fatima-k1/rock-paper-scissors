const start = document.querySelector('.start');
const game = document.querySelector('.game');
const startBtn = document.querySelector('.btn');
startBtn.addEventListener('click', () => {
  start.classList.add('hidden');
  game.classList.remove('hidden');
});


//Get computer's choice
const choice = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)]
}

//Provide the player with a way to choose between rock, paper or scissors
const rockBtn = document.getElementsByClassName('btns')[0];
const paperBtn = document.getElementsByClassName('btns')[1];
const scissorsBtn = document.getElementsByClassName('btns')[2];

rockBtn.addEventListener('click', () => playRound('rock', computerSelection));
paperBtn.addEventListener('click', () => playRound('paper', computerSelection));
scissorsBtn.addEventListener('click', () => playRound('scissors', computerSelection));

//record the round number the player is on. Start it on 1
let round = 1;
document.querySelector('.round').textContent = `Round ${round}`;

//record scores
let playerScore = 0;
let computerScore = 0;

//Game:if the player or the computer won or it's a draw:
  //1. Display "Win","Lose" and "Draw" respectively
  //2. Let the player choose again and return one of the 3 again
  //3. Increment the round number by 1
  //4. let player see previous choices
const result = document.querySelector('.result');
const choices = document.querySelector('.choices');
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (round === 1) {
    choices.textContent = 'Previous choices: ';
  }
  choices.textContent += `${playerSelection} `
  if ((playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {
        result.textContent = `You lost! Death chose ${computerSelection}`;
        computerScore++;
      } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result.textContent = `You won! Death chose ${computerSelection}`;
        playerScore++;
      } else if (round === 5) {
        setGameOver();
      } else {
        result.textContent = `Draw! You and death both chose ${computerSelection}`;
      }

      round++;
      document.querySelector('.round').textContent = `Round ${round}`;
}

//display message after game over
function setGameOver() {
  toggle();
  if (playerScore > computerScore) {
    displayMessage('Congrats! You defeated death!', 'win')
  } else if (playerScore < computerScore) {
    displayMessage('Oh no! You died!', 'lose')
  } else {
    displayMessage("It's a tie!")
  }
}

function toggle() {
  const blur = document.getElementById('blur');
  blur.classList.toggle('active');
}

function displayMessage(msgText, msgType) {

  const panel = document.createElement('div');
  panel.classList.add('msgBox');
  game.appendChild(panel);

  const msg = document.createElement('p');
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement('div');
  closeBtn.textContent = 'Play Again';
  closeBtn.classList.add('btn');
  panel.appendChild(closeBtn);

  closeBtn.addEventListener('click', resetGame);

  if (msgType === 'win') {
    msg.style.backgroundImage = '';
  } else if (msgType === 'lose') {
    msg.style.backgroundImage = ''
  } else {
    msg.style.paddingLeft = '20px';
  }
}

//When game restarts, make sure everything resets and start from step 1
function resetGame() {
  toggle();

  panel.parentNode.removeChild(panel);

  round = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  getComputerChoice();
}
