import formService from './LendingService';
import CustomSelect from './custom-select';
import ArticleUploader from './article-upload';
import FieldFile from './field-file';

const AuditFrom = () => {
  CustomSelect();
  FieldFile();
  ArticleUploader();
  const initForm = (form) => {
    const submittedFrame = form.parentNode.querySelector('.audit-form__submitted');
    const elEmail = submittedFrame.querySelector('.js-audit-from-email');

    const showSuccessSubmit = (email = '') => {
      form.remove();
      submittedFrame.classList.add('active');
      elEmail.innerHTML = email;
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const elForm = e?.currentTarget;
      const data = formService.scrabbleInputs(elForm);
      if (!data) return;

      const email = data.get('email');
      elForm.classList.add('loading');
      formService.sendAuditForm(data)
        .then((res) => {
          console.log(res);
          showSuccessSubmit(email);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          elForm.classList.remove('loading');
        });
    });
  };

  const forms = document.querySelectorAll('.js-audit-from');
  forms.forEach((form) => {
    // initForm(form);
  });
};

export default AuditFrom;
