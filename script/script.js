const menuBar = document.querySelector('.move__menu'),
    burgerBtn = document.querySelector('.fa-bars'),
    closeBtn = document.querySelector('.close');

const toggleBar = () => {
    menuBar.classList.toggle('move__menu__active');
}

burgerBtn.addEventListener('click', toggleBar);
closeBtn.addEventListener('click', toggleBar);

new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000
    },
  });