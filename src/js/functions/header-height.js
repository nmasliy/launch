export const getHeaderHeight = () => {
  if (document.querySelector('.header__top')) {
    const headerHeight = document?.querySelector('.header__top').offsetHeight;
    document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
  }
}
