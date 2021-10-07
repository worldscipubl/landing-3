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
import FeatureSlider from '../../js/components/feature-slider';
import AuditFrom from '../../js/components/audit-form';
import FaqForm from '../../js/components/faq-form';

/* Your JS Code goes here */
window.addEventListener('DOMContentLoaded', () => {
  PromoSlider();
  StepsSlider();
  StageSlider();
  Header();
  Quiz();
  FaqSpoiler();
  FeatureSlider();
  AuditFrom();
  FaqForm();
});

window.addEventListener('load', () => {

});
