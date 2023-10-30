//'Rock' 'Paper' and 'Scissors' have computer select one
function getComputerChoice() { 
     let num;
     let computerSelection;
     num = Math.random();
     if (num <= 0.33) {
        computerSelection = 'Rock';
     } if (num > 0.33 && num <=0.66) {
        computerSelection = 'Paper';
     } if (num > 0.66) {
        computerSelection = 'Scissors';
     }
return computerSelection;
}

//prompt user to type 'Rock' 'Paper' or 'Scissors'
let playerSelection = prompt("Rock, Paper, or Scissors?");
let computerSelection = getComputerChoice();

//create function with answers for each combination rock paper scissors and return to user whether win lose or tie
function playRound() {
      if (computerSelection == 'Rock') {
         if (playerSelection == 'Rock') {
            return 'Rock ties with Rock!';
         }
         if (playerSelection == 'Paper') {
            return 'Paper beats Rock! You Win!';
         }
         if (playerSelection == 'Scissors') {
            return 'Scissors looses to Rock! You Lose!';
         }
      }
      if (computerSelection == 'Paper') {
         if (playerSelection == 'Rock') {
            return 'Rock looses to Paper! You Lose!';
         }
         if (playerSelection == 'Paper') {
            return 'Paper ties with Paper! Try Again!';
         }
         if (playerSelection == 'Scissors') {
            return 'Scissors beats Paper! You Win!';
         }
      }
      if (computerSelection == 'Scissors') {
         if (playerSelection == 'Rock') {
            return 'Rock beats Scissors! You Win!';
         }
         if (playerSelection == 'Paper') {
            return 'Paper looses to Scissors! You Lose!';
         }
         if (playerSelection == 'Scissors') {
            return 'Scissors ties with Scissors! Try Again!';
         }
      }
      else {
         return 'That was not an option given! Try again';
      }
}

function game() {
   let playerSelection = prompt("Rock, Paper, or Scissors?");
   let computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
   console.log(playRound(playerSelection, computerSelection));

   playerSelection = prompt("Rock, Paper, or Scissors?");
   computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection)
   console.log(playRound(playerSelection, computerSelection));

   playerSelection = prompt("Rock, Paper, or Scissors?");
   computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
   console.log(playRound(playerSelection, computerSelection));

   playerSelection = prompt("Rock, Paper, or Scissors?");
   computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
   console.log(playRound(playerSelection, computerSelection));

   playerSelection = prompt("Rock, Paper, or Scissors?");
   computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
   console.log(playRound(playerSelection, computerSelection));
}

game();
//make user input be case insensative
//prompt user wheather to play again or not