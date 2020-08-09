import { newText, newContainer, newMultimedia } from './helpers'

const createCards = (cardList) => {
  const cardCenter = cardList.map((card, index) => {
    const img = newMultimedia('img', card, ['carousel-card__img']);
    const cardImage = newContainer('a', [img], []);
    cardImage.href = card.url;
    const cardItem = newContainer('li', [cardImage], ['carousel-card']);
    if (!index) {
      cardItem.classList.add('carousel-card--active');
    }
    return cardItem;
  });
  return cardCenter;
};

const eventsCarousel = (data) => {
  const cardList = createCards(data.images);
  const title = newText('h2', data.title, ['carousel__title']);
  const containerCarousel = newContainer('ul', cardList, ['carousel__cards-container']);
  const arrowImageLeft = newMultimedia('img', { src: 'arrow-slider.png', alt: 'arrow carousel' });
  const arrowImageRight = newMultimedia('img', { src: 'arrow-slider.png', alt: 'arrow carousel' });
  const arrowRight = newContainer('button', [arrowImageRight], ['carousel__button', 'carousel__button--right']);
  const arrowLeft = newContainer('button', [arrowImageLeft], ['carousel__button']);
  const carousel = newContainer('div', [ arrowLeft, containerCarousel, arrowRight ], ['carousel__container']);
  const subtitle = newText('h3', data.subtitle, ['carousel__title']);
  const text = newText('p', data.text, ['carousel__text']);
  const section = newContainer('section', [title, carousel, subtitle, text], ['carousel']);


  return section;
};

export { eventsCarousel };
