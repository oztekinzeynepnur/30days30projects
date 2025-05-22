const keySpan = document.getElementById("key");
const codeSpan = document.getElementById("code");
const keyCodeSpan = document.getElementById("keyCode");

document.addEventListener("keydown", (e) => {
  keySpan.textContent = e.key === " " ? "Boşluk" : e.key;
  codeSpan.textContent = e.code;
  keyCodeSpan.textContent = e.keyCode;
});
