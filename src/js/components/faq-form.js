import formService from './LendingService';

const FaqForm = () => {
  const initForm = (form) => {
    const submittedFrame = form.parentNode.querySelector('.audit-form__submitted');

    const showSuccessSubmit = () => {
      form.remove();
      submittedFrame.classList.add('active');
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const elForm = e?.currentTarget;
      const data = formService.scrabbleInputs(elForm);
      if (!data) return;

      elForm.classList.add('loading');
      formService.sendFaqForm(data)
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
