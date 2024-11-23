document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
  
    // Hamburger menu functionality
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
  
    // Scroll effect for header
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
  
    // Add fade-in animation to content
    document.querySelectorAll('.profile-content, .section-title, .profile-description')
      .forEach(element => element.classList.add('fade-in'));
  
    // Close mobile menu when window is resized to desktop view
    window.addEventListener('resize', () => {
      if (window.innerWidth > 968) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('no-scroll');
      }
    });
  });
  