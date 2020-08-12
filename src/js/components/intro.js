import { newText, newMultimedia, newContainer } from './helpers';

/**
 * @param {Array [objectImages]} imagesArrays es un array de imagenes de la data
 * Toma el array de 'imagesArrays' le coloca un map que nos crean una imagen por elemento
 * del array y nos coloca una clase y un modificador que cambia según el número de elementos llamados y nos retorna
 * un array de nodos de imagénes.
 */
const nodeImages = (imagesArrays) => {
  const imagesList = imagesArrays.map((image, index) => {
    const imageIntro = newMultimedia('img', image, ['Intro__image', `Intro__image--${index}`]);
    return imageIntro;
  });
  return imagesList;
};

/**
 * @param {object} data objecto que contiene la información de componentes.
 * Nos devuelve unos nodos section que contienen un parrafo, un título, dos imagenes principales y dos de fondo.
 */
const componentIntro = (data) => {
  const paragraph = newText('p', data.text, ['Intro__paragraph']);
  const title = newText('h2', data.title, ['Intro__title']);
  const imageIntro = nodeImages(data.images);
  // eslint-disable-next-line prettier/prettier
  const containerGeneral = newContainer('div', [...imageIntro, title, paragraph], ['Intro__containerGeneral']);
  const section = newContainer('section', [containerGeneral], ['Intro']);

  return section;
};

// eslint-disable-next-line import/prefer-default-export
export { componentIntro };
