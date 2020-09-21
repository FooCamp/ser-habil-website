import { newText, newMultimedia, newContainer } from './helpers';

/**
 * @param {Array [objectImages]} imagesArrays esta función recibe un arreglo de objetos y retorna una lista de imagenés
 * Toma el array de 'imagesArrays' le coloca un map que nos crean una imagen por elemento
 * del array y nos coloca una clase y un modificador que cambia según el número de elementos llamados y nos retorna
 * un array de nodos de imagénes.
 */
const nodeImages = (imagesArrays) => {
  const imagesList = imagesArrays.map((image, index) => {
    const imageIntro = newMultimedia('img', image, ['intro__image', `intro__image--${index}`]);
    return imageIntro;
  });
  return imagesList;
};
const nodeText = (textArray) => {
  const textsList = textArray.map((text) => {
    const textNodes = newText ('p', text , [ 'intro__texts'] )
    return textNodes;
  });
  return textsList;
};
/**
 * @param {object} data objecto que contiene la información de componentes.
 * Nos devuelve unos nodos section que contienen un parrafo, un título, dos imagenes principales y dos de fondo.
 */
const componentIntro = (data) => {
  const paragraph = newText('p', data.text, ['intro__paragraph']);
  const title = newText('h2', data.title, ['intro__title']);
  const imageIntro = nodeImages(data.images);

  let textNodes = [];
  if (data.texts) textNodes = nodeText(data.texts);
  const textIntro = newContainer( 'div', [...textNodes], ['intro__texts-conteiner'])

  // eslint-disable-next-line prettier/prettier
  const containerGeneral = newContainer('div', [...imageIntro, title, paragraph, textIntro], ['intro__container-general']);
  const section = newContainer('section', [containerGeneral ], ['intro']);

  return section;
};

// eslint-disable-next-line import/prefer-default-export
export { componentIntro };
