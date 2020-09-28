
import { newContainer, newText} from './helpers';
import { eventsComponent } from './events-highlights';

/**
 * @param {object} data;
 */

const eventsListComponent = (data) => {
    const events = data.events.map((element) => {
        const event = eventsComponent(element);
        const title = event.querySelector('.event__title');
        title.innerText= title.innerText.replace('Evento destacado:', 'Evento:');
        return event;
    });
    const titleBig = newText('h2', data.titleBig, ['event__title-big']);
    const section = newContainer('section', [ titleBig, ...events], []);
    section.id = 'scroll';
    return section;


};

export { eventsListComponent };
