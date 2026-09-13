document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('theme-toggle');
  var html = document.documentElement;

  function updateIcon() {
    var isLight = html.getAttribute('data-theme') === 'light';
    btn.textContent = isLight ? '🌙' : '☀️';
    btn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }

  updateIcon();

  btn.addEventListener('click', function () {
    var current = html.getAttribute('data-theme') || 'dark';
    var next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('kayden-theme', next); } catch (e) {}
    updateIcon();
  });
});
