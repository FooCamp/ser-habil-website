/**
 * @param {htmlNode} element es el nodo html al cual vamos a crear las clases
 * @param {array[string]} classes es un array de string de todas las clases que se quieren insertar
 * retorna un nodo html con clases asignadas
 */
const assingClasses = (element, classes = []) => {
  classes.forEach((className) => {
    element.classList.add(className);
  });
  return element;
};

/**
 * @param {string} tag es el tipo de etiqueta que se va a crear
 * @param {array[string]} classes es un array de string de todas las clases que se quieren insertar
 *
 * retorna un nodo html con clases asignadas
 */
const createTagWithClasses = (tag, classes) => {
  let element = document.createElement(tag);
  element = assingClasses(element, classes);
  return element;
};

/**
 * @param {string} type es el tipo de etiqueta que se va a crear
 * @param {array[htmlNode]} content es un array de nodos de html que se pegaran dentro
 * del contenedor(este parametro es opcional)
 * @param {array[string]} classes es un array de string de todas las clases que se
 * quieren insertar(este parametro es opcional)
 *
 * retorna un nodo tipo contenedor con los elementos recibidos y clases asignadas
 */
const newContainer = (type, content = [], classes = []) => {
  const oneElement = createTagWithClasses(type, classes);
  content.forEach((element) => {
    oneElement.appendChild(element);
  });
  return oneElement;
};

/**
 * @param {string} type es el tipo de etiqueta que se va a crear
 * @param {string} content es el texto que queremos colocar dentro de la etiqueta
 * @param {array[string]} classes es un array de string de todas las clases que se
 *  quieren insertar(este parametro es opcional)
 * retorna un nodo de texto con su contenido y clases asignadas
 */
const newText = (type, content, classes = []) => {
  const oneElement = createTagWithClasses(type, classes);
  oneElement.innerText = content;
  return oneElement;
};

/**
 * @param {string} href es la direccion a la que queremos que lleve el link
 * @param {string} text el texto que queremos que se vea en el link
 * @param {array[string]} classes es un array de string de todas las
 *  clases que se quieren insertar(este parametro es opcional)
 *
 * retorna un nodo link y clases asignadas
 */
const newLink = (href, text, classes = []) => {
  const oneElement = createTagWithClasses('a', classes);
  oneElement.innerText = text;
  oneElement.href = href;
  return oneElement;
};

/**
 * @param {string} type es el tipo de etiqueta que se va a crear
 * @param {object} imgData
 * @param {string} imgData.src es el src de la imagen
 * @param {string} imgData.alt es el alt de la imagen
 * @param {array[string]} classes es un array de string de todas las clases
 *  que se quieren insertar(este parametro es opcional)
 *
 * retorna un nodo de multimedia con su imagen o video y clases asignadas
 */
const newMultimedia = (type, { src, alt }, classes = []) => {
  const oneElement = createTagWithClasses(type);
  const container = newContainer('div', [oneElement], classes);
  oneElement.src = src || '';
  oneElement.alt = alt || '';

  return container;
};

export { newContainer, newText, newLink, newMultimedia };
