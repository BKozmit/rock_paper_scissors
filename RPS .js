//'Rock' 'Paper' and 'Scissors' have computer select one
function getComputerChoice() { 
     let num;
     let computerSelection;
     num = Math.random();
     if (num <= 0.33) {
        computerSelection = 'Rock';
     } if (num > 0.33 && num <=0.66) {
        computerSelection = 'Paper';
     } else {
        computerSelection = 'Scissors';
     }
return computerSelection;
}

function playRound() {
      let playerSelection = prompt('Rock, Paper, or Scissors?')
      if (computerSelection = 'Rock') {
         if (playerSelection = 'Rock') {
            print('Rock ties with Rock!');
         }
         if (playerSelection = 'Paper') {
            print('Paper beats Rock! You Win!');
         }
         if (playerSelection = 'Scissors') {
            print('Scissors looses to Rock! You Lose!');
         }
      }
      if (computerSelection = 'Paper') {
         if (playerSelection = 'Rock') {
            print('Rock looses to Paper! You Lose!');
         }
         if (playerSelection = 'Paper') {
            print('Paper ties with Paper! Try Again!');
         }
         if (playerSelection = 'Scissors') {
            print('Scissors beats Paper! You Win!');
         }
      }
      if (computerSelection = 'Scissors') {
         if (playerSelection = 'Rock') {
            print('Rock beats Scissors! You Win!');
         }
         if (playerSelection = 'Paper') {
            print ('Paper looses to Scissors! You Lose!')
         }
         if (playerSelection = 'Scissors') {
            print('Scissors ties with Scissors! Try Again!')
         }
      }
      else {
         print('That was not an option given! Try again');
      }
}
//prompt user to type 'Rock' 'Paper' or 'Scissors'
//make user input be case insensative
//create answers for each combination rock paper scissors
//return to user whether win lose or tie
//prompt user wheather to play again or not