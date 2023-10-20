function getComputerChoice(){
    let computerChoice = '';
    let computerNumChoice = Math.floor(Math.random() * 3);
    if (computerNumChoice == 0) {
        computerChoice = 'rock';
    }
    else if (computerNumChoice == 1){
        computerChoice = 'paper';
    } 
    else if (computerNumChoice == 2) {
        computerChoice = 'scissors';
    } 
    //console.log(computerNumChoice);
    return computerChoice;
}

function playRound(playerSelection, computerSelection){

}


function game(){

}

console.log(getComputerChoice());