const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let score = 0;

  const kurallar = [
    { id: "rule1", kontrol: /.{8,}/ },
    { id: "rule2", kontrol: /[0-9]/ },
    { id: "rule3", kontrol: /[a-z]/ },
    { id: "rule4", kontrol: /[A-Z]/ },
    { id: "rule5", kontrol: /[^A-Za-z0-9]/ }
  ];

  kurallar.forEach(kural => {
    const li = document.getElementById(kural.id);
    if (kural.kontrol.test(password)) {
      li.classList.add("valid");
      li.classList.remove("invalid");
      score++;
    } else {
      li.classList.add("invalid");
      li.classList.remove("valid");
    }
  });

  updateBar(score);
});

function updateBar(score) {
  const seviyeler = ["Zayıf", "Orta", "İyi", "Güçlü", "Çok Güçlü"];
  const renkler = ["danger", "warning", "info", "primary", "success"];
  const width = (score / 5) * 100;

  strengthBar.style.width = width + "%";
  strengthBar.textContent = seviyeler[score - 1] || "Zayıf";

  strengthBar.className = "progress-bar bg-" + (renkler[score - 1] || "danger");
}
