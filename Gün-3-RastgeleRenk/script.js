// Sayfa yüklenince mevcut tema kontrolü
document.addEventListener("DOMContentLoaded", () => {
    const mevcutTema = localStorage.getItem("tema");
    if (mevcutTema) {
      document.body.classList.add(mevcutTema);
      ikonGuncelle();
    }
  });
  
  const temaButon = document.getElementById("temaButon");
  temaButon.addEventListener("click", () => {
    document.body.classList.toggle("koyu-tema");
    document.body.classList.toggle("acik-tema");
  
    // Tema kaydet
    if (document.body.classList.contains("koyu-tema")) {
      localStorage.setItem("tema", "koyu-tema");
    } else {
      localStorage.setItem("tema", "acik-tema");
    }
  
    ikonGuncelle();
    toastGoster();
  });
  
  // İkon değiştirme fonksiyonu
  function ikonGuncelle() {
    const ikon = document.getElementById("ikon");
    if (document.body.classList.contains("koyu-tema")) {
      ikon.textContent = "🌞"; // Güneş
    } else {
      ikon.textContent = "🌙"; // Ay
    }
  }
  
  // Toast gösterme fonksiyonu
  function toastGoster() {
    const toastEl = document.getElementById('toastBildirim');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
  