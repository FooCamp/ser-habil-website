import { newText, newContainer } from './helpers';

/**
 * @param {Array [objectInformation]} informationArray esta función recibe un arreglo de objetos
 * y retorna una lista de elementos de información desde la data acerca del contacto con la fundación.
 * Toma el array de 'informationArray' le hace un forEach que nos crea un elemento por cada una de las
 * veces que encuentre información en la data e ingresa esta información en un contenedor,
 * así mismo crea una clase del contenedor y posterior imprime la información encontrada según el orden de
 * la data.
 */
const nodeInformation = (informationArray) => {
  const containerInformation = newContainer('div', [], ['contactUs__container-Information']);
  informationArray.forEach((item) => {
    const title = newText('h3', item.label, ['contactUs__label']);
    const paragraph = newText('p', item.texts, ['contactUs__text']);
    containerInformation.appendChild(title);
    containerInformation.appendChild(paragraph);
  });
  return containerInformation;
};

/**
 * @param {object} data objecto que contiene la información de componentes.
 * Nos devuelve unos nodos section que contienen un título y un parrafo principal y seguido de esto
 * contiene otros 3 títulos con sus respectivos parrafos en los que se encuentra la información para
 * contactarse con la fundación.
 */

const componentContactUs = (data) => {
  const title = newText('h2', data.title, ['contactUs__title']);
  const paragraph = newText('p', data.text, ['contactUs__paragraph']);
  const informationList = nodeInformation(data.contactInfo);
  const section = newContainer('section', [title, paragraph, informationList], ['contactUs']);

  return section;
};

export { componentContactUs };
