import { newText,newContainer } from './helpers';

const scrollIndicator = (data) => {
  const button = document.createElement('button');
  button.type = 'button';
  const image = document.createElement('img');
  image.src = data.image.src;
  image.alt = data.image.alt;
  button.appendChild(image);
  const text = newText('p', data.text, ['scroll__text'])
  const section = newContainer('section', [button, text], ['scroll-indicator']);
  return section;
};

export { scrollIndicator };
