import styles from './NavBarButton.module.scss';

export type NavBarButtonProps = {
  title: string;
};

const NavBarButton = (props: NavBarButtonProps): JSX.Element => (
  <button className={styles.nav__link}>{props.title}</button>
);

export default NavBarButton;
