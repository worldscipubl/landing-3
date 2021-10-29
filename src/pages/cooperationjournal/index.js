/* import style */
import './index.scss';
/* import common js */
import '../../js/common';
import LazyLoad from 'vanilla-lazyload';
import Header from '../../js/components/header';
import CooperationFrom from '../../js/components/cooperation-form';
/* import components and lib */

/* Your JS Code goes here */
window.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();
  Header();
  CooperationFrom();
});

window.addEventListener('load', () => {

});
