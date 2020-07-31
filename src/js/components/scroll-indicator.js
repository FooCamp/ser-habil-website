import { newText, newContainer } from './helpers';

const scrollIndicator = (data) => {
  const button = document.createElement('button');
  button.type = 'button';
  const image = document.createElement('img');
  image.src = data.image.src;
  image.alt = data.image.alt;
  button.appendChild(image);
  const text = newText('p', data.text, ['scroll__text']);
  button.classList.add('scroll__button');
  image.classList.add('scroll__image');
  const section = newContainer('section', [button, text], ['scroll']);
  button.addEventListener('click', () => {
    const scrollAnimation = document.getElementById(data.scrollTo);
    const positions = scrollAnimation.getBoundingClientRect();
    window.scrollTo({
      top: positions.top,
      left: positions.left,
      behavior: 'smooth',
    });
  });
  return section;
};

export { scrollIndicator };
