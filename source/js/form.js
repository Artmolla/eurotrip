const callBackForm = document.querySelector('.callback-form');
const buyPackageForm = document.querySelector('.callback-form--modal');
const phoneField = document.querySelectorAll('.callback-form__input--phone');

const putInStorage = (form) => {
  const inputsList = form.querySelectorAll('input');

  inputsList.forEach((input) => {
    const name = input.name;

    input.onkeyup = () => {
      localStorage.setItem(name, input.value);
    }
    (name === 'phone')
      ? input.value = localStorage.getItem(name) || '+7  '
      : input.value = localStorage.getItem(name) || '';
  })
}

window.localStorage ? putInStorage(callBackForm) : putInStorage(buyPackageForm);
