import { Link } from 'react-router-dom';
import { routes } from '../../../routes';
import NavBar, { NavBarProps } from '../../NavBar/NavBar';
import Icon, { IconProps } from '../Icon/Icon';
import styles from './Header.module.scss';
import { useState } from 'react';

export type HeaderProps = {
  emails: string[];
  social: (IconProps & { url: string })[];
  navBar: NavBarProps;
  logoSrc: string;
};

const Header = ({
  emails,
  social,
  navBar,
  logoSrc,
}: HeaderProps): JSX.Element => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header
        className={!isMobileMenuOpen ? styles.header : styles.mobile__menu}
      >
        <div className={`${styles.wrap} ${styles.header__wrap}`}>
          <div className={styles.header__top}>
            <div className={styles.header__emails}>
              <a href={`mailto:${emails[0]}`}>
                <span className={styles.header__top__link}>{emails[0]}</span>
              </a>
              <a href={`mailto:${emails[1]}`}>
                <span className={styles.header__top__link}>{emails[1]}</span>
              </a>
            </div>
            <div className={styles.header__actions}>
              <ul className={styles.header__social}>
                {social.map((icon: IconProps & { url: string }) => (
                  <li
                    key={icon.iconClass}
                    className={styles.header__social__item}
                  >
                    <a
                      className={styles.header__social__link}
                      href={icon.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon iconClass={icon.iconClass} altText={icon.altText} />
                    </a>
                  </li>
                ))}
              </ul>
              <Link to={routes.donate} className={styles.header__btn}>
                Doniraj
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.header__container}>
          <div className={styles.hamburger__logo}>
            <button
              className={styles.hamburger__btn}
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <div className={styles.cross}></div>
              ) : (
                <>
                  <div className={styles.hamburger__line} />
                  <div className={styles.hamburger__line} />
                  <div className={styles.hamburger__line} />
                </>
              )}
            </button>
            {!isMobileMenuOpen ? (
              <Link to="/" className={styles.header__logo}>
                <img
                  src={logoSrc}
                  alt="Izađi"
                  className={styles.header__logo__img}
                />
              </Link>
            ) : (
              <div className={styles.mobile__emails}>
                <a href={`mailto:${emails[0]}`}>
                  <span className={styles.header__top__link}>{emails[0]}</span>
                </a>
                <a href={`mailto:${emails[1]}`}>
                  <span className={styles.header__top__link}>{emails[1]}</span>
                </a>
              </div>
            )}
          </div>
          {!isMobileMenuOpen && (
            <Link to={routes.donate} className={styles.header__btn__small}>
              Doniraj
            </Link>
          )}

          <div className={styles.nav__bar}>
            <NavBar buttons={navBar.buttons}></NavBar>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div>
            <div className={styles.divider} />
            <NavBar buttons={navBar.buttons}></NavBar>
            <ul className={styles.header__social}>
              {social.map((icon: IconProps & { url: string }) => (
                <li
                  key={icon.iconClass}
                  className={styles.header__social__item}
                >
                  <a
                    className={styles.header__social__link}
                    href={icon.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon iconClass={icon.iconClass} altText={icon.altText} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
