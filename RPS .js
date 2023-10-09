//'Rock' 'Paper' and 'Scissors' have computer select one
function getComputerChoice() { 
     let num;
     let choice;
     num = Math.random();
     if (num <= 0.33) {
        choice = 'Rock';
     } if (num > 0.33 && num <=0.66) {
        choice = 'Paper';
     } else {
        choice = 'Scissors';
     }
return choice;
}

//prompt user to type 'Rock' 'Paper' or 'Scissors'
//make user input be case insensative
//create answers for each combination rock paper scissors
//return to user whether win lose or tie
//prompt user wheather to play again or not