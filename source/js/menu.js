const toggleMenuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu');
const menuList = menu.querySelector('.menu__list');

toggleMenuButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  toggleMenuButton.classList.toggle('menu__button--open');
  menu.classList.toggle('menu--open');
  menuList.classList.toggle('menu__list--open');
});
