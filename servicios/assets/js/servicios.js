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