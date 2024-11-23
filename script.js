// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Social icons hover effect
document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-5px) rotate(360deg)';
  });
  
  icon.addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0) rotate(0deg)';
  });
});
