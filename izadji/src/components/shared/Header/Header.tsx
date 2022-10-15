import styles from './Header.module.scss';
import Icon from '../Icon/Icon';
import LogoImage from '../../../assets/svg/logo.svg';
import FacebookIcon from '../../../assets/svg/ico-facebook.svg';
import InstagramIcon from '../../../assets/svg/ico-instagram.svg';
import LinkedinIcon from '../../../assets/svg/ico-linkedin.svg';
import TwitterIcon from '../../../assets/svg/ico-twitter.svg';
import YouTubeIcon from '../../../assets/svg/ico-youtube.svg';
import NavBar, { NavBarProps } from '../../NavBar/NavBar';

type HeaderProps = {
  emails: string[];
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
              <li className={styles.header__social__item}>
                <a className={styles.header__social__link}>
                  <Icon src={InstagramIcon} altText="Logo icon" width="20px" />
                </a>
              </li>
              <li className={styles.header__social__item}>
                <a className={styles.header__social__link}>
                  <Icon src={FacebookIcon} altText="Logo icon" width="20px" />
                </a>
              </li>
              <li className={styles.header__social__item}>
                <a className={styles.header__social__link}>
                  <Icon src={LinkedinIcon} altText="Logo icon" width="20px" />
                </a>
              </li>
              <li className={styles.header__social__item}>
                <a className={styles.header__social__link}>
                  <Icon src={TwitterIcon} altText="Logo icon" width="20px" />
                </a>
              </li>
              <li className={styles.header__social__item}>
                <a className={styles.header__social__link}>
                  <Icon src={YouTubeIcon} altText="Logo icon" width="20px" />
                </a>
              </li>
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
