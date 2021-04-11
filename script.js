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
function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if(playerSelection === computerSelection){
        return 'Tie';
    }
    else if(
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ){
        return 'Player Win';
    }
    else if(
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ){
        return 'Computer Win'; 
    }
    else{
        return 'Error.';
    }
}

/*game: keeps track of the score of computer and player, loops through a round each loop, 
asks for an input from player, uses computerPlay to get computer's input, logs pretty much everything about the game, 
at end of game calculates who the winner is.*/
function game(){
    let response;
    let computerResponse;
    let result;
    let computerScore = 0;
    let playerScore = 0;
    while(computerScore < 5 && playerScore < 5){
        response = prompt("Rock Paper or Scissors?");
        computerResponse = computerPlay();
        result = oneRound(response, computerResponse);
        if(result === 'Tie'){
            console.log('It\'s a tie!');
        }
        else if(result === 'Player Win'){
            ++playerScore;
            console.log(`You win! ${response} beats ${computerResponse}. You have ${playerScore} point(s).
                        Computer has ${computerScore} points.`);
        }
        else if(result === 'Computer Win'){
            ++computerScore;
            console.log(`You lose! ${computerResponse} beats ${response}. You have ${playerScore} point(s).
                        Computer has ${computerScore} points.`);
        }
        else{
            console.log('Please enter a valid response.');
        }
    }
    if(playerScore === 5){
        console.log('You won against the computer!!');
    }
    else if(computerScore === 5){
        console.log('The computer beat you!')
    }
}