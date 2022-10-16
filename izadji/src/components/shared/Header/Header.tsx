import LogoImage from '../../../assets/svg/logo.svg';
import NavBar, { NavBarProps } from '../../NavBar/NavBar';
import Icon, { IconProps } from '../Icon/Icon';
import styles from './Header.module.scss';

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
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <div className={styles.header__top}>
            <div className={styles.header__emails}>
              <span className={styles.header__top__link}>{emails[0]}</span>
              <span className={styles.header__top__link}>{emails[1]}</span>
            </div>
            <div className={styles.header__actions}>
              <ul className={styles.header__social}>
                {social.map((icon: IconProps & { url: string }) => (
                  <li
                    key={icon.iconClass}
                    className={styles.header__social__item}
                  >
                    <a className={styles.header__social__link} href={icon.url}>
                      <Icon iconClass={icon.iconClass} altText={icon.altText} />
                    </a>
                  </li>
                ))}
              </ul>
              <a className={styles.header__btn}>Doniraj</a>
            </div>
            <button type="button" className={styles.header__hamburger}>
              <span className={styles.font__ico__menu}></span>
              <span className={styles.sr__only}>=</span>
            </button>
          </div>
        </div>
        <div className={styles.header__container}>
          <a href="/" className={styles.header__logo}>
            <img
              src={logoSrc}
              alt="Izađi"
              className={styles.header__logo__img}
            />
          </a>
          <NavBar buttons={navBar.buttons}></NavBar>
        </div>
      </header>
    </div>
  );
};

export default Header;
