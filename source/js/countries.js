const buttonListContainer = document.querySelector('.countries-info__navigation');
const buttonList = document.querySelectorAll('.countries-info__navigation-action');
const countriesList = document.querySelectorAll('.country-card');
const countriesAncorsList = document.querySelector('.countries-list');

countriesAncorsList.addEventListener('click', (evt) => {

  for (let country of countriesList) {
    if (evt.target.closest('.countries-list__action').hasAttribute('href')
      && evt.target.closest('.countries-list__action').href.split('#')[1] === country.id) {
      country.classList.add('country-card--active');
      country.scrollIntoView({ block: 'start', behavior: 'smooth' });
    } else if (!evt.target.closest('.countries-list__action').hasAttribute('href')) {
      continue;
    } else {
      country.classList.remove('country-card--active');
    }
  }
});


buttonListContainer.addEventListener('click', (evt) => {
  evt.preventDefault();

  for (let country of countriesList) {
    if (evt.target.hasAttribute('href') && evt.target.href.split('#')[1] === country.id) {
      for (let button of buttonList) {
        button.classList.remove('countries-info__navigation-action--active');
      }
      country.classList.add('country-card--active');
      evt.target.classList.add('countries-info__navigation-action--active');
    } else if (!evt.target.hasAttribute('href')) {
      continue;
    } else {
      country.classList.remove('country-card--active');
    }
  }

});
