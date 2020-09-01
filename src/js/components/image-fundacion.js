import { newMultimedia, newContainer } from './helpers';

const imageComponet = (data) => {
  const img = newMultimedia('img', data, ['image-fundation__picture']);
  const secction = newContainer('section', [img], ['image-fundation']);
  return secction;
};

export { imageComponet };
