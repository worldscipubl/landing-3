/* import style */
import './index.scss';
/* import common js */
import '../../js/common';
import Header from '../../js/components/header';
import AuditFrom from '../../js/components/audit-form';
import PromoCodeFrom from '../../js/components/promocode-form';
/* import components and lib */

/* Your JS Code goes here */
window.addEventListener('DOMContentLoaded', () => {
  Header();
  PromoCodeFrom();
  AuditFrom();
});

window.addEventListener('load', () => {

});
