const FieldFile = () => {
  const fileFields = document.querySelectorAll('.js-field-file');

  const initFileField = (fileField) => {
    const inputOriginal = fileField.querySelector('.field-file__input-original');
    const inputSurrogate = fileField.querySelector('.field-file__input-surrogate');
    inputOriginal.addEventListener('change', (e) => {
      const input = e.target;
      setInputState(input?.files);
    }, false);

    const setInputState = (files) => {
      if (!files.length) {
        const fileName = inputSurrogate.dataset?.placeholder.toString();
        inputSurrogate.innerText = fileName;
        if (inputSurrogate.classList.contains('active')) {
          inputSurrogate.classList.remove('active');
        }
      }

      if (files.length > 1) {
        const fileName = inputSurrogate.dataset?.manyFile.toString();
        inputSurrogate.innerText = fileName;
        inputSurrogate.classList.add('active');
      } else {
        const fileName = files[0].name;
        inputSurrogate.innerText = fileName;
        inputSurrogate.classList.add('active');
      }
    };
  };

  fileFields.forEach((fileField) => {
    initFileField(fileField);
  });
};

export default FieldFile;
