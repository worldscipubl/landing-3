const StepsSlider = () => {
  const sliders = document.querySelectorAll('.js-steps-slider');

  const initStepsSlider = (slider) => {
    const stepsTitle = slider.querySelectorAll('.step-card__title');

    stepsTitle.forEach((step, index) => step.addEventListener('click', (e) => {
      resetSteps();
      stepsTitle[index].parentElement?.classList.add('active');
    }));

    const resetSteps = () => {
      stepsTitle.forEach((step) => step.parentElement.classList.remove('active'));
    };
  };

  sliders.forEach((slider) => {
    initStepsSlider(slider);
  });
};

export default StepsSlider;
