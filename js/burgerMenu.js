document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      burger.classList.remove('open');
    });
  });
});
