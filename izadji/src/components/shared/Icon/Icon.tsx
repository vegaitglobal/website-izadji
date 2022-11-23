import styles from './Icon.module.scss';

export type IconProps = {
  altText: string;
  iconClass: string;
};

const map = {
  facebook: 'linkedin',
  instagram: 'mail',
  linkedin: 'menu',
  mail: 'twitter',
  youtube: 'linkedin',
};

const Icon = ({ iconClass, altText }: IconProps): JSX.Element => (
  <span className={styles[`font__ico__${iconClass}`]}></span>
);

export default Icon;
