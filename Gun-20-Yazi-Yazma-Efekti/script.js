const yazilar = ["Frontend Geliştirici", "Tasarımcı", "Zeynep Nur"];
let index = 0;
let charIndex = 0;
let silmeModu = false;
const textElement = document.getElementById("text");

function yazYaz() {
  const kelime = yazilar[index];
  if (silmeModu) {
    charIndex--;
    textElement.textContent = kelime.substring(0, charIndex);
    if (charIndex === 0) {
      silmeModu = false;
      index = (index + 1) % yazilar.length;
    }
  } else {
    charIndex++;
    textElement.textContent = kelime.substring(0, charIndex);
    if (charIndex === kelime.length) {
      silmeModu = true;
      setTimeout(yazYaz, 1000);
      return;
    }
  }
  setTimeout(yazYaz, 100);
}

yazYaz();
