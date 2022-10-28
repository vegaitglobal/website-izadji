const customDropdown = (styles: any) => ({
  buttonOpenClass: styles.dropdown__btn____open,
  listOpenClass: styles.dropdown__list____open,

  toggleDropdown: function (btn: Element) {
    const parent = btn.closest('.js-dropdown');
    const list = parent?.querySelector('.js-dropdown-list');

    if (!btn.classList.contains(this.buttonOpenClass)) {
      btn.classList.add(this.buttonOpenClass);
      list?.classList.add(this.listOpenClass);
    } else {
      btn.classList.remove(this.buttonOpenClass);
      list?.classList.remove(this.listOpenClass);
    }
  },

  selectItem: function (linkItem: Element) {
    const listItems = document.querySelectorAll('.js-dropdown-link');

    const itemSelectedClass = 'dropdown__link--selected';
    const itemText = linkItem.innerHTML;
    const parent = linkItem.closest('.js-dropdown');
    const btn = parent?.querySelector('.js-dropdown-btn');
    const list = parent?.querySelector('.js-dropdown-list');

    listItems.forEach((otherItem) => {
      otherItem.classList.remove(itemSelectedClass);
    });

    linkItem.classList.add(itemSelectedClass);
    if (btn) {
      btn.textContent = itemText;
    }
    btn?.classList.remove(this.buttonOpenClass);
    list?.classList.remove(this.listOpenClass);
  },
});

export default customDropdown;
