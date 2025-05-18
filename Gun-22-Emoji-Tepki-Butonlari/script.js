let counts = {
  like: 0,
  love: 0,
  haha: 0
};

function react(type) {
  counts[type]++;
  document.getElementById(`${type}Count`).textContent = counts[type];
  showFloatingEmoji(type);
}

function showFloatingEmoji(type) {
  const emojiMap = {
    like: "👍",
    love: "❤️",
    haha: "😂"
  };

  const emoji = document.createElement("div");
  emoji.className = "emoji-float";
  emoji.textContent = emojiMap[type];
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = window.innerHeight - 50 + "px";

  document.getElementById("effectArea").appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 1000);
}
