import { newText, newMultimedia, newContainer } from './helpers';

const createrMapComponen = (data) => {
  const ubication = newContainer('iframe', [], ['map-section__map']);
  ubication.src = data.iframe.src;
  ubication.frameborder = '0';
  ubication.allowfullscreen = 'true';

  const backgroundPictura = newContainer('div', [ubication], ['map-section__container']);
  const pictureTop = newContainer('div', [backgroundPictura], ['map-section__pictureTop']);
  const pictureButton = newContainer('div', [pictureTop], ['map-section__pictureBotton']);
  const section = newContainer('section', [pictureButton], ['map-section']);

  return section;
};

export { createrMapComponen };
