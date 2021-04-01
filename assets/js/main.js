/*  VARIABLES */
const $button = document.getElementById("button");
const $menu = document.getElementById("menu");
const $link = document.querySelectorAll(".header-menu__list__item--link");
const $line = document.querySelector(".header-menu__button__burger--line");
var img = document.querySelectorAll(".origin-shop__carousel__slider");
var dots = document.getElementsByClassName("dot");

/* SHOW MENU */
$button.addEventListener("click", () => {
  $menu.classList.toggle("show");
  $line.classList.toggle("active");
});

/* HIDDEN MENU */
$link.forEach((n) =>
  n.addEventListener("click", () => {
    $menu.classList.remove("show");
  })
);

/* ACTIVAR EVENTO SCROLL TRANSITION */
window.addEventListener("scroll", () => {
  let $elements = document.querySelectorAll(".scroll-content");
  let $screenSize = window.innerHeight;

  for (var i = 0; i < $elements.length; i++) {
    let $element = $elements[i];

    if ($element.getBoundingClientRect().top < $screenSize) {
      $element.classList.add("visible");
    } else {
      $element.classList.remove("visible");
    }
  }
});

/* SLIDER SHOW */
var slideIndex = 0;

var slideShow = () => {
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > img.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activo", "");
  }

  img[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activo";

  setTimeout(slideShow, 4000);
};
slideShow();

var currentSlide = (n) => {
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activo", "");
  }

  slideIndex = n;
  img[n - 1].style.display = "block";
  dots[slideIndex - 1].className += " activo";
};
