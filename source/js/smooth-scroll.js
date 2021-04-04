  const makeSmoothScroll = () => {
    const anchorsList = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchorsList) {
      anchor.addEventListener('click', (evt) => {
        evt.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  };

  makeSmoothScroll();
