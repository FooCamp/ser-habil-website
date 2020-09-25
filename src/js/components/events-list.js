
import { newContainer } from './helpers';
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
    const section = newContainer('section', events, []);
    return section;

};

export { eventsListComponent };