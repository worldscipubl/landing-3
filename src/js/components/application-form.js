import formService from "./LendingService";

const PopupForm = () => {
  const initForm = (formContainer) => {
    const forms = formContainer.querySelectorAll(".form-frame__item");
    // const popupActive = document.querySelector(".popup.open");
    const hideForms = () => {
      forms.forEach((form) => {
        if (form.classList.contains("active")) {
          // const popupActive = document.querySelector(".popup.open");
          // popupActive.classList.remove("open");

          form.classList.remove("active");
          const changePopupTitle = document.querySelector(".popup__title")
          const changePopupText = document.querySelector(".popup__text");
          changePopupTitle.classList.add("end")
          changePopupTitle.textContent = "Спасибо";
          changePopupText.classList.add("end", "text_size_default");
          changePopupText.textContent = "Специалист свяжется с Вами"
          changePopupText.textContent += "в ближайшее время.";


        }
      });
    };

    const showSuccessSubmit = () => {
		 hideForms();
		 console.log(forms);
      forms[1].classList.add("active");
    };

    forms[0].addEventListener("submit", (e) => {
		 e.preventDefault();
		 console.log(forms);
		 const elForm = e?.currentTarget;
		 console.log(elForm);
		 const data = formService.scrabbleInputs(elForm);
		 console.log(data);
      if (!data) return;

      formContainer.classList.add("loading");

      formService
        .sendForm(data, formService.addLead)
        .then((res) => {
          console.log(res);
          showSuccessSubmit();
        })
        .catch((err) => {

          console.log(err);
        })

        .finally(() => {

          elForm.classList.remove("loading");
        });
    });
  };

  const forms = document.querySelectorAll(".js-app-form");
  forms.forEach((form) => {
    initForm(form);
  });
};

export default PopupForm;
