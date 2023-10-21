let playerScore = 0;
let  computerScore = 0;


function getComputerChoice(computerChoice)
{
    let computerNumChoice = Math.floor(Math.random() * 3);
    if (computerNumChoice == 0) 
    {
        computerChoice = 'rock';
    }
    else if (computerNumChoice == 1)
    {
        computerChoice = 'paper';
    } 
    else if (computerNumChoice == 2) 
    {
        computerChoice = 'scissors';
    } 
    return computerChoice;
}

function playRound(playerSelection, computerSelection)
{
    //let playerChoice = prompt("rock, paper, scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) 
    {
        return 'Tie';
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'rock')) 
    {
        playerScore++;
        return 'player won';
    }
    else 
    {
        computerScore++;
        return 'Computer won, you lose.'
    }

}


function game()
{
let playerSelection = '';
let computerSelection = '';

for(let i = 0; i < 5; i++) 
{
    playerSelection = prompt('Rock, Paper, Scissors?');
    computerSelection = getComputerChoice(computerSelection);
    console.log('player: ' + playerSelection);
    console.log('computer: ' + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    
}
}

console.log(game());
console.log('player: ' + playerScore);
console.log('computer: ' + computerScore);