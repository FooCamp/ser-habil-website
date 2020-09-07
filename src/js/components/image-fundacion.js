import { newMultimedia, newContainer } from './helpers';

const imageComponet = (data) => {
  const img = newMultimedia('img', data, ['image-fundation__picture']);
  const container = newContainer('div', [img], ['image-fundation__container']);
  const secction = newContainer('section', [container], ['image-fundation']);
  return secction;
};

export { imageComponet };
