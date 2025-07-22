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

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lost';
    } else if (computerMove === 'Paper') {
      result = 'You won';
    } else if (computerMove === 'Scissors') {
      result = 'Tie';
    }
  } 
  else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You lost';
    } else if (computerMove === 'Scissors') {
      result = 'You won';
    } 
  } 
  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You won';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else if (computerMove === 'Scissors') {
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
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  
  return computerMove;

  console.log('this will not run, due to early return');
  
}