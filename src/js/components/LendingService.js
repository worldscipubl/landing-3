import ApiService from './ApiService';
import HTTPError from './HTTPError';

class FormService extends ApiService {
  addFile = 'leads'; // Загрзка файла

  letter = 'leads/letter'; // Вопрос из FAQ

  isExists = 'users/exist'; // Проверка email

  addLeadCooperation = 'leads/cooperation'; // Отправка заявки редакторов

  addLead = 'leads'; // Отправка заявки


  removeErrorInput = (input, inputHint) => {
    if (input.hasAttribute('style')) input.removeAttribute('style');
    inputHint.classList.remove('active');
    inputHint.innerHTML = '';
  };

  setErrorInput = (input, inputHint, textError) => {
    input.style.borderColor = 'red';
    inputHint.classList.add('active');
    inputHint.innerHTML = '- ' + textError;
  };

  checkInputValidation = (input, inputHint) => {
    const inputName = input.getAttribute('name');
    switch (inputName) {
      case 'rating':
        return true;
      case 'subject':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(input, inputHint, 'Не указана тематика!');
        return false;
      case 'email':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(input, inputHint, 'Недопустимый email!');
        return false;
      case 'phone':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(
          input,
          inputHint,
          'Недопустимый номер телефона!',
        );
        return false;
      case 'name':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(input, inputHint, 'Как к Вам обращаться?');
        return false;
      case 'massage':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(input, inputHint, 'Введите свой вопрос');
        return false;
      case 'issn':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(input, inputHint, 'Укажите ISSN');
        return false;
      case 'scientificDirection':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(input, inputHint, 'Укажите научное направление');
        return false;
      case 'linkAuthorScopus':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(input, inputHint, 'Не указана ссылка на профиль');
        return false;
      case 'Lead[file]':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(input, inputHint, 'Загрузите файл!');
        return false;
      case 'coupon':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(input, inputHint, 'Введите промокод!');
        return false;
      case 'message':
        if (input.validity.valid) {
          this.removeErrorInput(input, inputHint);
          return true;
        }
        this.setErrorInput(input, inputHint, 'Заполните поле!');
        return false;
      default:
        return true;
    }
  };

  scrabbleInputs = (currentForm) => {
    const formData = new FormData();
    const fields = currentForm.querySelectorAll('.field');
    let isFormValid = true;

    fields.forEach((field) => {
      const input = field.querySelector('input, textarea, select');
      const inputHint = field.querySelector('.field__error');
      const isInputValid = this.checkInputValidation(input, inputHint);
      isFormValid &= isInputValid;
      if (!isInputValid) return;

      const inputType = input.getAttribute('type');
      switch (inputType) {
        case 'file':
          formData.append('Lead[file]', input.files[0]);
          break;
        case 'radio':
          if (input.checked) formData.append(input.name, input.value);
          break;
        default:
          formData.append(input.name, input.value);
          console.log(formData);
          break;
      }


      let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + "partnerId".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      let partnerId = matches ? decodeURIComponent(matches[1]) : undefined;
      if (partnerId) {
        formData.append('partnerId', partnerId);
      }

      let cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [ name, value ] = cookie.split('=').map(c => c.trim());
        cookies[name] = value;
        return cookies;
      }, {});
      if (cookies) {
        formData.append('metrics', JSON.stringify(cookies));
      }
    });

    if (!isFormValid) return null;
    if (currentForm.hasAttribute('name')) {
      formData.append('formName', currentForm.getAttribute('name'));
    }
    return formData;
  };

  sendForm = (data, url) => new Promise((resolve, reject) => {
    this.setResource({
      url,
      data,
    })
      .then((response) => {
        if (response?.data?.warning) {
          const warnings = Array(Object.values(response.data.warning))
            .join(' ');
          reject(new Error(warnings));
        }
        resolve(response.data);
      })
      .catch((reason) => {
        reject(reason);
      });
  });

  sendFormGet = (data, url) => new Promise((resolve, reject) => {
    this.getResource({
      url,
      data,
    })
        .then((response) => {
          if (response?.data?.warning) {
            const warnings = Array(Object.values(response.data.warning))
                .join(' ');
            reject(new Error(warnings));
          }
          resolve(response.data);
        })
        .catch((reason) => {
          reject(reason);
        });
  });
}

const formService = new FormService();
export default formService;
