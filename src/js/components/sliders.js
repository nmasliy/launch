import Swiper, { Pagination, Navigation } from 'swiper';
import SimpleBar from 'simplebar';
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

function initWhySlider() {
  const pagination = document.querySelector('.why-pagination');
  const paginationItems = document.querySelectorAll('.why-pagination__item');
  const paginationPanel = document.querySelector('.why-pagination__panel');

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
        const newActiveItem = paginationItems[swiper.activeIndex];
        const leftPos =  newActiveItem.getBoundingClientRect().left - pagination.offsetLeft;

        prevActiveItem.classList.remove('is-active');
        newActiveItem.classList.add('is-active');

        paginationPanel.style.transform = `translateX(${leftPos}px)`;
      },
    },
  });

  paginationItems.forEach((el, index) => {
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

  const paginationScroll = document.querySelector('.why-pagination__scroll');

  const simpleBar = new SimpleBar(paginationScroll);
  simpleBar.getScrollElement().addEventListener('scroll', function(e) {
    const activeItem = document.querySelector(
      '.why-pagination__item.is-active'
    );
    const leftPos = activeItem.getBoundingClientRect().left - pagination.offsetLeft;

    paginationPanel.style.transform = `translateX(${leftPos}px)`;
    paginationPanel.style.transition = `none`;
    console.log(leftPos)

    setTimeout(() => {
      paginationPanel.style.transition = ``;
    }, 50)
  });

}


initWhySlider();
