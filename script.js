
let randNumber = Math.trunc(Math.random() * 50) + 1;
let score = 5;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(" No number!");
  } else if (guess === randNumber) {
    displayMessage("Hurray! You got the correct Number");
    document.querySelector(".number").textContent = randNumber;
    document.querySelector(".grid-container").style.backgroundColor = "#662283";
    document.querySelector(".number").style.backgroundColor = "#16E608";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== randNumber) {
    if (score > 1) {
      displayMessage(guess > randNumber ? '  Too High, Try Lower Number' : '  Too Low, Try Higher Number');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('  You Lost the GAME');
      document.querySelector('.score').textContent = 0;
    }
  }
})

// Event listener for again button
document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  randNumber = Math.trunc(Math.random() * 50) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "??????";
  document.querySelector(".guess").value = "";
  document.querySelector(".grid-container").style.backgroundColor = "#0C5F66";
  document.querySelector(".number").style.backgroundColor = "#A46B6E";
});