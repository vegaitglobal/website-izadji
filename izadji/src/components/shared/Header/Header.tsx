import styles from './Header.module.scss';
import Icon, { IconProps } from '../Icon/Icon';
import LogoImage from '../../../assets/svg/logo.svg';
import NavBar, { NavBarProps } from '../../NavBar/NavBar';

type HeaderProps = {
  emails: string[];
  social: IconProps[];
  navBar: NavBarProps;
};

const Header = (props: HeaderProps): JSX.Element => (
  <div>
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.header__top}>
          <div className={styles.header__emails}>
            <span className={styles.header__top__link}>{props.emails[0]}</span>
            <span className={styles.header__top__link}>{props.emails[1]}</span>
          </div>
          <div className={styles.header__actions}>
            <ul className={styles.header__social}>
              {props.social.map((icon: IconProps) => (
                <li key={icon.src} className={styles.header__social__item}>
                  <a className={styles.header__social__link}>
                    <Icon
                      src={icon.src}
                      altText={icon.altText}
                      width={icon.width}
                    />
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
        <Icon src={LogoImage} altText="Logo icon" width="58px" />
        <NavBar buttons={props.navBar.buttons}></NavBar>
      </div>
    </header>
  </div>
);

export default Header;
