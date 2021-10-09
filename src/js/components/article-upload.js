const ArticleUploader = () => {
  const articleUpholders = document.querySelectorAll('.js-article-upload');

  const initArticleUploader = (uploader) => {
    const fieldFile = uploader.querySelector('.js-article-upload-input');
    const inputSurrogate = uploader.querySelector('.field-file__input-surrogate');

    uploader.addEventListener('dragover', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    uploader.addEventListener('dragleave', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    uploader.addEventListener('drop', (e) => {
      e.stopPropagation();
      e.preventDefault();
      handleDrop(e);
    });

    const handleFiles = (files) => {
      fieldFile.files = files;
      setInputState(files);
    };

    const handleDrop = (e) => {
      const { files } = e.dataTransfer;
      handleFiles(files);
    };

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

  articleUpholders.forEach((uploader) => {
    initArticleUploader(uploader);
  });
};

export default ArticleUploader;
