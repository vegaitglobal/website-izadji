import styles from './NavBar.module.scss';
import NavBarButton, {
  NavBarButtonsListProps,
} from '../NavBarButton/NavBarButton';

export type NavBarProps = {
  buttons: NavBarButtonsListProps[];
};

const NavBar = ({ buttons }: NavBarProps): JSX.Element => (
  <div>
    <nav className={styles.nav}>
      <ul className={styles.nav__list} role="menubar">
        {buttons.map((button) => (
          <NavBarButton
            key={button.buttonTitle}
            buttons={button.buttons}
            buttonTitle={button.buttonTitle}
          ></NavBarButton>
        ))}
      </ul>
    </nav>
  </div>
);

export default NavBar;
