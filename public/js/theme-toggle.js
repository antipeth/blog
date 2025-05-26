document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('checkbox');
  const htmlElement = document.documentElement;

  // Initial theme setup
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  
  htmlElement.classList.toggle('dark-mode', isDark);
  checkbox.checked = !isDark;

  checkbox.addEventListener('change', () => {
    const newIsDark = !checkbox.checked;
    htmlElement.classList.toggle('dark-mode', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  });
});