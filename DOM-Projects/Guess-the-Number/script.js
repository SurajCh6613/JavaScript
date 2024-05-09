let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#guessSubmit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // To validate guess number for example number should be in range 1 - 100
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter number more than or eqaul to 1");
  } else if (guess > 100) {
    alert("Please enter number less than or eqaul to 100");
  } else {
    previousGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //To check guess
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Numner in too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Numner in too High`);
  }
}

function displayGuess(guess) {
  // To display Guess
  userInput.value = ""; //Clean the message
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // To display message
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // To end the game
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // Start New Game
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
randomNumber = parseInt(Math.random() * 100 + 1);
previousGuess = []
numGuess = 1
guessSlot.innerHTML = ''
remaining.innerHTML = `${11 - numGuess}`;
userInput.removeAttribute('disabled')
startOver.removeChild(p)

    playGame = true;
  })
}
