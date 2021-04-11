/*computerPlay: uses Math.random to return a number from 0 to 2, 
0 being rock, 1 being paper, 2 being scissors */
function computerPlay() {
    const result = Math.floor(Math.random() * 3);

    console.log(result);
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
function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    const computerWinMessage = `Computer wins! ${computerSelection} beats ${playerSelection}`;
    const playerWinMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    const tieMessage = 'It\'s a tie!';

    if(playerSelection === computerSelection){
        return tieMessage;
    }
    else if(
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ){
        return playerWinMessage;
    }
    else if(
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ){
        return computerWinMessage; 
    }
    else{
        return 'Please enter valid parameters.'
    }
}