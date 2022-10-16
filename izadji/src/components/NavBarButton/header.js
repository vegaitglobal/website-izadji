const header = {
  init: function () {
    this.toggleSubnavOnTouch();
  },

  toggleSubnavOnTouch: function () {
    const arrows = document.querySelectorAll('.js_nav_arrow');
    const arrowActiveClass = 'nav__arrow__active';

    arrows.forEach((arrow) => {
      if (!arrow) {
        return;
      }
      arrow.addEventListener('click', () => {
        const parentItem = arrow.closest('.js_nav_item');
        const activeSublist = parentItem.querySelector('.js_nav_sublist');

        if (!arrow.classList.contains(arrowActiveClass)) {
          arrow.classList.add(arrowActiveClass);
          activeSublist.style.display = 'block';
        } else {
          arrow.classList.remove(arrowActiveClass);
          activeSublist.style.display = '';
        }
      });
    });
  },
};

export default header;
