/* eslint-disable import/prefer-default-export */
import { newText, newMultimedia, newContainer } from './helpers';

const createControls = (cardsContainer) => {
  const controlLeft = newContainer('div', [], ['slider__control', 'slider__control--left']);
  const controlRight = newContainer('div', [], ['slider__control', 'slider__control--right']);

  controlLeft.addEventListener('click', () => {
    cardsContainer.scrollLeft -= 200;
    if (cardsContainer.scrollLeft === 0) {
      controlLeft.classList.add('slider__control--inactive');
    }
    if (controlRight.classList.contains('slider__control--inactive')) {
      controlRight.classList.remove('slider__control--inactive');
    }
  });

  controlRight.addEventListener('click', () => {
    cardsContainer.scrollLeft += 200;
  });

  return [controlLeft, controlRight];
};

/**
 * @param {array[objests]} cardsList es el array de imagenes que se encuentra dentro del objeto data
 * retorna un array de
 */
const createCards = (cardList) => {
  const cardNodes = cardList.map((card) => {
    const text = newText('p', card.text, ['slider-card__text']);
    const img = newMultimedia('img', card.src, card.alt, ['slider-card__img']);
    const cardItem = newContainer('li', [img, text], ['slider-card']);
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
  const scrollControls = createControls(containerCards);
  const slider = newContainer('div', [containerCards, ...scrollControls], ['slider__container']);
  const text = newText('p', data.text, ['slider__text']);
  const title = newText('h2', data.title, ['slider__title']);
  // contenedor principal
  const section = newContainer('section', [title, text, slider], ['slider']);
  return section;
};

export { programsComp };
