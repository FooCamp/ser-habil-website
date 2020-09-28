import { newText, newContainer, newLink, newInput } from './helpers';

const formInformation = (dataForm) => {
  const arrayFields = newContainer('div', [], ['form__container']);
  dataForm.forEach((element, number, input) => {
    const labelsInput = newText('label', element.label, ['form__labels']);
    const inputInfo = newInput({ element }, ['form__inputs']);
    inputInfo.placeholder = element.placeholder;
    inputInfo.type = element.type;
    const errorMsg = newText('p', element.message, ['form__error-msg']);

    inputInfo.addEventListener('keydown', function (event) {
      const formInputs = inputInformation.querySelectorAll('.form__input');
      const errorInputs = inputInformation.querySelectorAll('.form__error-msg');
      if (input.value){

      }

      });

    const containerLabels = newContainer(
      'div',
      [labelsInput, inputInfo, errorMsg],
      ['form__wrapers', `form__wrapers--${number}`],
    );
    arrayFields.appendChild(containerLabels);

  });
  return arrayFields;
};

const componentContactForm = (data) => {
  const title = newText('h2', data.title, ['form__title']);
  const paragraph = newText('p', data.text, ['form__paragraph']);
  const inputInformation = formInformation(data.formFields);
  const buttonText = newText('p', data.buttonInfo.text, ['form__button-text']);
  const formButton = newContainer('button', [buttonText], ['form__button']);

  formButton.addEventListener('click', function (event) {
    event.preventDefault();
    const formInputs = inputInformation.querySelectorAll('.form__input');
    const errorInputs = inputInformation.querySelectorAll('.form__error-msg');
    formInputs.forEach((input, index) => {
      if (input.value) {
        console.log('I got a value');
      } else {
        errorInputs[index].classList.add('form__error-msg--visible');
      }
    });
  });

  const formSection = newContainer(
    'section',
    [title, paragraph, inputInformation, formButton],
    ['form', 'container'],
  );
  formSection.id = 'scroll';
  return formSection;
};

export { componentContactForm };
