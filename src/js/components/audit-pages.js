const AuditPages = () => {
  const auditPages = document.querySelectorAll('.js-audit-page');
  const navbarAudit = document.querySelector('.js-navbar-audit-page');
  const navbarButtons = navbarAudit.querySelectorAll('.js-navbar-btn');

  navbarButtons.forEach((navbarBtn, index) => {
    navbarBtn.addEventListener('click', () => {
      resetPage();
      navbarButtons[index].classList.add('active');
      auditPages[index].classList.remove('hidden');
    });
  });

  const resetPage = () => {
    navbarButtons.forEach((navbarBtn) => navbarBtn.classList.remove('active'));
    auditPages.forEach((auditPage) => auditPage.classList.add('hidden'));
  };
};

export default AuditPages;
