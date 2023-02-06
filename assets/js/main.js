//* ====== VARIABLES ======
//*start page
const intro = document.querySelector(".rounds");

//* inputs returning amount of rounds
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twenty = document.getElementById("twenty");

//* array of selection
let roundSelection = [five, ten, fifteen, twenty];

//* output rounds
const outputRounds = document.querySelector(".totalRounds");
const currentRound = document.querySelector(".currentRound");

//* output of wins for each player
const user = document.querySelector(".user");
const pc = document.querySelector(".pc");

//* show choice of pc
const pcChoiceOutput = document.querySelector(".pcChoice");

//* show choice of user
const userChoiceOutput = document.querySelector(".userChoice");

//* show message on who wins
const message = document.querySelector(".winner");

//* choices between rock, paper, scissors
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

//* array of choices
let userChoices = [rock, paper, scissor];

//* start button
const start = document.querySelector(".start");

//* restart button
const restart = document.querySelector(".restart");

//* show a pop with result
const popUp = document.querySelector(".popUp");
const playAgain = document.querySelector(".popUp button");
const playAgainText = document.querySelector(".popUp h2");

let pcChoice;
let rounds = 1;
let totalRounds;

let pcScore = 0;
let userScore = 0;

//* ====== FUNCTIONS ======

//* starting the game
start.addEventListener("click", chooseRounds);

//* restart the game
restart.addEventListener("click", () => {
	intro.classList.remove("hidden");
	location.reload();
});

//* play again
playAgain.addEventListener("click", () => {
	popUp.classList.add("hidden");
	location.reload();
});

//* choosing amount of rounds
function chooseRounds() {
	roundSelection.forEach((e) => {
		if (e.checked) {
			totalRounds = e.value;
			outputRounds.innerHTML = e.value;
			intro.classList.add("hidden");
		}
	});
}

//*
userChoices.map((choice) => {
	choice.addEventListener("click", function () {
		currentRound.innerHTML = rounds;
		if (rounds < totalRounds) {
			rounds++;
			play();
			userChoiceOutput.innerHTML = `<img src="./assets/img/${choice.value}.svg" width="100px" alt="rock" />`;
		} else {
			popUp.classList.remove("hidden");
			if (pcScore < userScore) {
				popUp.classList.add("won");
				playAgainText.innerHTML = "YOU WON";
			} else if (pcScore > userScore) {
				popUp.classList.remove("won");
			} else {
				popUp.classList.add("tie");
				playAgainText.innerHTML = "IT'S A DRAW";
			}
		}
	});
});

//* compare user choice with pc choice
function play() {
	pcChoose();
	let result;
	if (rock.checked) {
		if (pcChoice === "paper") {
			result = "YOU LOSE";
			pcScore++;
			pc.innerHTML;
		} else if (pcChoice === "scissor") {
			result = " YOU WIN";
			userScore++;
		} else {
			result = "DRAW";
		}
	} else if (paper.checked) {
		if (pcChoice === "rock") {
			result = "YOU WIN";
			userScore++;
		} else if (pcChoice === "scissor") {
			result = "YOU LOSE";
			pcScore++;
		} else {
			result = "DRAW";
		}
	} else if (scissor.checked) {
		if (pcChoice === "paper") {
			result = "YOU WIN";
			userScore++;
		} else if (pcChoice === "rock") {
			result = "YOU LOSE";
			pcScore++;
		} else {
			result = "DRAW";
		}
	}

	if (result == "YOU WIN") {
		message.classList.add("won");
	} else if (result == "DRAW") {
		message.classList.add("tie");
	} else {
		message.classList.remove("won", "tie");
	}

	message.innerHTML = result;
	pc.innerHTML = pcScore;
	user.innerHTML = userScore;
}
//* random pc choice
function pcChoose() {
	pcChoice = Math.random();
	if (pcChoice < 0.34) {
		pcChoice = "rock";
	} else if (pcChoice < 0.67) {
		pcChoice = "paper";
	} else {
		pcChoice = "scissor";
	}
	pcChoiceOutput.innerHTML = `<img src="./assets/img/${pcChoice}.svg" width="100px" alt="rock" />`;
}
