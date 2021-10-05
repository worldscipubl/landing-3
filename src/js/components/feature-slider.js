import Flickity from 'flickity-as-nav-for';

const FeatureSlider = () => {
  const featureSliders = document.querySelectorAll('.js-feature-slider');

  const initSlider = (slider) => {
    window.addEventListener('load', () => {
      initFlickity(slider);
    });
  };

  const initFlickity = (sliderContainer) => new Flickity(sliderContainer, {
    draggable: true,
    cellAlign: 'left',
    prevNextButtons: false,
    pageDots: false,
    watchCSS: true,
  });

  featureSliders.forEach((promoSlider) => {
    initSlider(promoSlider);
  });
};

export default FeatureSlider;
