// Tema geçişi
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
  localStorage.setItem("blog-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("blog-theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "🌞";
  }
  hesaplaOkumaSuresi();
});

// Yukarı çık
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Okuma süresi
function hesaplaOkumaSuresi() {
  const metin = document.querySelector("main").innerText;
  const kelimeSayisi = metin.trim().split(/\s+/).length;
  const dakika = Math.ceil(kelimeSayisi / 200);
  document.getElementById("readingTime").textContent = `🕒 Yaklaşık ${dakika} dakikalık okuma`;
}
