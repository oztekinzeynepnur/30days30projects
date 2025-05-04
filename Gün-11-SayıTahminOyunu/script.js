let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const attemptsSpan = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');

function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Lütfen 1 ile 100 arasında bir sayı gir!";
    return;
  }

  attempts--;
  attemptsSpan.textContent = attempts;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Tebrikler! Doğru tahmin: ${randomNumber}`;
    endGame();
  } else if (attempts === 0) {
    message.textContent = `😢 Hakkın bitti! Doğru sayı: ${randomNumber}`;
    endGame();
  } else if (userGuess < randomNumber) {
    message.textContent = "Yukarı çık!";
  } else {
    message.textContent = "Aşağı in!";
  }

  guessInput.value = "";
}

function endGame() {
  guessInput.disabled = true;
  restartBtn.style.display = 'inline-block';
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  guessInput.disabled = false;
  attemptsSpan.textContent = attempts;
  message.textContent = "";
  guessInput.value = "";
  restartBtn.style.display = 'none';
}
