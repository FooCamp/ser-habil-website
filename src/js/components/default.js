import { newContainer, newText } from './helpers';

/**
 * @param {object} data contains the expected page content data
 * returns a default component to show the provided information.
 */
const defaultComp = (data) => {
  const title = newText('h1', data.component);
  const text = newText('p', JSON.stringify(data));
  const section = newContainer('section', [title, text], ['default']);
  return section;
};

export { defaultComp };
