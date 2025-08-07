document.addEventListener('DOMContentLoaded', function () {
  const hamburguer = document.querySelector('.hamburguer');
  const nav = document.querySelector('.nav ul');
  const links = document.querySelectorAll('.nav a');

  hamburguer.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    });
  });
});

function animateOnScroll() {
  const elements = document.querySelectorAll('.card, .section-title, .text-block');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const positionTop = el.getBoundingClientRect().top;
    if (positionTop < windowHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('open');
  });
});