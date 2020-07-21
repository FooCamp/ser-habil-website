import '../scss/main.scss';
import '../about.html';
// Component imports
import { defaultComp } from './components/default';

import { pageData } from '../data/data';

/**
 * Component map
 * each component name is mapped to its template.
 */
const components = {
  default: defaultComp,
};

const getCurrentPage = () => {
  const path = window.location.href.split('/');
  const location = path.slice(-1)[0] || 'home';
  return location.split('.html')[0];
};

/**
 * Find and return the microPage initial wrapper
 */
const getPageWrapper = () => document.querySelector('#root');

/**
 *
 * @param {object} data contains the expected page content data
 */
const pageInit = (data) => {
  const pageWrapper = getPageWrapper();

  if (pageWrapper) {
    data.sections.forEach((section) => {
      if (components[section.component]) {
        pageWrapper.appendChild(components[section.component](section));
        // eslint-disable-next-line no-console
        console.log(section.component, ' loaded!');
      } else {
        pageWrapper.appendChild(components.default(section));
        // eslint-disable-next-line no-console
        console.log(section.component, ' not found, loading default component!');
      }
    });
  } else {
    // eslint-disable-next-line no-console
    console.log('NO PAGE WRAPPER FOUND, PAGE CANT BE RENDERED');
  }
};

const getPageData = (page) => {
  if (page === 'event') {
    const params = new URLSearchParams(window.location.search);
    const found = pageData.events.find(element => element.eventId === parseInt(params.get('eventId')));
    return found || { sections: [{ message: 'event not found' }] };
  }
  return pageData[page];
};

pageInit(getPageData(getCurrentPage()));
