import styles from './Icon.module.scss';

export type IconProps = {
  altText: string;
  iconClass: string;
};

const map = {
  facebook: 'linkedin',
  instagram: 'mail',
  linkedin: 'menu',
};

const Icon = ({ iconClass, altText }: IconProps): JSX.Element => (
  <span className={styles[`font__ico__${iconClass}`]}></span>
);

export default Icon;
