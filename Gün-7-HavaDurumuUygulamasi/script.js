const apiKey = "2d23a8f96dd3b57c084c6ae124cc9b62"; // Buraya kendi OpenWeatherMap API anahtarını yaz!
let tema = localStorage.getItem("tema") || "light";

document.addEventListener("DOMContentLoaded", () => {
  if (tema === "dark") {
    document.body.classList.add("dark-mode");
  }

  const kayitliSehir = localStorage.getItem("sehir");
  if (kayitliSehir) {
    document.getElementById("sehirInput").value = kayitliSehir;
    havaDurumuGetir();
  }
  
  document.getElementById("sehirInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      havaDurumuGetir();
    }
  });
});

function havaDurumuGetir() {
  const sehir = document.getElementById("sehirInput").value.trim();
  if (!sehir) {
    alert("Lütfen bir şehir adı giriniz!");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${apiKey}&lang=tr&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Şehir bulunamadı!");
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem("sehir", sehir);

      const havaIcon = data.weather[0].icon;
      const sicaklik = data.main.temp;
      const durum = data.weather[0].description;
      const ruzgar = data.wind.speed;
      const nem = data.main.humidity;

      document.getElementById("sonuc").innerHTML = `
        <img src="https://openweathermap.org/img/wn/${havaIcon}@2x.png" alt="${durum}">
        <h2>${sehir}</h2>
        <p>${durum}</p>
        <p>🌡️ Sıcaklık: ${sicaklik}°C</p>
        <p>💨 Rüzgar: ${ruzgar} m/s</p>
        <p>💧 Nem: %${nem}</p>
      `;
    })
    .catch(error => {
      document.getElementById("sonuc").innerHTML = `<p class="text-danger">${error.message}</p>`;
    });
}

function temaDegistir() {
  document.body.classList.toggle("dark-mode");
  tema = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("tema", tema);
}
