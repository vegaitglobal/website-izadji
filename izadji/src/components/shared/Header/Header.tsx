import { Link } from 'react-router-dom';
import NavBar, { NavBarProps } from '../../NavBar/NavBar';
import Icon, { IconProps } from '../Icon/Icon';
import styles from './Header.module.scss';
import { useState } from 'react';
import EmailLinks from './custom_components/EmailLinks/EmailLinks';
import DonateButton from './custom_components/DonateButton/DonateButton';

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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const Socials = () => {
    return (
      <ul className={styles.header__social}>
        {social.map((icon: IconProps & { url: string }) => (
          <li key={icon.iconClass} className={styles.header__social__item}>
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
    );
  };

  return (
    <div>
      <header
        className={!isMobileMenuOpen ? styles.header : styles.mobile__menu}
      >
        <div className={`${styles.wrap} ${styles.header__wrap}`}>
          <div className={styles.header__top}>
            <EmailLinks emails={emails} />

            <div className={styles.header__actions}>
              <Socials />
              <DonateButton btnStyle={styles.header__btn} />
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
              <EmailLinks emails={emails} />
            )}
          </div>
          {!isMobileMenuOpen && (
            <DonateButton btnStyle={styles.header__btn__small} />
          )}

          <div className={styles.nav__bar}>
            <NavBar buttons={navBar.buttons} onLinkClick={handleLinkClick} />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div>
            <div className={styles.divider} />
            <NavBar buttons={navBar.buttons} onLinkClick={handleLinkClick} />
            <Socials />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
