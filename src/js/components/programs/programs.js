/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { newText, newMultimedia, newContainer } from '../helpers';

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
  const section = newContainer('section', [title, text, slider], ['slider']);
  section.id = 'scroll';

  return section;
};

export { programsComp };
