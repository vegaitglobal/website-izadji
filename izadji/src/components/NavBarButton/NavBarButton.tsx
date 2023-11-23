import styles from './NavBarButton.module.scss';
import { Link } from 'react-router-dom';

export type NavBarButtonProps = {
  title: string;
  href: string;
  onLinkClick?: () => void;
};

const NavBarButton = ({
  title,
  href,
  onLinkClick,
}: NavBarButtonProps): JSX.Element => (
  <div onClick={onLinkClick}>
    <Link className={styles.nav__link} to={href}>
      {title}
    </Link>
  </div>
);

export default NavBarButton;
