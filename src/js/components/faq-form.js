import formService from './LendingService';

const FaqForm = () => {
  const initForm = (formContainer) => {
    const forms = formContainer.querySelectorAll('.form-frame__item');
    const hideForms = () => {
      forms.forEach((form) => {
        if (form.classList.contains('active')) {
          form.classList.remove('active');
        }
      });
    };

    const showSuccessSubmit = () => {
      hideForms();
      forms[1].classList.add('active');
    };

    forms[0].addEventListener('submit', (e) => {
      e.preventDefault();
      const elForm = e?.currentTarget;
      const data = formService.scrabbleInputs(elForm);
      if (!data) return;

      elForm.classList.add('loading');
      formService.sendForm(data, formService.letter)
        .then((res) => {
          console.log(res);
          showSuccessSubmit();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          elForm.classList.remove('loading');
        });
    });
  };

  const forms = document.querySelectorAll('.js-faq-from');
  forms.forEach((form) => {
    initForm(form);
  });
};

export default FaqForm;
