document.addEventListener("DOMContentLoaded", function() {
  // A palette of professional, high-contrast colors
  const palette = [
    '#27ae60', // Green
    '#e67e22', // Orange
    '#9b59b6', // Purple
    '#e74c3c', // Red
    '#2980b9', // Blue
    '#16a085', // Teal
    '#f39c12'  // Dark Yellow
  ];

  const cards = document.querySelectorAll('[data-color-random]');
  
  cards.forEach(card => {
    // Pick a random color from the palette
    const randomColor = palette[Math.floor(Math.random() * palette.length)];
    // Apply it to the CSS Variable
    card.style.setProperty('--accent-color', randomColor);
  });

  const btn = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.course-sidebar');
  
  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
});