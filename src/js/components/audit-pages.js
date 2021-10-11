const AuditPages = () => {
  const auditPages = document.querySelectorAll('.js-audit-page');
  const navbarAudit = document.querySelector('.js-navbar-audit-page');
  const navbarButtons = navbarAudit.querySelectorAll('.js-navbar-btn');
  const currentURL = new URL(window.location.href);
  const tabFromURL = currentURL.searchParams.get('tab');
  const resetPage = () => {
    navbarButtons.forEach((navbarBtn) => navbarBtn.classList.remove('active'));
    auditPages.forEach((auditPage) => auditPage.classList.add('hidden'));
  };
  if (tabFromURL && tabFromURL < navbarButtons.length) {
    resetPage();
    navbarButtons[tabFromURL].classList.add('active');
    auditPages[tabFromURL].classList.remove('hidden');
  }

  navbarButtons.forEach((navbarBtn, index) => {
    navbarBtn.addEventListener('click', () => {
      resetPage();
      navbarButtons[index].classList.add('active');
      auditPages[index].classList.remove('hidden');
    });
  });
};

export default AuditPages;
