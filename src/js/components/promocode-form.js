import formService from './LendingService';

const PromoCodeFrom = () => {
  const initForm = (form) => {
    const fieldError = form.querySelector('.form-promocode__error');
    const btnGetPromocode = form.querySelector('.form-promocode__get-promocode');
    const auditForm = document.querySelector('.js-article-upload');
    const couponField = form.querySelector('[name="coupon"]');
    const couponEmail = form.querySelector('[name="email"]');

    const currentURL = new URL(window.location.href);
    const couponFromURL = currentURL.searchParams.get('c');
    const emailFromURL = currentURL.searchParams.get('e');
    couponField.value = couponFromURL;
    couponEmail.value = emailFromURL;

    const showAuditForm = () => {
      auditForm.classList.remove('audit-form_blur');
      form.remove();
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const elForm = e?.currentTarget;
      const data = formService.scrabbleInputs(elForm);
      if (!data) return;

      form.classList.add('loading');
      formService.sendForm(data, formService.addLead)
        .then((res) => {
          console.log(res);
          showAuditForm();
        })
        .catch((err) => {
          fieldError.innerText = err?.message;
        })
        .finally(() => {
          form.classList.remove('loading');
        });
    });

    btnGetPromocode.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      couponField.value = '1OX8CVBOYF';
    });
  };

  const forms = document.querySelectorAll('.js-promo-form');
  forms.forEach((form) => {
    initForm(form);
  });
};

export default PromoCodeFrom;
