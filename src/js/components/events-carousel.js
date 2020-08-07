import { newText, newContainer, newMultimedia } from './helpers'

const eventsCarousel = (data) => {
const title = newText ('h1', data.title, ['carousel_title']);
const images = newContainer( 'img', [] ['carousel_image']);
images.src = data.images.src;
images.alt = data.images.alt;
const section = newContainer('section', [title, images ], ['carousel']);

  return section;
};

export { eventsCarousel };
