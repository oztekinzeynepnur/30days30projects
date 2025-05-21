function playNotification() {
  const sound = document.getElementById("notificationSound");
  const message = document.getElementById("message");

  sound.play();
  message.textContent = "🔔 Uyarı sesi çaldı!";
  
  setTimeout(() => {
    message.textContent = "";
  }, 3000);
}
