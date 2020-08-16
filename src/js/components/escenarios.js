import { newText, newMultimedia, newContainer } from './helpers';

const createImages = (dataImages) => {
  const arrayImages = dataImages.map((element ,number) => {
    const imagesEscenarios = newMultimedia ('img' , element ,['escenarios__image' ]);
    const textEscenarios = newText ('p', [''], ['escenarios__text']);
    textEscenarios.innerHTML = element.text;
    const containerImages = newContainer ('div', [ textEscenarios, imagesEscenarios  ], ['escenarios__container-images' , `escenarios__images--${number}`]);
    return containerImages;
  });
  return  arrayImages;
};

const escenariosComp = (data) => {
const mainTitle = newText('h1', data.title, ['escenarios__title']);
const imagesEscenarios = createImages(data.images);
const containerPrincipal = newContainer('div', [...imagesEscenarios], ['escenarios__principal-container']);
const section = newContainer('section', [ mainTitle, containerPrincipal], ['escenarios']);

return section;
}
export { escenariosComp };
