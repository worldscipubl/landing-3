/* import style */
import './index.scss';
/* import common js */
import '../../js/common';
/* import components and lib */
import StepsSlider from '../../js/components/steps-slider';
import Header from '../../js/components/header';
import Quiz from '../../js/components/quiz';
import PromoSlider from '../../js/components/promo-slider';
import StageSlider from '../../js/components/stage-slider';
import FaqSpoiler from '../../js/components/faq';

/* Your JS Code goes here */
window.addEventListener('DOMContentLoaded', () => {
  PromoSlider();
  StepsSlider();
  StageSlider();
  Header();
  Quiz();
  FaqSpoiler();
});

window.addEventListener('load', () => {

});
