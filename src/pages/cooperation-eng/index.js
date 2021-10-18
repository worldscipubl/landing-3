/* import style */
import './index.scss';
/* import common js */
import '../../js/common';
import Header from '../../js/components/header';
import CooperationFrom from '../../js/components/cooperation-form';
import LazyLoad from 'vanilla-lazyload';
/* import components and lib */

/* Your JS Code goes here */
window.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();
  CooperationFrom();
});

window.addEventListener('load', () => {

});
