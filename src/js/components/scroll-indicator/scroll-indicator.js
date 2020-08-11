import { newText, newContainer } from '../helpers';

const scrollIndicator = (data) => {
  const image = newContainer('img', [], ['scroll__image']);
  const button = newContainer('button', [image], ['scroll__button']);
  image.src = data.image.src;
  image.alt = data.image.alt;
  const text = newText('p', data.text, ['scroll__text']);
  return newContainer('section', [button, text], ['scroll']);
};

export { scrollIndicator };
