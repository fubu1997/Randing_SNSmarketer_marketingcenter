// footer year
document.getElementById('y').textContent = new Date().getFullYear();

// Smooth scroll buttons
document.querySelectorAll('[data-scroll]').forEach((el) => {
  el.addEventListener('click', () => {
    const target = el.getAttribute('data-scroll');
    const node = document.querySelector(target);
    if (!node) return;

    const y = node.getBoundingClientRect().top + window.scrollY - 86; // topbar height offset
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

// FAQ accordion
document.querySelectorAll('.qa-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.qa');
    if (!item) return;
    item.classList.toggle('open');
  });
});

// footer dummy links
document.querySelectorAll('[data-alert]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    alert(a.getAttribute('data-alert'));
  });
});

// Platforms slider (prev/next)
(function () {
  const track = document.querySelector('[data-pl-track]');
  const prev = document.querySelector('[data-pl-prev]');
  const next = document.querySelector('[data-pl-next]');
  if (!track || !prev || !next) return;

  const step = () => {
    // 아이템 한 칸 + gap 정도만큼 이동
    const first = track.querySelector('.pl-item');
    if (!first) return 160;
    const rect = first.getBoundingClientRect();
    return Math.max(140, rect.width + 14);
  };

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -step(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    track.scrollBy({ left: step(), behavior: 'smooth' });
  });
})();
