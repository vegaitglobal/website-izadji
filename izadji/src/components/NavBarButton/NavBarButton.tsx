import styles from './NavBarButton.module.scss';
import './header.js';
import { useLocation } from 'react-router';

export type NavBarButtonProps = {
  title: string;
  link: string;
};

export type NavBarButtonsListProps = {
  buttons: NavBarButtonProps[];
  buttonTitle: string;
};

const NavBarButton = ({
  buttons,
  buttonTitle,
}: NavBarButtonsListProps): JSX.Element => {
  console.log(window.location.href);
  return (
    <li className={`${styles.nav__item} js-nav-item`} role="menuitem">
      {buttons.length === 1 ? (
        <a
          href={buttons[0].link}
          className={`${styles.nav__link} ${
            window.location.href === buttons[0].link //TODO: logika ostaje samo uz react router
              ? styles.nav__link__active
              : ''
          }`}
        >
          {buttons[0].title}
        </a>
      ) : (
        <div className={styles.nav__item}>
          <a className={`${styles.nav__link}`}>{buttonTitle}</a>
          <button type="button" className={`${styles.nav__arrow} js_nav_arrow`}>
            <span className={styles.sr__only}>123</span>
          </button>
          <ul className={`${styles.nav__sublist} js_nav_sublist`}>
            {buttons.map((button) => (
              <li className={styles.nav__subitem} key={button.title}>
                <a href={button.link} className={styles.nav__sublink}>
                  {button.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavBarButton;
