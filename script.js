const buttons = document.querySelectorAll('button');
const resultArea = document.querySelector('#results');
const scoreArea = document.querySelector('#scores');
const resetBtn = document.querySelector('#reset');
let playerScore = 0;
let computerScore = 0;
let reset = false;

/*computerPlay: uses Math.random to return a number from 0 to 2, 
0 being rock, 1 being paper, 2 being scissors */
function computerPlay() {
    const result = Math.floor(Math.random() * 3);

    if(result === 0){
        return 'Rock';
    }
    else if(result === 1){
        return 'Paper';
    }
    else if(result === 2){
        return 'Scissors';
    }
}

/*oneRound: takes the parameters, compares them, then returns a result
based on the winner */
function oneRound() {
    if(reset){
        resultArea.textContent = 'Please hit "Reset?" if you want to play again.';
        return;
    }
    let playerSelection = this.id;
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = computerPlay();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection === computerSelection){
        resultArea.textContent = 'It\'s a tie!';
    }
    else if(
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ){
        playerScore++;
        resultArea.textContent = 'You win this round!';
        scoreArea.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
    }
    else if(
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ){
        computerScore++;
        resultArea.textContent = 'Computer wins this round!'; 
        scoreArea.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
    }
    else{
        resultArea.textContent = 'Error.';
    }

    if(playerScore === 5 || computerScore === 5){
        if(playerScore === 5){
            resultArea.textContent = 'You\'ve won the game! Congratulations!';
        }
        else{
            resultArea.textContent = 'You\'ve lost the game. Better luck next time!';
        }
        reset = true;
    }
};

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    resultArea.textContent = 'Make your choice to start the game.';
    scoreArea.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
    reset = false;
};

buttons.forEach((button) => {
    button.addEventListener('click', oneRound);
});

resetBtn.addEventListener('click', resetGame);