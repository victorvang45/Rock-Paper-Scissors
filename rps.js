let playerScore = 0;
let  computerScore = 0;
let playerSelection = '';
let computerSelection = '';


const result = document.querySelector('#result');
const player = document.querySelector('#playerScore');
player.textContent = 'Player: ' + playerScore;

const computer = document.querySelector('#computerScore');
computer.textContent = 'Computer: ' + computerScore;

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');


rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
});

paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
});

scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
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
    if (playerSelection == computerSelection) 
    {
        result.textContent = 'It\'s a tie. You both chose ' + playerSelection + '!';
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) 
    {
        playerScore++;
        result.textContent = 'You won! You chose ' + playerSelection + ' and the computer chose ' + computerSelection + '!';
    }
    else 
    {
        computerScore++;
        result.textContent = 'You lost! You chose ' + playerSelection + ' and the computer chose ' + computerSelection + '!';
    }

}


function game()
{
    computerSelection = getComputerSelection(computerSelection);
    
    playRound(computerSelection);
    player.textContent = 'Player: ' + playerScore;
    computer.textContent = 'Computer: ' + computerScore;
    
    if(playerScore == 5) {
        result.textContent = 'You beat the computer! Congrats!!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        result.textContent = 'You lost! Better luck next time!';
        playerScore = 0;
        computerScore = 0;
    }
}