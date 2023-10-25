let playerScore = 0;
let  computerScore = 0;
let playerSelection = '';




const rockBtn = document.querySelector('#rockBtn');

rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    //console.log(playerSelection);
    game();
});


function getComputerSelection(computerSelection)
{
    let computerNumChoice = Math.floor(Math.random() * 3);
    if (computerNumChoice == 0) 
    {
        computerSelection = 'rock';
    }
    else if (computerNumChoice == 1)
    {
        computerSelection = 'paper';
    } 
    else if (computerNumChoice == 2) 
    {
        computerSelection = 'scissors';
    } 
    return computerSelection;
}

function playRound(computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) 
    {
        // tie
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'rock')) 
    {
        playerScore++;
    }
    else 
    {
        computerScore++;
    }

}


function game()
{
    let computerSelection = '';
    
    computerSelection = getComputerSelection(computerSelection);
    
    playRound(computerSelection);
    console.log('player: ' + playerSelection);
    console.log('computer: ' + computerSelection);
    console.log('player: ' + playerScore);
    console.log('computer: ' + computerScore);
    
    if(playerScore == 5) {
        console.log('player won')
    } else if (computerScore == 5) {
        console.log('computer won');
    }
}

//console.log(game());