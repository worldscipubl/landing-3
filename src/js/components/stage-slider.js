import Flickity from 'flickity';
import FlickityNav from 'flickity-as-nav-for';
import 'flickity/dist/flickity.min.css';

const StageSlider = () => {
  const sliders = document.querySelectorAll('.js-stage-slider');

  const initSlider = (slider) => {
    const createNavbarList = () => {
      const navbarList = document.createElement('ul');
      navbarList.classList.add('stage-slider__navbar');
      slider.insertBefore(navbarList, contentList);
      return navbarList;
    };
    const contentList = slider.querySelector('.stage-slider__content');
    const navbarList = createNavbarList();

    // eslint-disable-next-line no-unused-vars
    const flickitySlider = new Flickity(contentList, {
      cellAlign: 'left',
      draggable: false,
      prevNextButtons: false,
      pageDots: false,
    });

    const addNavbarItem = ({
      preTitle,
      preImg = '',
    }) => {
      const navCard = document.createElement('li');
      navCard.classList.add('stage-slider__nav-card');
      const html = `<h3 class="text text_weight_bold mt-1em">${preTitle}</h3><img class="stage-slider__nav-card-img" src="${preImg}" alt="${preTitle}">`;
      navCard.insertAdjacentHTML('beforeend', html);
      navbarList.appendChild(navCard);
    };

    const slides = contentList.querySelectorAll('.stage-slider__slide');
    slides.forEach((slide) => {
      const preTitle = slide.getAttribute('data-pre-title');
      const preImg = slide.getAttribute('data-pre-img');
      addNavbarItem({
        preTitle,
        preImg,
      });
    });
    const flickitySliderNav = new FlickityNav(navbarList, {
      asNavFor: contentList,
      groupCells: true,
      contain: true,
      pageDots: false,
    });
  };

  sliders.forEach((slider) => {
    initSlider(slider);
  });
};

export default StageSlider;
