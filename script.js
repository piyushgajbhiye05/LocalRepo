const choices = ['Rock', 'Paper', 'Scissors'];

const buttons = document.querySelectorAll('button');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id.charAt(0).toUpperCase() + button.id.slice(1);
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        userChoiceDisplay.textContent = `Your choice: ${userChoice}`;
        computerChoiceDisplay.textContent = `Computer's choice: ${computerChoice}`;
        
        determineWinner(userChoice, computerChoice);
    });
});

function determineWinner(user, computer) {
    if (user === computer) {
        winnerDisplay.textContent = "It's a draw!";
    } else if (
        (user === 'Rock' && computer === 'Scissors') ||
        (user === 'Scissors' && computer === 'Paper') ||
        (user === 'Paper' && computer === 'Rock')
    ) {
        winnerDisplay.textContent = "You win!";
    } else {
        winnerDisplay.textContent = "Computer wins!";
    }
}
