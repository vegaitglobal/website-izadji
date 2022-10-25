import styles from './NavBarButton.module.scss';
import { Link } from 'react-router-dom';

export type NavBarButtonProps = {
  title: string;
  href: string;
};

const NavBarButton = ({ title, href }: NavBarButtonProps): JSX.Element => (
  <Link className={styles.nav__link} to={href}>
    {title}
  </Link>
);

export default NavBarButton;
