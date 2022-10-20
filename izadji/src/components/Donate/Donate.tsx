import styles from './Donate.module.scss';

import DonationProject, {
  DonationProjectProps,
} from '../DonationProject/DonationProject';
import { useState } from 'react';

export type DonateProps = {
  title: string;
  text: string;
  donationProjects: DonationProjectProps[];
};

const customDropdown = {
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
};

const Donate = ({
  title,
  text,
  donationProjects,
}: DonateProps): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState(donationProjects[0]);

  return (
    <div className={styles.donation}>
      <div className={styles.donation__picker}>
        <div className={styles.donation__picker__inner}>
          {title && <h2 className={styles.donation__title}>{title}</h2>}
          {text && <p className={styles.donation__text}>{text}</p>}
          <div className={`${styles.dropdown} js-dropdown`}>
            <button
              type={'button'}
              className={`${styles.dropdown__btn} js-dropdown-btn`}
              onClick={({ target }) =>
                customDropdown.toggleDropdown(target as Element)
              }
            >
              {selectedProject.projectName}
            </button>
            <ul className={`${styles.dropdown__list} js-dropdown-list`}>
              {donationProjects.map((project) => (
                <li
                  className={styles.dropdown__item}
                  key={project.projectPageId}
                >
                  <button
                    onClick={({ target }) => {
                      customDropdown.selectItem(target as Element);
                      setSelectedProject(project);
                    }}
                    className={`${styles.dropdown__link} js-dropdown-link`}
                  >
                    {project.projectName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className={styles.btn}>Vidi informacije</button>
        </div>
      </div>
      <DonationProject {...selectedProject} />
    </div>
  );
};

export default Donate;
