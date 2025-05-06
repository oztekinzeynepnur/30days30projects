const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const letterCount = document.getElementById("letterCount");

textInput.addEventListener("input", () => {
  const text = textInput.value;
  charCount.textContent = text.length;

  const letters = text.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ]/gi, "");
  letterCount.textContent = letters.length;
});
