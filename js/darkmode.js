document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darktheme');

  if (!toggle) return;

  const isDark = localStorage.getItem('darkmode') === 'true';
  if (isDark) {
    document.body.classList.add('darktheme');
    toggle.textContent = '🌞';
  } else {
    toggle.textContent = '🌜';
  }

  toggle.addEventListener('click', () => {
    const active = document.body.classList.toggle('darktheme');
    toggle.textContent = active ? '🌞' : '🌜';
    localStorage.setItem('darkmode', active);
  });
});
