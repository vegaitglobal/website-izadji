import { Link } from 'react-router-dom';
import backToTop from '../../../utils/backToTop';
import styles from './Footer.module.scss';

type FooterNavItemLink = {
  text: string;
  href: string;
};

type FooterNavItem = {
  title: string;
  items: FooterNavItemLink[];
};

export type FooterProps = {
  iconSrc: string;
  emails: string[];
  copyText: string;
  navItems?: FooterNavItem[];
};

const Footer = ({
  iconSrc,
  emails,
  copyText,
  navItems,
}: FooterProps): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.footer__inner}>
          <div className={styles.footer__info}>
            <Link to="/" className={styles.footer__logo}>
              <img src={iconSrc} alt="Logo icon" width="60px" />
            </Link>
            <ul className={styles.footer__contact}>
              {emails.map((email: string) => (
                <li className={styles.footer__contact__item} key={email}>
                  <span className={styles.footer__contact__span}>{email}</span>
                </li>
              ))}
            </ul>
            <p className={styles.footer__copy}>
              @Designed by <strong>{copyText}</strong>
            </p>
          </div>
          <div className={styles.footer__nav}>
            {navItems?.map((navItem: FooterNavItem) => (
              <ul className={styles.footer__list} key={navItem.title}>
                <li className={styles.footer__item}>
                  <h2 className={styles.footer__title}>{navItem.title}</h2>
                </li>
                {navItem.items.map((linkItem: FooterNavItemLink) => (
                  <li className={styles.footer__item} key={linkItem.text}>
                    <Link
                      className={styles.footer__link}
                      to={`/${linkItem.href}`}
                    >
                      {linkItem.text}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <button
            type="button"
            className={styles.footer__to__top}
            onClick={backToTop}
          >
            Go to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
