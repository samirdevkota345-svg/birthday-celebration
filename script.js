const balloons = document.querySelectorAll('.balloon');
balloons.forEach(balloon => {
  balloon.addEventListener('click', () => {
    balloon.style.transition = '0.3s';
    balloon.style.transform = 'scale(0)';
    balloon.style.opacity = '0';
    createConfetti(balloon.offsetLeft, balloon.offsetTop);
  });
});

function createConfetti(x, y) {
  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    confetti.style.width = confetti.style.height = Math.random()*8 + 4 + 'px';
    confetti.style.animationDuration = (2 + Math.random()*2) + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}