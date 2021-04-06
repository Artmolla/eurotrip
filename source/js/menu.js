'use strict';

(() => {
  const menu = document.querySelector('.menu');
  const menuList = menu.querySelector('.menu__list');
  const toggleMenuButton = document.querySelector('.menu__button');

  menu.classList.remove('menu--no-js');
  menuList.classList.remove('menu__list--no-js');
  toggleMenuButton.classList.remove('menu__button--no-js');

  toggleMenuButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    toggleMenuButton.classList.toggle('menu__button--open');
    menu.classList.toggle('menu--open');
    menuList.classList.toggle('menu__list--open');
  });
})();
