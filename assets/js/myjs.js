document.addEventListener("DOMContentLoaded", () => {
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

  // Sidebar toggle

const btn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.course-sidebar');
const overlay = document.querySelector('.sidebar-overlay');
const closeBtn = document.querySelector('.sidebar-close');

function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
    // Lock/Unlock the body scroll
    document.body.classList.toggle('sidebar-open');
}

if (btn && sidebar) {
    btn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
}
//   const btn = document.querySelector('.menu-toggle');
//   const sidebar = document.querySelector('.course-sidebar');

// if (btn && sidebar){
//   btn.addEventListener('click', () => {
//     sidebar.classList.toggle('open');
//   });
// }

  // Mobile nav toggle
  const toggle = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    // Prevent scrolling when menu is open
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'initial';
  });
});


// document.addEventListener("DOMContentLoaded", function() {
//   // A palette of professional, high-contrast colors
//   const palette = [
//     '#27ae60', // Green
//     '#e67e22', // Orange
//     '#9b59b6', // Purple
//     '#e74c3c', // Red
//     '#2980b9', // Blue
//     '#16a085', // Teal
//     '#f39c12'  // Dark Yellow
//   ];

//   const cards = document.querySelectorAll('[data-color-random]');
  
//   cards.forEach(card => {
//     // Pick a random color from the palette
//     const randomColor = palette[Math.floor(Math.random() * palette.length)];
//     // Apply it to the CSS Variable
//     card.style.setProperty('--accent-color', randomColor);
//   });

//   const btn = document.querySelector('.menu-toggle');
//   const sidebar = document.querySelector('.course-sidebar');
  
//   btn.addEventListener('click', () => {
//     sidebar.classList.toggle('open');
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const toggle = document.querySelector('.hamburger');
//   const nav = document.querySelector('.nav-links');

//   toggle.addEventListener('click', () => {
//     toggle.classList.toggle('active');
//     nav.classList.toggle('active');
//     // Prevent scrolling when menu is open
//     document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'initial';
//   });
// });
