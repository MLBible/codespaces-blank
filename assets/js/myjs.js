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

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    // Prevent scrolling when menu is open
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'initial';
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const tabs = document.querySelectorAll('.tab-btn');
//   const panes = document.querySelectorAll('.tab-pane');

//   tabs.forEach(tab => {
//     // Switching tabs on hover
//     tab.addEventListener('mouseenter', () => {
//       if (window.innerWidth > 768) {
//         const target = tab.getAttribute('data-target');

//         tabs.forEach(t => t.classList.remove('active'));
//         panes.forEach(p => p.classList.remove('active'));

//         tab.classList.add('active');
//         document.getElementById(target).classList.add('active');
//       }
//     });
//   });

//   // Hamburger Toggle for Mobile
//   const hamburger = document.querySelector('.hamburger');
//   const navLinks = document.querySelector('.nav-links');
  
//   hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     hamburger.classList.toggle('active');
//   });
// });