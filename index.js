const start = document.querySelector('.start');
const game = document.querySelector('.game');
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', () => {
  start.classList.add('hidden');
  game.classList.remove('hidden');
});


//Get computer's choice
const choice = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

//Provide the player with a way to choose between rock, paper or scissors
const rockBtn = document.getElementsByClassName('btns')[0];
const paperBtn = document.getElementsByClassName('btns')[1];
const scissorsBtn = document.getElementsByClassName('btns')[2];

rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));

//record scores
const player = document.getElementById('player');
const computer = document.getElementById('computer');
let playerLife = 5;
let computerLife = 5;

player.textContent = `${playerLife}`;
computer.textContent = `${computerLife}`;

//Game:if the player or the computer won or it's a draw:
  //1. Display "Win","Lose" and "Draw" respectively
  //2. Let the player choose again and return one of the 3 again
  //3. Increment the round number by 1
  //4. let player see previous choices
const result = document.querySelector('.result');
const choices = document.querySelector('.choices');

function playRound(playerSelection, computerSelection) {
  if (playerLife === 5 && computerLife === 5) {
    choices.textContent = 'Previous choices: ';
  }
  choices.textContent += `${playerSelection} `;
  if ((playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {
        result.textContent = `You lost! Death chose ${computerSelection}`;
        playerLife--;
      } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result.textContent = `You won! Death chose ${computerSelection}`;
        computerLife--;
      } else {
        result.textContent = `Draw! You and death both chose ${computerSelection}`;
      }

      player.textContent = `${playerLife}`;
      computer.textContent = `${computerLife}`;

      if (gameOver()) {
        openMsgBox();
        displayMessage();
      }
}

//display message when game is over
function gameOver() {
  return playerLife === 0 || computerLife === 0;
}

const msgBox = document.querySelector('.msgBox');
const msg = document.querySelector('.msg');
const blur = document.getElementById('blur');

function openMsgBox() {
  msgBox.classList.add('active');
  blur.classList.add('active');
}

function displayMessage() {
  if (playerLife > computerLife) {
    msg.textContent = 'Congrats! You defeated death!';
    msg.style.backgroundImage = 'url(images/winner.png)';
  } else {
    msg.textContent = 'Oh no! You died!';
    msg.style.backgroundImage = 'url(images/skull.png)';
}
}

//When game restarts, make sure everything resets and start from step 1
const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', resetGame);

function resetGame() {
  msgBox.classList.remove('active');
  blur.classList.remove('active');

  playerLife = 5;
  computerLife = 5;
  player.textContent = `${playerLife}`;
  computer.textContent = `${computerLife}`;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }
}
