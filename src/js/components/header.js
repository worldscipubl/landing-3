const Header = () => {
  const _drawer = document.querySelector('.js-drawer');
  const _drawerOverlay = _drawer.querySelector('.js-drawer-overlay');
  const _burger = document.querySelector('.js-burger');

  _burger.addEventListener('click', toggleMenu);
  _drawerOverlay.addEventListener('click', toggleMenu);
  window.addEventListener('keydown', (event) => {
    const { key } = event;
    if ((key === 'Esc' || key === 'Escape') && _burger.classList.contains('is_active')) {
      _drawer.classList.toggle('is_active');
      _burger.classList.toggle('is_active');
      toggleScroll(false);
    }
  });

  function toggleScroll(flag) {
    if (flag) {
      document.body.style = 'overflow:hidden';
    } else {
      document.body.removeAttribute('style');
    }
  }

  function toggleMenu() {
    _drawer.classList.toggle('is_active');
    _burger.classList.toggle('is_active');
    toggleScroll(_burger.classList.contains('is_active'));
  }

  const scrollItems = document.querySelectorAll('[data-scroll]');
  scrollItems.forEach((item) => {
    item.addEventListener('click', () => {
      const anchor = item.getAttribute('data-scroll');
      const anchorElement = document.querySelector(anchor);
      let yOffset = 0.99;
      if (anchor === '#cost' || anchor === '#quiz-0' || anchor === '#promo') {
        yOffset = 0.96;
      }
      const y = (anchorElement.getBoundingClientRect().top + window.pageYOffset) * yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    });
  });
};

export default Header;
