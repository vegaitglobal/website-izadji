import Icon from '../Icon/Icon';
import styles from './Footer.module.scss';

type FooterNavItemLink = {
  text: string;
  href: string;
};

type FooterNavItem = {
  title: string;
  items: FooterNavItemLink[];
};

type FooterProps = {
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
            <div className={styles.footer__logo}>
              <Icon src={iconSrc} altText="Logo icon" width="60px" />
            </div>
            <ul className={styles.footer__contact}>
              {emails.map((email: string) => (
                <li className={styles.footer__contact__item} key={email}>
                  <span className={styles.footer__contact__span}>{email}</span>
                </li>
              ))}
            </ul>
            <p className={styles.footer__copy}>{copyText}</p>
          </div>
          <div className={styles.footer__nav}>
            {navItems?.map((navItem: FooterNavItem) => (
              <ul className={styles.footer__list} key={navItem.title}>
                <li className={styles.footer__item}>
                  <h2 className={styles.footer__title}>{navItem.title}</h2>
                </li>
                {navItem.items.map((linkItem: FooterNavItemLink) => (
                  <li className={styles.footer__item} key={linkItem.text}>
                    <a className={styles.footer__link} href={linkItem.href}>
                      {linkItem.text}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          {/* TODO: Add button for going to top of the page after the Button component is done */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
