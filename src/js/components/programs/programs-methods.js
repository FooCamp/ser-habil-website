const programsMethods = () => {
  const containerCards = document.querySelector('.slider-cards__container');
  const addButtonsListeners = (container) => {
    const buttonList = [...container.querySelectorAll('.js-button-card')];

    buttonList.forEach((button) => {
      button.addEventListener('click', (event) => {
        const targetElement = event.target;
        const elementCoordinates = targetElement.getBoundingClientRect();
        const containerScrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const isPreviousImage = elementCoordinates.left < 0;
        const isActualImage = elementCoordinates.left > 0 && elementCoordinates.right < containerWidth;
        let scrollDelta = 0;

        if (isActualImage) {
          return;
        } else if (isPreviousImage) {
          scrollDelta = containerScrollLeft - elementCoordinates.width;
        } else {
          scrollDelta = containerScrollLeft + elementCoordinates.width;
        }
        container.scrollTo({
          left: scrollDelta,
          behavior: 'smooth',
        });
      });
    });
  };
  addButtonsListeners(containerCards);
};

export { programsMethods };
