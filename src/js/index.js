// Component imports
import { defaultComp } from './components/default';
import { navigationComponent } from './components/navigation';
import { componentIntro } from './components/intro';
import { scrollIndicator } from './components/scroll-indicator';
import { programsComp } from './components/programs';
import { scenariosComp } from './components/scenarios';
import { eventsCarousel } from './components/events-carousel';
import { footerComp } from './components/footer';
import { createrMapComponen } from './components/ubication';
import { pageData } from '../data/data';
import { componentContactUs } from './components/contact';
import { imageComponet } from './components/image-fundacion';
import { eventsComponent } from './components/events-highlights';

/**
 * Component map
 * each component name is mapped to its template.
 */
const components = {
  default: defaultComp,
  navigation: navigationComponent,
  hero: componentIntro,
  'scroll-indicator': scrollIndicator,
  programs: programsComp,
  scenarios: scenariosComp,
  events: eventsCarousel,
  footer: footerComp,
  ubication: createrMapComponen,
  contactUs: componentContactUs,
  imagenFundation: imageComponet,
  featuredEvent: eventsComponent,
};

const getCurrentPage = () => {
  const clean = window.location.href.split('#');
  const path = clean[0].split('/');
  const location = path.slice(-1)[0].replace('.html', '') || 'home';

  if (!pageData[location] || location === 'common') {
    window.location.replace('/');
  }

  return location;
};

/**
 * Find and return the microPage initial wrapper
 */
const getPageWrapper = () => document.querySelector('#root');

/**
 *
 * @param {NodeElement} wrapper container of the sections
 * @param {array} sections element to append in the wrapper
 */
const appendSections = (sections) => {
  const pageWrapper = getPageWrapper();

  if (!pageWrapper) {
    console.log('NO PAGE WRAPPER FOUND, PAGE CANT BE RENDERED');
    return;
  }

  sections.forEach((section) => {
    if (components[section.component]) {
      pageWrapper.appendChild(components[section.component](section));
      // eslint-disable-next-line no-console
      console.log(section.component, 'loaded!');
    } else {
      pageWrapper.appendChild(components.default(section));
      // eslint-disable-next-line no-console
      console.log(section.component, 'not found, loading default component!');
    }
  });
};

/**
 *
 * @param {object} data contains the expected page content data
 * @param {object} layout
 * @param {object} layout.initalSections common elements in top of the page
 * @param {object} layout.finalSections common elements at the end of the page
 */
const pageInit = (data, { initalSections, finalSections }) => {
  appendSections(initalSections);
  appendSections(data.sections);
  appendSections(finalSections);
};

console.log(getCurrentPage());

pageInit(pageData[getCurrentPage()], pageData.common);
