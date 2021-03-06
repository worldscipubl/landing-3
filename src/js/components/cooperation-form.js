import formService from './LendingService';
import { post } from 'axios';

const CooperationFrom = () => {
  const initForm = (form) => {
    const forms = form.querySelectorAll('.form-frame__item');
    const formError = forms[0].querySelectorAll('.form-frame__error');
    const showSuccessSubmit = () => {
      hideForms();
      forms[1].classList.add('active');
    };

    const hideForms = () => {
      forms.forEach((form) => {
        if (form.classList.contains('active')) {
          form.classList.remove('active');
        }
      });
    };

    forms[0].addEventListener('submit', (e) => {
      e.preventDefault();
      const elForm = e?.currentTarget;
      const data = formService.scrabbleInputs(elForm);
      if (!data) return;
      form.classList.add('loading');

      formService.sendForm(data, formService.addLeadCooperation)
          .then((res) => {
            console.log(res);
            showSuccessSubmit();
          })
          .catch((err) => {
            console.log(err);
            formError.innerText = err?.message;
          })
          .finally(() => {
            form.classList.remove('loading');
          });
    });
  };

  const forms = document.querySelectorAll('.js-cooperation-from');
  forms.forEach((form) => {
    initForm(form);
  });
};

export default CooperationFrom;
