import styles from './NavBarButton.module.scss';

export type NavBarButtonProps = {
  title: string;
};

const NavBarButton = ({ title }: NavBarButtonProps): JSX.Element => (
  <a className={styles.nav__link}>{title}</a>
);

export default NavBarButton;
