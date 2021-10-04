const FaqSpoiler = () => {
  const FaqSpoilers = document.querySelectorAll('.js-faq-spoiler');

  const initFaqSpoiler = (faq) => {
    const spoilers = faq.querySelectorAll('.spoiler');

    spoilers.forEach((spoiler) => {
      spoiler.addEventListener('click', () => {
        console.log('spoiles');
        resetSpoilers(spoilers);
        spoiler.classList.add('active');
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
