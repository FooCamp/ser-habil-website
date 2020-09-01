import { newMultimedia } from './helpers';

const imageComponet = (data) => {
  const img = newMultimedia('img', data, ['image-fundacion']);

  return img;
};

export { imageComponet };
