const callBackForm = document.querySelector('.callback-form');
const phoneField = document.querySelectorAll('.callback-form__input--phone');

phoneField.forEach((phone) => {
  phone.value = '+7  ';
});
