const getComputerChoice = () => {
	const choices = ["rock", "paper", "scissor"];

	return(choices[Math.floor(Math.random() * 3)])
}

const playRound = (playerSelection, computerSelection) => {
	if(playerSelection === computerSelection) {
		return "It's a tie"
	}
	if (playerSelection === "rock" && computerSelection === "scissors"
		|| playerSelection === "scissors" && computerSelection === "paper"
		|| playerSelection === "paper" && computerSelection === "rock" ) {
			return `You WIN! ${playerSelection} beats ${computerSelection} !`;
	} else {
		return `You Lose! ${playerSelection} beats ${computerSelection} !`;
	}
}

const game = () => {
	for (i = 0; i < 5; i++) {
		console.log(playRound(prompt("What is your choice?\n Rock-Paper-Scissor").toLowerCase(), getComputerChoice()));
	}
}
