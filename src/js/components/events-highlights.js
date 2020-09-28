import { newContainer, newText, newLink, newMultimedia } from './helpers';

/**
 * @param {array[string]} arrayMoreinfo es un array de string de la data con titulos y textos
 * esta funcion e devuelve un div con varios divs adentro que en su interior cada uno tiene un titilo y texto
 */
const buildMoreInfo = (arrayMoreinfo) => {
  const moreInfoContainer = newContainer('div', [], ['event__more-info']);
  arrayMoreinfo.forEach((element) => {
    const texTitle = element.text + ':';
    const title = newText('h3', texTitle, ['more-info__text']);
    const text = newText('p', element.description, ['more-info__description']);
    const wraper = newContainer('div', [title, text], ['more-info__wraper']);
    moreInfoContainer.appendChild(wraper);
  });
  return moreInfoContainer;
};

const eventsComponent = (data) => {
  const titleDesktop = newText('h1', `${data.evento} ${data.title}`, ['event__title-desktop']);
  const title = newText('h3', `${data.evento} ${data.title}`, ['event__title']);
  const eventImage = newMultimedia('img', data.image, ['event__image']);
  const text = newText('p', data.text, ['event__text']);
  const moreInfo = buildMoreInfo(data.moreInfo);
  const link = newLink(data.buttonInfo.link, data.buttonInfo.text, []);
  link.target = '_blank';
  link.rel = 'noopener';
  const wraperLink = newContainer('div', [link], ['event__link']);
  const sectionClasses = data.featured
    ? ['container', 'event', 'event__feature']
    : ['container', 'event'];
  const wrapergeneral = newContainer(
    'div',
    [titleDesktop, text, moreInfo, wraperLink],
    ['event__wraper'],
  );
  const wraperTextGeneral = newContainer('div', [wrapergeneral], []);
  const wraperimage = newContainer('div', [], ['event__decoration']);
  const wraperImageGeneral = newContainer('div', [title, eventImage], ['event__wraper-image']);
  const containerWraper = newContainer(
    'div',
    [wraperImageGeneral, wraperTextGeneral],
    ['event__organitation'],
  );
  const section = newContainer('section', [wraperimage, containerWraper], sectionClasses);

  return section;
};

export { eventsComponent };
