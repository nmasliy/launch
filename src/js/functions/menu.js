(function () {
  const $html = document.querySelector('html');
  const $header = document.querySelector('.header');
  const $menu = document.querySelector('.menu');
  const $burger = document.querySelector('.burger');
  const $close = document.querySelector('.menu__close');
  const $overlay = document.querySelector('.overlay');
  const $submenuNodes = document.querySelectorAll('.nav-submenu > a');
  const $menuLinks = document.querySelectorAll('.menu__nav > ul > li > a');
  const $submenuLinks = document.querySelectorAll('.nav-submenu > ul > li > a');
  const TRANSITION_DELAY = 400;
  const MOBILE_MENU_BREAKPOINT = 1024;

  let isInit = false;

  $submenuNodes.forEach((el) => {
    el.addEventListener('click', (e) => e.preventDefault());
  });

  window.addEventListener('click', (e) => {
    const submenuNode = e.target.closest('.nav-submenu');

    if (submenuNode) {
      toggleSubmenu(submenuNode);
    } else {
      closeSubmenu(document.querySelector('.nav-submenu.is-active'));
    }
  });

  const checkScreenWidth = () => {
    // Активируем меню только на экранах <= 1024
    if (
      $menu &&
      $burger &&
      window.innerWidth <= MOBILE_MENU_BREAKPOINT &&
      !isInit
    ) {
      isInit = true;
      $burger.addEventListener('click', toggleMenu);
      $close?.addEventListener('click', closeMenu);
      $overlay?.addEventListener('click', closeMenu);
      $menuLinks.forEach((el) => {
        if (!el.parentElement.classList.contains('nav-submenu')) {
          el.addEventListener('click', closeMenu);
        }
      });
      $submenuLinks.forEach((el) => {
        el.addEventListener('click', closeMenu);
      });
    } else {
      window.addEventListener('resize', checkScreenWidth);
    }
  };
  checkScreenWidth();

  function openMenu() {
    $overlay.style.display = 'block';
    $menu.style.display = 'flex';
    $burger.setAttribute('aria-expanded', 'true');
    $burger.setAttribute('aria-label', 'Закрыть меню');

    $html.classList.add('disable-scroll');

    setTimeout(function () {
      $overlay.classList.add('is-active');
      $menu.classList.add('is-active');
      $burger.classList.add('is-active');
      $header.classList.add('is-active');
    }, 1);
  }

  function closeMenu() {
    $overlay.classList.remove('is-active');
    $menu.classList.remove('is-active');
    $burger.classList.remove('is-active');
    $header.classList.remove('is-active');
    $burger.setAttribute('aria-expanded', 'false');
    $burger.setAttribute('aria-label', 'Открыть меню');

    $html.classList.remove('disable-scroll');

    setTimeout(function () {
      $overlay.style.display = '';
      $menu.style.display = '';
    }, TRANSITION_DELAY);
  }

  function toggleSubmenu(el) {
    el.classList.contains('is-active') ? closeSubmenu(el) : openSubmenu(el);
  }

  function openSubmenu(el) {
    el.classList.add('is-active');
  }

  function closeSubmenu(el) {
    el?.classList.remove('is-active');
  }

  function toggleMenu() {
    $menu.classList.contains('is-active') ? closeMenu() : openMenu();
  }
})();
