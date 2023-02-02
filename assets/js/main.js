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
// const outputRounds = document.querySelector(".outputRounds");
const outputRounds = document.querySelector(".total-rounds");
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
let userChoices = [rock, paper, scissor];

//* start button
const start = document.querySelector(".start");

//* restart button
const restart = document.querySelector(".restart-button");

//* played game shown

let pcChoice;
let rounds = 1;
let totalRounds;

let pcScore = 0;
let userScore = 0;
//* ====== FUNCTIONS ======

start.addEventListener("click", () => intro.classList.add("hidden"));

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

userChoices.map((choice) => {
	choice.addEventListener("click", function () {
		userChoiceOutput.innerHTML = `<img src="./assets/img/${choice.value}.svg" width="100px" alt="rock" />`;
		play();
		roundSelection.forEach((e) => {
			if (e.checked) {
				totalRounds = e.value;
				outputRounds.innerHTML = e.value;
			}
		});
		currentRound.innerHTML = rounds;
		if (rounds < totalRounds) {
			rounds++;
		} else {
			rounds = 0;
			pcScore = 0;
			userScore = 0;
		}
	});
});

function play() {
	pcChoose();
	if (rock.checked) {
		if (pcChoice === "paper") {
			message.innerHTML = "PC WINS";
			pcScore++;
			pc.innerHTML;
		} else if (pcChoice === "scissor") {
			message.innerHTML = " YOU WIN";
			userScore++;
		} else {
			message.innerHTML = "DRAW";
		}
	} else if (paper.checked) {
		if (pcChoice === "rock") {
			message.innerHTML = "YOU WIN";
			userScore++;
		} else if (pcChoice === "scissor") {
			message.innerHTML = "PC WINS";
			pcScore++;
		} else {
			message.innerHTML = "DRAW";
		}
	} else if (scissor.checked) {
		if (pcChoice === "paper") {
			message.innerHTML = "YOU WIN";
			userScore++;
		} else if (pcChoice === "rock") {
			message.innerHTML = "PC WINS";
			pcScore++;
		} else {
			message.innerHTML = "DRAW";
		}
	}
	pc.innerHTML = pcScore;
	user.innerHTML = userScore;
}

restart.addEventListener("click", restartGame);

function restartGame() {
	intro.classList.remove("hidden");
	rounds = 0;
	pcScore = 0;
	userScore = 0;
}
