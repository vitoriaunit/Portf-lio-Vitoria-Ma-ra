document.querySelectorAll('.skill-card').forEach(card => {
  const barFill = card.querySelector('.skill-bar-fill');
  const percentSpan = card.querySelector('.skill-percent');
  if (!barFill || !percentSpan) return;

  const targetPercent = parseInt(percentSpan.textContent);
  let animating = false;
  let interval;

  card.addEventListener('mouseenter', () => {
    if (animating) return;
    animating = true;
    barFill.style.width = targetPercent + '%';

    let current = 0;
    percentSpan.textContent = '0%';
    interval = setInterval(() => {
      if (current >= targetPercent) {
        percentSpan.textContent = targetPercent + '%';
        clearInterval(interval);
        animating = false;
      } else {
        current++;
        percentSpan.textContent = current + '%';
      }
    }, 1000 / targetPercent); // anima em 1s
  });

  // Remova o evento mouseleave para manter preenchido!
});

