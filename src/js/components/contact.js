import { newText, newContainer } from './helpers';

/**
 * @param {Array [textsInformation]} textsArray esta función recibe un arreglo de strings
 * Esta función utiliza un ForEach o un map para recorrer el arreglo textsArray y devolvernos un arreglo
 * de textos, o también puede devolver un único nodo con varios textos en su interior.
 */

const createrTexts = (textsArray) => {
  const textsList = textsArray.map((element) => {
    const contactTexts = newText('p', element, ['contact__texts']);
    return contactTexts;
  });
  return textsList;
};

/**
 * @param  informationArray esta función recibe un arreglo de objetos
 * Esta función retorna un nodo de elementos de información desde la data acerca del contacto con la fundación.
 * Toma el array de 'informationArray' le hace un forEach que nos crea un elemento por cada una de las
 * veces que encuentre información en la data e ingresa esta información en un contenedor,
 * así mismo crea una clase del contenedor y posterior imprime la información encontrada según el orden de
 * la data.
 */

const nodeInformation = (informationArray) => {
  const containerInformation = newContainer('div', [], ['contact__container-Information']);
  informationArray.forEach((item, index) => {
    const title = newText('h3', item.label, ['contact__label']);
    const paragraph = createrTexts(item.texts);
    const informationTexts = newContainer(
      'div',
      [title, ...paragraph],
      ['contact__information-texts', `contact__information-texts--${index}`],
    );
    containerInformation.appendChild(informationTexts);
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
  const title = newText('h2', data.title, ['contact__title']);
  const paragraph = newText('p', data.text, ['contact__paragraph']);
  const informationList = nodeInformation(data.contactInfo);
  const section = newContainer(
    'section',
    [title, paragraph, informationList],
    ['contact', 'container'],
  );

  return section;
};

export { componentContactUs };
