import { newText, newMultimedia, newContainer } from './helpers';

/**
 * agrega la funcionalidad de scroll cuando se le da clic a la imagen
 * @param {DOM element} container es el ul contenedor de las imagenes
 */
const addButtonsListeners = (container) => {
  const buttonList = [...container.querySelectorAll('.js-button-card')];

  buttonList.forEach((button) => {
    button.addEventListener('click', (event) => {
      const targetElement = event.target;
      const elementCoordinates = targetElement.getBoundingClientRect();
      const containerScrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const isPreviousImage = elementCoordinates.left < 0;
      const isActualImage =
        elementCoordinates.left > 0 && elementCoordinates.right < containerWidth;
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

/**
 * @param {array[objests]} cardsList es el array de imagenes que se encuentra dentro del objeto data
 * retorna un array de
 */
const createCards = (cardList) => {
  const cardNodes = cardList.map((card) => {
    const text = newText('p', card.text, ['slider-card__text']);
    const img = newMultimedia('img', card, ['slider-card__img']);
    const buttonCard = newContainer('button', [img], ['js-button-card']);
    const cardItem = newContainer('li', [buttonCard, text], ['slider-card']);

    return cardItem;
  });
  return cardNodes;
};

/**
 * @param {object} data es el objeto que forma la estructura de la pagina
 * retorna un nodo html con todos los componentes para realizar dicho componente
 */
const programsComp = (data) => {
  const cardList = createCards(data.images);
  // contenedor de imagenes
  const containerCards = newContainer('ul', cardList, ['slider-cards__container']);
  const slider = newContainer('div', [containerCards], ['slider__container']);
  const text = newText('p', data.text, ['slider__text']);
  const title = newText('h2', data.title, ['slider__title']);
  // contenedor principal
  const containerImage = newContainer('div', [title, text, slider], ['slider__wraper']);
  const section = newContainer('section', [containerImage], ['slider']);
  section.id = 'scroll';
  addButtonsListeners(containerCards);

  return section;
};

export { programsComp };
