import { newText, newMultimedia, newContainer } from './helpers';

const createrMapComponen = (data) => {
  const ubication = newContainer('iframe', [], ['map-section__map']);
  ubication.src = data.iframe.src;
  ubication.frameborder = '0';
  ubication.allowfullscreen = 'true';
  ubication.height = '450px';
  ubication.width = '100%';

  const backgroundPictura = newContainer(
    'div',
    [ubication],
    ['map-section__container', 'container'],
  );
  const section = newContainer('section', [backgroundPictura], ['map-section']);

  return section;
};

export { createrMapComponen };
