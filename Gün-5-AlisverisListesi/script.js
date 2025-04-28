let urunler = [];

// Sayfa açıldığında localStorage'dan verileri al
document.addEventListener("DOMContentLoaded", () => {
  const kayitliUrunler = JSON.parse(localStorage.getItem("urunler"));
  if (kayitliUrunler) {
    urunler = kayitliUrunler;
    listeyiGuncelle();
  }
});

function urunEkle() {
  const urunInput = document.getElementById("urunInput");
  const urunAdi = urunInput.value.trim();

  if (urunAdi !== "") {
    urunler.push(urunAdi);
    urunInput.value = "";
    listeyiGuncelle();
    toastGoster("Ürün eklendi ✅");
  } else {
    toastGoster("Lütfen bir ürün adı girin ❗");
  }
}

function listeyiGuncelle() {
  const liste = document.getElementById("liste");
  liste.innerHTML = "";

  urunler.forEach((urun, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";

    li.innerHTML = `
      ${urun}
      <button onclick="urunSil(${index})">&times;</button>
    `;

    liste.appendChild(li);
  });

  localStorage.setItem("urunler", JSON.stringify(urunler));
}

function urunSil(index) {
  urunler.splice(index, 1);
  listeyiGuncelle();
  toastGoster("Ürün silindi 🗑️");
}

function tumunuSil() {
  if (urunler.length > 0) {
    if (confirm("Tüm listeyi silmek istediğinize emin misiniz?")) {
      urunler = [];
      listeyiGuncelle();
      toastGoster("Tüm liste temizlendi 🧹");
    }
  } else {
    toastGoster("Liste zaten boş 😅");
  }
}

function toastGoster(mesaj) {
  const toastEl = document.getElementById('toastBildirim');
  const toastMesaj = document.getElementById('toastMesaj');
  toastMesaj.textContent = mesaj;
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}
