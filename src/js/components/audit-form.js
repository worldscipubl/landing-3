import formService from './LendingService';
import CustomSelect from './custom-select';
import ArticleUploader from './article-upload';
import FieldFile from './field-file';

const AuditFrom = () => {
  CustomSelect();
  FieldFile();
  ArticleUploader();
  const initForm = (formContainer) => {
    const forms = formContainer.querySelectorAll('.form-frame__item');
    const elEmail = forms[2].querySelector('.js-audit-from-email');

    const showSuccessSubmit = () => {
      hideForms();
      forms[2].classList.add('active');
    };

    const showToCabinet = () => {
      hideForms();
      forms[3].classList.add('active');
    };

    const showFileUploadForm = (email) => {
      elEmail.innerText = email;
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

    const sendAddLead = (data) => {
      const email = data.get('email');
      formService.sendForm(data, formService.addLead)
        .then((res) => {
          console.log(res);
          showFileUploadForm(email);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          formContainer.classList.remove('loading');
        });
    };

    forms[0].addEventListener('submit', (e) => {
      e.preventDefault();
      const elForm = e?.currentTarget;
      const data = formService.scrabbleInputs(elForm);
      if (!data) return;
      formContainer.classList.add('loading');
      formService.sendForm(data, formService.isExists)
        .then((res) => {
          console.log(res);
          if (!res) {
            showToCabinet();
            triggerGoal(forms[0].getAttribute('name'));
          } else {
            sendAddLead(data);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          formContainer.classList.remove('loading');
        });
    });
    forms[1].addEventListener('submit', (e) => {
      e.preventDefault();
      const elForm = e?.currentTarget;
      const data = formService.scrabbleInputs(elForm);
      if (!data) return;
      console.log(elEmail.textContent);
      data.append('email', elEmail.textContent);
      formContainer.classList.add('loading');
      formService.sendForm(data, formService.addFile)
        .then((res) => {
          console.log(res);
          showSuccessSubmit();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          formContainer.classList.remove('loading');
        });
    });
  };

  const triggerGoal = (currentGoal) => {
    /* этот код создает цель в метрике */
    console.log('Сработала метрика: ' + currentGoal);

    if (localStorage.getItem(currentGoal) === null) {
      localStorage.setItem(currentGoal, currentGoal);

      if (typeof yaCounter50181778 !== 'undefined') {
        yaCounter50181778.reachGoal(currentGoal);
        console.log('reachGoal: ' + currentGoal);
      }
    }
    if (currentGoal != 'question_1') {
      if (localStorage.getItem('form') === null) {
        localStorage.setItem('form', 'form');
        if (typeof yaCounter50181778 !== 'undefined') {
          yaCounter50181778.reachGoal('form');
          console.log('reachGoal: form');
        }
      }
    }
  };

  const forms = document.querySelectorAll('.js-audit-from');
  forms.forEach((form) => {
    initForm(form);
  });
};

export default AuditFrom;
