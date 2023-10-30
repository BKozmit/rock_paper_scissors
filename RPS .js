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
            return 'Rock ties with Rock! You Tied';
         }
         if (playerSelection.toLowerCase() == 'paper') {
            return 'Paper beats Rock! You Win!!';
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
            return 'Paper ties with Paper! You Tied!';
         }
         if (playerSelection.toLowerCase() == 'scissors') {
            return 'Scissors beats Paper! You Win!!';
         }
      }
      if (computerSelection.toLowerCase() == 'scissors') {
         if (playerSelection.toLowerCase() == 'rock') {
            return 'Rock beats Scissors! You Win!!';
         }
         if (playerSelection.toLowerCase() == 'paper') {
            return 'Paper looses to Scissors! You Lose!';
         }
         if (playerSelection.toLowerCase() == 'scissors') {
            return 'Scissors ties with Scissors! You Tied!';
         }
      }
      else {
         return 'That was not an option given! Try again';
      }
}

function scoreTracker() {
   if (outcome == 'You Win!!') {
      return 1;
   } if (outcome == 'You Tied!') {
      return 0;
   } if (outcome == 'You Lose!') {
      return -1;
   }
}

function game() {
   let score = 0;
   playerSelection = prompt("Round 1: Rock, Paper, or Scissors?");
   computerSelection = getComputerChoice();
   let gameOutcome = playRound(playerSelection, computerSelection);
   console.log(playRound(playerSelection, computerSelection));
   

   playerSelection = prompt("Round 2: Rock, Paper, or cissors?");
   computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection)
   console.log(playRound(playerSelection, computerSelection));

   playerSelection = prompt("Round 3: Rock, Paper, or Scissors?");
   computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
   console.log(playRound(playerSelection, computerSelection));

   playerSelection = prompt("Round 4: Rock, Paper, or Scissors?");
   computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
   console.log(playRound(playerSelection, computerSelection));

   playerSelection = prompt("Round 5: Rock, Paper, or Scissors?");
   computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
   console.log(playRound(playerSelection, computerSelection));
}

game();