import axios from 'axios';

const Forms = () => {
  function initForm(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const elForm = e?.currentTarget;
      const data = scrabbleInputs(elForm);
      quizSuccess(form);
      if (!data) return;
      sendForm(data, elForm);
    });
  }

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

  const clearFrom = (currentForm) => {
    currentForm.reset();
  };

  const sendForm = (sendData, currentForm) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': 'http://localhost:8848/',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type,' + ' Accept',
    };

    /* Для отладки испольховать: */
    // const base_url = 'https://worldscipubl.com/main-test/';

    const base_url = '/main/'; // Базовый URL
    const file_ep = 'add-file/'; // Загрзка файла
    const letter_ep = 'letter/'; // Вопрос из FAQ
    const is_exists = 'is-exists/'; // Проверка email
    const add_lead = 'add-lead/'; // Отправка заявки

    let url = base_url;

    if (sendData.get('file')) {
      url += file_ep;
    } else if (sendData.get('text')) {
      url += letter_ep;
    } else {
      url += add_lead;
    }

    // _button.style.pointerEvents = 'none';
    // loadProgressBar();

    axios.post(
        url,
        sendData,
        { withCredentials: true },
        { headers: headers },
    )
        .then((response) => {
          const resData = response.data;
          if (resData.warning) {
            // const error = resData.warning?.error;
          }
          triggerGoal(currentForm.name); // Фиксируем цель
          clearFrom(currentForm); // Отчищаем форму
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // _button.style.pointerEvents = 'auto';
        });
  };

  const scrabbleInputs = (currentForm) => {
    const formData = new FormData();
    const fields = currentForm.querySelectorAll('.field');
    let isFormValid = true;

    fields.forEach((field) => {
      const input = field.querySelector('input, textarea, select');
      const inputHint = field.querySelector('.field__error');
      const isInputValid = checkInputValidation(input, inputHint);
      isFormValid &= isInputValid;
      if (!isInputValid) return;

      const inputType = input.getAttribute('type');
      switch (inputType) {
        case 'file':
          formData.append('file', input.files[0]);
          break;
        case 'radio':
          if (input.checked) formData.append(input.name, input.value);
          break;
        default:
          formData.append(input.name, input.value);
          break;
      }
    });

    if (!isFormValid) return null;
    if (csrfToken) formData.append('csrfToken', csrfToken);
    formData.append('formsended', currentForm?.name);
    return formData;
  };

  const checkInputValidation = (input, inputHint) => {
    const inputName = input.getAttribute('name');
    switch (inputName) {
      case 'rating':
        return true;
      case 'subject':
        if (input.validity.valid) {
          removeErrorInput(input, inputHint);
          return true;
        }
        setErrorInput(input, inputHint, 'Не указана тематика!');
        return false;
      case 'email':
        if (input.validity.valid) {
          removeErrorInput(input, inputHint);
          return true;
        }
        setErrorInput(input, inputHint, 'Недопустимый email!');
        return false;
      case 'phone':
        if (input.validity.valid) {
          removeErrorInput(input, inputHint);
          return true;
        }
        setErrorInput(
            input,
            inputHint,
            'Недопустимый номер телефона!',
        );
        return false;
      case 'name':
        if (input.validity.valid) {
          removeErrorInput(input, inputHint);
          return true;
        }
        setErrorInput(input, inputHint, 'Как к Вам обращаться?');
        return false;
      case 'file':
        if (input.validity.valid) {
          removeErrorInput(input, inputHint);
          return true;
        }
        setErrorInput(input, inputHint, 'Загрузите файл!');
        return false;
      case 'coupon':
        if (input.validity.valid) {
          removeErrorInput(input, inputHint);
          return true;
        }
        setErrorInput(input, inputHint, 'Введите промокод!');
        return false;
      case 'text':
        if (input.validity.valid) {
          removeErrorInput(input, inputHint);
          return true;
        }
        setErrorInput(input, inputHint, 'Заполните поле!');
        return false;
      default:
        return true;
    }
  };

  const removeErrorInput = (input, inputHint) => {
    if (input.hasAttribute('style')) input.removeAttribute('style');
    inputHint.classList.remove('active');
    inputHint.innerHTML = '';
  };

  const setErrorInput = (input, inputHint, textError) => {
    input.style.borderColor = 'red';
    inputHint.classList.add('active');
    inputHint.innerHTML = '- ' + textError;
  };

  const quizSuccess = (form) => {
    const quizFormTitle = form.node;
    quizFormTitle.innerHTML = 'Спасибо, данные получены. <br> Ответ поступит на указанный e-mail.';
    form.remove();
  };

  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    initForm(form);
  });
};

export default Forms;