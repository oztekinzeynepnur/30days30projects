let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 7;

const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

function checkGuess() {
  const guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Lütfen 1-100 arasında bir sayı gir.";
    return;
  }

  attempts--;
  attemptsDisplay.textContent = attempts;

  if (guess === randomNumber) {
    message.textContent = `🎉 Tebrikler! Doğru sayı: ${randomNumber}`;
    endGame();
  } else if (attempts === 0) {
    message.textContent = `😢 Kaybettin! Doğru sayı: ${randomNumber}`;
    endGame();
  } else if (guess < randomNumber) {
    message.textContent = "⬆️ Daha büyük bir sayı gir.";
  } else {
    message.textContent = "⬇️ Daha küçük bir sayı gir.";
  }

  guessInput.value = "";
}

function endGame() {
  guessInput.disabled = true;
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 7;
  attemptsDisplay.textContent = attempts;
  message.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  restartBtn.style.display = "none";
}
