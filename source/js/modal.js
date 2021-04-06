  const openModalButton = document.querySelectorAll('.button--open-modal');
  const overlay = document.querySelector('.overlay');

  const closeModal = (modal, buttonClose) => {
    modal.classList.remove('modal--show');
    overlay.classList.remove('overlay--show');

    buttonClose.removeEventListener('click', closeModalClickHandler);
    document.removeEventListener('keydown', closeModalKeyPressHandler);
    document.removeEventListener('click', closeModalOutsideClickHandler);
  };

  const closeModalKeyPressHandler = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      document.querySelector('.modal--show').classList.remove('modal--show');
      document.querySelector('.overlay--show').classList.remove('overlay--show');
    }
  };

  const closeModalOutsideClickHandler = (evt) => {
    if (evt.target.classList.contains('overlay')) {
      document.querySelector('.modal').classList.remove('modal--show');
      document.querySelector('.overlay').classList.remove('overlay--show');
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
    overlay.classList.add('overlay--show');

    const modalCloseButton = modal.querySelector('.modal__button--close');
    const modalInput = modal.querySelector('.callback-form__input');
    modalInput.focus();
    modalCloseButton.addEventListener('click', closeModalClickHandler);
    document.addEventListener('keydown', closeModalKeyPressHandler);
    document.addEventListener('click', closeModalOutsideClickHandler);
  };

  openModalButton.forEach((button) => {
    button.addEventListener('click', openModalClickHandler);
  });
