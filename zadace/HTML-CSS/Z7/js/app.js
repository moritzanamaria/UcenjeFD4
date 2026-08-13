const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  const html = document.documentElement;
  if (html.getAttribute('data-bs-theme') === 'dark') {
    html.setAttribute('data-bs-theme', 'light');
    toggleBtn.textContent = '🌙 Tamni način';
  } else {
    html.setAttribute('data-bs-theme', 'dark');
    toggleBtn.textContent = '☀️ Svijetli način';
  }
})