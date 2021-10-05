const FaqSpoiler = () => {
  const FaqSpoilers = document.querySelectorAll('.js-faq-spoiler');

  const initFaqSpoiler = (faq) => {
    const spoilers = faq.querySelectorAll('.spoiler');
    let activeSpoiler = null;

    spoilers.forEach((spoiler) => {
      spoiler.addEventListener('click', () => {
        if (activeSpoiler !== spoiler) {
          resetSpoilers(spoilers);
          spoiler.classList.add('active');
          activeSpoiler = spoiler;
        } else {
          spoiler.classList.remove('active');
          activeSpoiler = null;
        }
      });
    });
  };

  const resetSpoilers = (spoilers) => {
    spoilers.forEach((spoiler) => spoiler.classList.remove('active'));
  };

  FaqSpoilers.forEach((faq) => {
    initFaqSpoiler(faq);
  });
};

export default FaqSpoiler;
