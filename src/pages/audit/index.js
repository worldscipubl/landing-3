/* import style */
import './index.scss';
/* import common js */
import '../../js/common';
import Header from '../../js/components/header';
import AuditFrom from '../../js/components/audit-form';
import AuditPages from '../../js/components/audit-pages';
/* import components and lib */

/* Your JS Code goes here */
window.addEventListener('DOMContentLoaded', () => {
  Header();
  AuditFrom();
  AuditPages();
});

window.addEventListener('load', () => {

});
