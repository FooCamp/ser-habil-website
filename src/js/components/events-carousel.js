import { newText, newContainer, newMultimedia } from './helpers'

let currentCard = 0;
let cardList;

const createCards = (cardList) => {
  const cardCenter = cardList.map((card, index) => {
    const liClasses = !index  ? ['carousel-card', 'carousel-card--active'] : ['carousel-card'];
    const cardImage = newMultimedia('img', card, ['carousel-card__img']);
    const cardItem = newContainer('li', [cardImage], liClasses);

    return cardItem;
  });

  return cardCenter;
};

const clickLeft = () => {
  const buttonLeft = document.querySelector('.carousel__button--left');
  const buttonRigth = document.querySelector('.carousel__button--right');
  if (buttonLeft.classList.contains('carousel__button--disabled')) return;

  buttonRigth.classList.remove('carousel__button--disabled');
  cardList[currentCard].classList.remove('carousel-card--active');
  currentCard--;
  cardList[currentCard].classList.add('carousel-card--active');
  if (!currentCard ){
    buttonLeft.classList.add('carousel__button--disabled');
  }
}

const clickRight = () => {
  const buttonLeft = document.querySelector('.carousel__button--left');
  const buttonRigth = document.querySelector('.carousel__button--right');
  if (buttonRigth.classList.contains('carousel__button--disabled')) return;

  buttonLeft.classList.remove('carousel__button--disabled');
  cardList[currentCard].classList.remove('carousel-card--active');
  currentCard++;
  cardList[currentCard].classList.add('carousel-card--active');
  if (currentCard === cardList.length-1){
    buttonRigth.classList.add('carousel__button--disabled');
  }
}

const eventsCarousel = (data) => {
  cardList = createCards(data.images);
  const title = newText('h2', data.title, ['carousel__title']);
  const containerCarousel = newContainer('ul', cardList, ['carousel__cards-container']);
  const eventLink = newContainer('a', [containerCarousel], []);
  eventLink.href = data.url

  let carousel;

  if (cardList.length > 1) {
    const arrowImageLeft = newMultimedia('img', { src: 'arrow-slider.png', alt: 'arrow carousel' });
    const arrowImageRight = newMultimedia('img', { src: 'arrow-slider.png', alt: 'arrow carousel' });
    const arrowRight = newContainer(
      'button',
      [arrowImageRight],
      ['carousel__button', 'carousel__button--right']
      );
    const arrowLeft = newContainer('button', [arrowImageLeft], ['carousel__button', 'carousel__button--left']);
    carousel = newContainer(
      'div',
      [arrowLeft, eventLink, arrowRight],
      ['carousel__container']
    );
    arrowLeft.classList.add('carousel__button--disabled');
    arrowLeft.addEventListener('click',clickLeft,);
    arrowRight.addEventListener('click', clickRight,);
  } else {
  carousel = newContainer('div', [containerCarousel], ['carousel__container']);
  }
  const subtitle = newText('h3', data.subtitle, ['carousel__subtitle']);
  const text = newText('p', data.text, ['carousel__text']);
  const section = newContainer('section', [title, carousel, subtitle, text], ['carousel']);

  return section;
};

export { eventsCarousel };
