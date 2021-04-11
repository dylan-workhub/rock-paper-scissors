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

function oneRound() {
    
}