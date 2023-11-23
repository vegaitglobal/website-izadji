import styles from './NavBar.module.scss';
import NavBarButton, { NavBarButtonProps } from '../NavBarButton/NavBarButton';

export type NavBarProps = {
  buttons: NavBarButtonProps[];
  onLinkClick?: () => void;
};

const NavBar = ({ buttons, onLinkClick }: NavBarProps): JSX.Element => (
  <div>
    <nav className={styles.nav}>
      <ul className={styles.nav__list} role="menubar">
        {buttons.map((button: NavBarButtonProps) => (
          <li className={styles.nav__item} key={button.title} role="menuitem">
            <NavBarButton {...button} onLinkClick={onLinkClick}></NavBarButton>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default NavBar;
