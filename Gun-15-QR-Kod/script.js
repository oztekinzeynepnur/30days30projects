function generateQR() {
    const input = document.getElementById("qrInput").value;
    const result = document.getElementById("qrResult");
  
    if (!input) {
      alert("Lütfen bir metin giriniz!");
      return;
    }
  
    result.innerHTML = "";
    QRCode.toCanvas(input, { width: 200 }, function (err, canvas) {
      if (err) return console.error(err);
      result.appendChild(canvas);
    });
  }
  