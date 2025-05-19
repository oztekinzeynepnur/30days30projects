const themeToggle = document.getElementById("themeToggle");
const nameEl = document.getElementById("name");
const bioEl = document.getElementById("bio");
const nameInput = document.getElementById("nameInput");
const bioInput = document.getElementById("bioInput");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Sayfa açıldığında temayı yükle
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "🌞";
  }
});

function updateProfile() {
  const newName = nameInput.value.trim();
  const newBio = bioInput.value.trim();

  if (newName) nameEl.textContent = newName;
  if (newBio) bioEl.textContent = newBio;

  nameInput.value = "";
  bioInput.value = "";
}
