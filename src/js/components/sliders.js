import Swiper, { Pagination, Navigation } from 'swiper';

Swiper.use([Pagination, Navigation]);

function initMobileSlider(parent, wrapper, items, breakpoint = 768) {
  if (window.innerWidth <= breakpoint) {
    const $parent = document.querySelector(parent);
    const $wrapper = $parent.querySelector(wrapper);
    const $items = $wrapper.querySelectorAll(items);

    $parent.classList.add('swiper');
    $wrapper.classList.add('swiper-wrapper');
    $wrapper.classList.remove(wrapper.replace('.', ''));
    $items.forEach((slide) => slide.classList.add('swiper-slide'));

    const swiper = new Swiper(parent, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

// const functionsSwiper = new Swiper('.functions__slider', {
//   spaceBetween: 30,
// pagination: {
//   el: '.swiper-pagination',
//   clickable: true,
// },
// });

// initMobileSlider(".comfort__slider", ".comfort__list", ".comfort__item");

const whyPaginationItems = document.querySelectorAll('.why-pagination__item');
const whyPaginationPanel = document.querySelector('.why-pagination__panel');

const whySwiper = new Swiper('.why__slider', {
  spaceBetween: 50,
  navigation: {
    prevEl: '.why__prev',
    nextEl: '.why__next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    slideChange(swiper) {
      const prevActiveItem = document.querySelector(
        '.why-pagination__item.is-active'
      );
      const newActiveItem = whyPaginationItems[swiper.activeIndex];

      prevActiveItem.classList.remove('is-active');
      newActiveItem.classList.add('is-active');
      whyPaginationPanel.style.transform = `translateX(${newActiveItem.offsetLeft}px)`;
    },
  },
});

whyPaginationItems.forEach((el, index) => {
  el.addEventListener('click', () => {
    if (el.classList.contains('is-active')) {
      return;
    }
    const prevActiveItem = document.querySelector(
      '.why-pagination__item.is-active'
    );
    prevActiveItem.classList.remove('is-active');

    el.classList.add('is-active');
    whySwiper.slideTo(index);
  });
});
