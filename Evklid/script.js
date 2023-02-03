const burger = document.querySelector('.burger');
const header__nav = document.querySelector('.header__nav');
const navItems = header__nav.querySelectorAll('a');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  header__nav.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    header__nav.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },

});

document.querySelectorAll('.how__nav-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.how__nav-btn').forEach(function (btn) {
      btn.classList.remove('how__nav-btn--active')
    })
    e.currentTarget.classList.add('how__nav-btn--active');

    document.querySelectorAll('.how__card').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('how__card--active')
    })

    document.querySelector(`[data-target="${path}"]`).classList.add('how__card--active');

  });

});

new Accordion('.accordion-container');

const headerSearch = document.querySelector('.header__search');
const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search__btn');
const btnClose = document.querySelector('.search__btn-close');

headerSearch.addEventListener('click', () => {
  search.classList.toggle('search--active');
});

btnClose.addEventListener('click', () => {
  search.classList.remove('search--active');
});
