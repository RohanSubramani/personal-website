// script.js

// Update copyright year in footer
window.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Any additional JavaScript can be added here.
// placeholder: if you want dynamic behavior or forms, etc.
