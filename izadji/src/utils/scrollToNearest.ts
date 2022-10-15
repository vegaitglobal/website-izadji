const slideToContent = () => {
  const button = document.querySelector('.js-banner-btn-scroll');

  if (!button) {
    return;
  }
  const banner = button.closest('.js-banner');
  const nextContent = banner?.nextElementSibling;
  button.addEventListener('click', () => {
    nextContent?.scrollIntoView({
      behavior: 'smooth',
    });
  });
};

export default slideToContent;
