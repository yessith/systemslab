/*  VARIABLES */
const $button = document.getElementById('button');
const $menu = document.getElementById('menu');
const $link = document.querySelectorAll('.header-menu__list__item--link');
const $line = document.querySelector('.header-menu__button__burger--line');

/* SHOW MENU */
$button.addEventListener('click', () => {
  $menu.classList.toggle('show');
  $line.classList.toggle('active');
});

/* HIDDEN MENU */
$link.forEach((n) =>
  n.addEventListener('click', () => {
    $menu.classList.remove('show');
  })
);

/* ACTIVAR EVENTO SCROLL TRANSITION */
window.addEventListener('scroll', () => {
  const $elements = document.querySelectorAll('.scroll-content');
  const $sizeElements = $elements.length;
  const $screenSize = window.innerHeight;

  for (let i = 0; i < $sizeElements; i++) {
    let $element = $elements[i];

    if ($element.getBoundingClientRect().top < $screenSize) {
      $element.classList.add('visible');
    } else {
      $element.classList.remove('visible');
    }
  }
});

/* SLIDER SHOW */
let slideIndex = 0;
let img = document.querySelectorAll('.origin-shop__carousel__slider');
let dots = document.getElementsByClassName('dot');
const sizeImg = img.length;
const sizeDot = dots.length;

const slideShow = () => {
  for (let i = 0; i < sizeImg; i++) {
    img[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > sizeImg) {
    slideIndex = 1;
  }

  for (let i = 0; i < sizeDot; i++) {
    dots[i].className = dots[i].className.replace(' activo', '');
  }

  img[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' activo';

  setTimeout(slideShow, 4000);
};
slideShow();

const currentSlide = (n) => {
  for (let i = 0; i < sizeImg; i++) {
    img[i].style.display = 'none';
  }

  for (let i = 0; i < sizeDot; i++) {
    dots[i].className = dots[i].className.replace(' activo', '');
  }

  slideIndex = n;
  img[n - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' activo';
};
