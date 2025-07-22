let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/* Same thing as above but with long process
  if (score === null) {
    Wins: 0;
    Losses: 0;
    Ties: 0;
  } 
*/


function playGame (playerMove) {
  computerMove = pickComputerMove();

  result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lost';
    } else if (computerMove === 'paper') {
      result = 'You won';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  } 
  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lost';
    } else if (computerMove === 'scissors') {
      result = 'You won';
    } 
  } 
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You won';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lost';
    }
  }

  if (result === 'You won') {
    score.wins += 1;
  } 
  else if (result === 'You lost') {
    score.losses += 1;
  }
  else if (result === 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;
}

function updateScoreElement () {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove () {
  randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  
  return computerMove;
}
