// Component imports
import { defaultComp } from './components/default';
import { navigationComponent } from './components/navigation';
import { pageData } from '../data/data';

/**
 * Component map
 * each component name is mapped to its template.
 */
const components = {
  default: defaultComp,
  navigation: navigationComponent,
};

const getCurrentPage = () => {
  const path = window.location.href.split('/');
  const location = path.slice(-1)[0] || 'home';
  if (!pageData[location] || location === 'common') {
    window.location.replace('/');
  }
  return location.replace('.html', '');
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

pageInit(pageData[getCurrentPage()], pageData.common);
