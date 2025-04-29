const emojiler = [
    { emoji: "😀", aciklama: "Mutlu" },
    { emoji: "😍", aciklama: "Aşık" },
    { emoji: "😡", aciklama: "Sinirli" },
    { emoji: "🤔", aciklama: "Düşünen" },
    { emoji: "😢", aciklama: "Üzgün" },
    { emoji: "😎", aciklama: "Havalı" },
    { emoji: "🥳", aciklama: "Kutlayan" },
    { emoji: "😴", aciklama: "Uykulu" },
    { emoji: "🤯", aciklama: "Şaşkın" }
  ];
  
  let sayac = localStorage.getItem("sayac") ? Number(localStorage.getItem("sayac")) : 0;
  let tema = localStorage.getItem("tema") || "light";
  
  // Sayfa açıldığında kaydedilmiş verileri göster
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sayac").textContent = sayac;
    if (localStorage.getItem("sonEmoji")) {
      const sonEmoji = JSON.parse(localStorage.getItem("sonEmoji"));
      document.getElementById("emoji").textContent = sonEmoji.emoji;
      document.getElementById("aciklama").textContent = sonEmoji.aciklama;
    }
    if (tema === "dark") {
      document.body.classList.add("dark-mode");
    }
  });
  
  function tepkiVer() {
    const rastgeleIndex = Math.floor(Math.random() * emojiler.length);
    const secilen = emojiler[rastgeleIndex];
  
    const emojiEl = document.getElementById("emoji");
    const aciklamaEl = document.getElementById("aciklama");
  
    emojiEl.textContent = secilen.emoji;
    aciklamaEl.textContent = secilen.aciklama;
  
    // Animasyon
    emojiEl.classList.add("animasyon");
    setTimeout(() => emojiEl.classList.remove("animasyon"), 300);
  
    // Sayaç
    sayac++;
    document.getElementById("sayac").textContent = sayac;
  
    // localStorage'a kaydet
    localStorage.setItem("sonEmoji", JSON.stringify(secilen));
    localStorage.setItem("sayac", sayac);
  }
  
  function temaDegistir() {
    document.body.classList.toggle("dark-mode");
    tema = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("tema", tema);
  }
  