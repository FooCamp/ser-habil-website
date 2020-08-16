import { newText, newContainer } from './helpers';

const scrollIndicator = (data) => {
  const image = newContainer('img', [], ['scroll__image', 'scroll--bounce']);
  const text = newText('p', data.text, ['scroll__text']);
  const button = newContainer('button', [image, text], ['scroll__button']);
  image.src = data.image.src;
  image.alt = data.image.alt;
  const section = newContainer('section', [button], ['scroll']);
  const scrollFunction = () => {
    const scrollAnimation = document.getElementById(data.scrollTo);
    const position = scrollAnimation.offsetTop;
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  };
  button.addEventListener('click', scrollFunction);
  return section;
};

export { scrollIndicator };
