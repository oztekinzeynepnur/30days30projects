let sayi = 0;

// Sayfa yüklenince localStorage kontrolü
document.addEventListener("DOMContentLoaded", () => {
  const kayitliSayi = localStorage.getItem("sayi");
  if (kayitliSayi !== null) {
    sayi = parseInt(kayitliSayi);
    guncelle();
  }
});

function arttir() {
  sayi++;
  guncelle();
  toastGoster("Artırıldı 🚀");
}

function azalt() {
  sayi--;
  guncelle();
  toastGoster("Azaltıldı 🔻");
}

function sifirla() {
  sayi = 0;
  guncelle();
  toastGoster("Sıfırlandı 🔄");
}

function guncelle() {
  const sayiEl = document.getElementById("sayi");
  sayiEl.textContent = sayi;

  // Renk değişimi
  if (sayi > 0) {
    sayiEl.className = "pozitif";
  } else if (sayi < 0) {
    sayiEl.className = "negatif";
  } else {
    sayiEl.className = "nötr";
  }

  // Animasyon (küçük büyüme efekti)
  sayiEl.style.transform = "scale(1.2)";
  setTimeout(() => {
    sayiEl.style.transform = "scale(1)";
  }, 200);

  // Sayıyı localStorage'a kaydet
  localStorage.setItem("sayi", sayi);
}

function toastGoster(mesaj) {
  const toastEl = document.getElementById('toastBildirim');
  const toastMesaj = document.getElementById('toastMesaj');
  toastMesaj.textContent = mesaj;
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}
