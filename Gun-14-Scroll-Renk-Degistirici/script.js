window.addEventListener("scroll", () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollY = window.scrollY;
    const scrollPercent = scrollY / maxScroll;
  
    const hue = Math.floor(scrollPercent * 360);
    document.body.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
  });
  