import { newContainer } from './helpers';

const slider = (data) => {
  const div = document.createElement('div');
  const section = newContainer ('section', [div],[]);
  section.id = 'scroll';

  return section;
};

export { slider };

