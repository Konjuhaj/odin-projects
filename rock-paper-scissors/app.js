const getComputerChoice = () => {
	const choices = ["rock", "paper", "scissors"];

	return(choices[Math.floor(Math.random() * 3)])
}

const incrementScore = (player, text) => {
	const score = document.querySelector(`#${player}`);
	score.innerText = Number(score.innerText) + 1;

	const header = document.querySelector('#winner');
	header.innerText = text;
	if (Number(score.innerText) > 4) {
		header.innerText = `${player} has won the game!`;

	}
}

const playRound = (playerSelection, computerSelection) => {
	if(playerSelection === computerSelection) {
		return "It's a tie"
	}
	if (playerSelection === "rock" && computerSelection === "scissors"
		|| playerSelection === "scissors" && computerSelection === "paper"
		|| playerSelection === "paper" && computerSelection === "rock" ) {
			incrementScore('human', `You WIN! ${playerSelection} beats ${computerSelection} !`);
			return ;
	} else {
		incrementScore('computer', `You Lose! ${playerSelection} loses to ${computerSelection} !`);
		return ;
	}
}


const choices = document.querySelectorAll('.item');

choices.forEach((choice) => {
	choice.addEventListener('click', () => {
		playRound(choice.querySelector('h1').innerText.toLowerCase(), getComputerChoice());
	})
})
