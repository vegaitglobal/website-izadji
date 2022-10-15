import styles from './NavBar.module.scss';
import NavBarButton, { NavBarButtonProps } from '../NavBarButton/NavBarButton';

export type NavBarProps = {
  buttons: NavBarButtonProps[];
};

const NavBar = (props: NavBarProps): JSX.Element => (
  <div>
    <nav className={styles.nav}>
      <ul className={styles.nav__list} role="menubar">
        {props.buttons.map((button: NavBarButtonProps) => (
          <li className={styles.nav__item} key={button.title} role="menuitem">
            <NavBarButton title={button.title}></NavBarButton>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default NavBar;
