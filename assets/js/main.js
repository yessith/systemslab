  /*  VARIABLES */
  let $button = document.getElementById('button');
  let $menu = document.getElementById('menu');
  let $link = document.querySelectorAll('.header-menu__list__item--link');
  let $line = document.querySelector('.header-menu__button__burger--line');

  /* SHOW MENU */
    $button.addEventListener('click', () => {
      $menu.classList.toggle('show');
      $line.classList.toggle('active');
    });

  /* HIDDEN MENU */
    $link.forEach(n => n.addEventListener('click', () => {
      $menu.classList.remove('show');
    }));

    /* ACTIVAR EVENTO SCROLL TRANSITION */
    window.addEventListener('scroll', () =>  {
      let $elements = document.querySelectorAll('.scroll-content');
      let $screenSize = window.innerHeight;

        for(var i = 0; i < $elements.length; i++) {
          let $element = $elements[i];

          if($element.getBoundingClientRect().top < $screenSize) {
            $element.classList.add('visible');
          } else {
            $element.classList.remove('visible');
          }
        }
    });

    /* SLIDER SHOW */
     var slideIndex = 0;

     var slideShow = () => {
       var i;
       var img = document.querySelectorAll('.origin-shop__carousel__slider')
       var dots = document.getElementsByClassName("dot");

       for(i = 0; i < img.length; i++) {
         img[i].style.display = "none";
       }

       slideIndex++

       if(slideIndex > img.length) {
         slideIndex = 1
        }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

       img[slideIndex -1].style.display = "block";
       dots[slideIndex-1].className += " active";

       setTimeout(slideShow, 3000);
    }
    slideShow();

    var currentSlide = (n) => {
      var i;
      var img = document.querySelectorAll('.origin-shop__carousel__slider')
      for (i = 0; i < img.length; i++) {
          img[i].style.display = "none";
      }

      slideIndex = n;
      img[n-1].style.display = "block";
    }