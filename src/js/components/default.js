/**
 * @param {object} data contains the expected page content data
 * returns a default component to show the provided information.
 */
const defaultComp = (data) => {
  const section = document.createElement('SECTION');
  section.classList.add('default');
  section.textContent = JSON.stringify(data);
  return section;
};

export { defaultComp };
export default 'defaultComp';
