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
let playerSelection;
let computerSelection;

//create function with answers for each combination rock paper scissors and return to user whether win lose or tie
function playRound(playerSelection, computerSelection) {
      if (computerSelection.toLowerCase() == 'rock') {
         if (playerSelection.toLowerCase() == 'rock') {
            return 'Rock ties with Rock!';
         }
         if (playerSelection.toLowerCase() == 'paper') {
            return 'Paper beats Rock! You Win!';
         }
         if (playerSelection.toLowerCase() == 'scissors') {
            return 'Scissors looses to Rock! You Lose!';
         }
      }
      if (computerSelection.toLowerCase() == 'paper') {
         if (playerSelection.toLowerCase() == 'rock') {
            return 'Rock looses to Paper! You Lose!';
         }
         if (playerSelection.toLowerCase() == 'paper') {
            return 'Paper ties with Paper! Try Again!';
         }
         if (playerSelection.toLowerCase() == 'scissors') {
            return 'Scissors beats Paper! You Win!';
         }
      }
      if (computerSelection.toLowerCase() == 'scissors') {
         if (playerSelection.toLowerCase() == 'rock') {
            return 'Rock beats Scissors! You Win!';
         }
         if (playerSelection.toLowerCase() == 'paper') {
            return 'Paper looses to Scissors! You Lose!';
         }
         if (playerSelection.toLowerCase() == 'scissors') {
            return 'Scissors ties with Scissors! Try Again!';
         }
      }
      else {
         return 'That was not an option given! Try again';
      }
}

function game() {
   playerSelection = prompt("Rock, Paper, or Scissors?");
   computerSelection = getComputerChoice();
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