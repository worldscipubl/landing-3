import Flickity from 'flickity-as-nav-for';

const PromoSlider = () => {
  const promoSliders = document.querySelectorAll('.js-promo-slider');

  const initSlider = (slider) => {
    const tabsContainer = slider.querySelector('.promo-slider__tabs');
    const slideContainer = slider.querySelector('.promo-slider__content');
    const slides = slideContainer.querySelectorAll('.promo-slider__page');

    const initSlides = (slide) => {
      if (!slide) return;
      slide.classList.add('promo-slider__page_init');
    };

    window.addEventListener('load', () => {
      slides.forEach((slide) => initSlides(slide));
      initFlickity(slideContainer);
      initFlickityNav(tabsContainer, slideContainer);
    });
  };

  const initFlickity = (sliderContainer) => new Flickity(sliderContainer, {
    draggable: true,
    prevNextButtons: false,
    pageDots: false,
  });

  const initFlickityNav = (sliderContainer, navForContainer) => new Flickity(sliderContainer, {
    asNavFor: navForContainer,
    cellAlign: 'left',
    draggable: true,
    groupCells: true,
    contain: true,
    pageDots: false,
    prevNextButtons: false,
  });

  const createTabsContainer = () => {
    const tabsContainer = document.createElement('ul');
    tabsContainer.classList.add('promo-slider__tabs');
    return tabsContainer;
  };

  const createTab = (preTitle) => {
    const tab = document.createElement('li');
    tab.className = 'button button_primary promo-slider__tab';
    tab.innerText = preTitle;
    return tab;
  };

  promoSliders.forEach((promoSlider) => {
    initSlider(promoSlider);
  });
};

export default PromoSlider;
