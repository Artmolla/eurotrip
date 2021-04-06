'use strict';

(() => {
  const openModalButton = document.querySelectorAll('.button--open-modal');

  const closeModal = (modal, buttonClose) => {
    modal.classList.remove('modal--show');
    buttonClose.removeEventListener('click', closeModalClickHandler);
    document.removeEventListener('keydown', closeModalKeyPressHandler);
    document.removeEventListener('click', closeModalOutsideClickHandler);
  };

  const closeModalKeyPressHandler = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      document.querySelector('.modal--show').classList.remove('modal--show');
    }
  };

  const closeModalOutsideClickHandler = (evt) => {
    if (evt.target.classList.contains('modal')) {
      document.querySelector('.modal--show').classList.remove('modal--show');
    }
  };

  const closeModalClickHandler = (evt) => {
    evt.preventDefault();
    const modal = evt.target.closest('.modal--show');
    const buttonClose = evt.target;

    closeModal(modal, buttonClose);
  };

  const openModalClickHandler = (evt) => {
    evt.preventDefault();
    const modal = document.querySelector('.modal');

    modal.classList.add('modal--show');
    const modalCloseButton = modal.querySelector('.modal__button--close');

    modalCloseButton.focus();
    modalCloseButton.addEventListener('click', closeModalClickHandler);
    document.addEventListener('keydown', closeModalKeyPressHandler);
    document.addEventListener('click', closeModalOutsideClickHandler);
  };

  openModalButton.forEach((button) => {
    button.addEventListener('click', openModalClickHandler);
  });
})();


