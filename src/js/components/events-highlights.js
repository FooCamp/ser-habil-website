import { newContainer, newText, newLink, newMultimedia } from './helpers';

/**
 * @param {array[string]} arrayMoreinfo es un array de string de la data con titulos y textos
 * esta funcion e devuelve un div con varios divs adentro que en su interior cada uno tiene un titilo y texto
 */
const buildMoreInfo = (arrayMoreinfo) => {
  const moreInfoContainer = newContainer('div', [], ['event__more-info']);
  arrayMoreinfo.forEach((element) => {
    const title = newText('h3', element.text, ['more-info__text']);
    const text = newText('p', element.description, ['more-info__description']);
    const wraper = newContainer('div', [title, text], ['more-info__wraper']);
    moreInfoContainer.appendChild(wraper);
  });
  return moreInfoContainer;
};

const eventsComponent = (data) => {
  const title = newText('h1', `Evento destacado: ${data.title}`, ['event__title']);
  const eventImage = newMultimedia('img', data.image, ['event__image']);
  const text = newText('p', data.text, ['event__text']);
  const moreInfo = buildMoreInfo(data.moreInfo);
  const link = newLink(data.buttonInfo.link, data.buttonInfo.text, []);
  link.target = '_blank';
  link.rel = 'noopener';
  const wraperLink = newContainer('div', [link], ['event__link']);
  console.log(data.buttonInfo.text);
  const sectionClasses = data.featured ? ['event', 'feature'] : ['event'];
  const section = newContainer(
    'section',
    [eventImage, title, text, moreInfo, wraperLink],
    sectionClasses,
  );

  return section;
};

export { eventsComponent };
