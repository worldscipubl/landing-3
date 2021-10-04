const StepsSlider = () => {
  const sliders = document.querySelectorAll('.js-steps-slider');

  const initStepsSlider = (slider) => {
    const stepTitles = slider.querySelectorAll('.step-card__title');
    const stepImgs = slider.querySelectorAll('.steps-slider__img');
    let currentImg = null;

    stepTitles.forEach((step, index) => step.addEventListener('click',
      () => {
        resetSteps();
        stepTitles[index].parentElement?.classList.add('active');
        currentImg = stepImgs[index];
        currentImg.classList.add('active');
      }));

    const resetSteps = () => {
      stepTitles.forEach((step) => step.parentElement.classList.remove('active'));
      stepImgs.forEach((step) => step.classList.remove('active'));
    };
  };

  sliders.forEach((slider) => {
    initStepsSlider(slider);
  });
};

export default StepsSlider;
