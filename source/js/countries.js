const countriesNavigationContainer = document.querySelector('.countries-info__navigation');
const countriesButtonsList = document.querySelectorAll('.countries-info__navigation-action');
const countriesCardsList = document.querySelectorAll('.country-card');

countriesNavigationContainer.addEventListener('click', (evt) => {
  evt.preventDefault();

  for (let button of countriesButtonsList) {
    button.classList.remove('countries-info__navigation-action--active');
  }

  for (let country of countriesCardsList) {
    if (evt.target.hasAttribute('href') && evt.target.href.split('#')[1] === country.id) {
      country.classList.add('country-card--active');
      evt.target.classList.add('countries-info__navigation-action--active');
    } else if (!evt.target.hasAttribute('href')) {
      continue;
    } else {
      country.classList.remove('country-card--active');
    }
  }

});
