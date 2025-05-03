// Load theme from localStorage
function loadTheme() {
  const theme = localStorage.getItem('theme') || 'light';
  document.body.className = theme;
}

function toggleTheme() {
  const current = document.body.className;
  const newTheme = current === 'light' ? 'dark' : 'light';
  document.body.className = newTheme;
  localStorage.setItem('theme', newTheme);
}

function animateBox() {
  const box = document.getElementById('box');
  box.classList.remove('animate'); // Reset
  void box.offsetWidth; // Force reflow
  box.classList.add('animate');
}

// Event listeners
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('animateBtn').addEventListener('click', animateBox);

// On page load
loadTheme();
