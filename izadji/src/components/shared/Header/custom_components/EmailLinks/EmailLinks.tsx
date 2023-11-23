import styles from './EmailLinks.module.scss';

export type HeaderProps = {
  emails: string[];
};

const EmailLinks = ({ emails }: HeaderProps): JSX.Element => {
  return (
    <div>
      <a href={`mailto:${emails[0]}`}>
        <span className={`${styles.header__top__link} ${styles.firstLink}`}>
          {emails[0]}
        </span>
      </a>

      <a href={`mailto:${emails[1]}`}>
        <span className={styles.header__top__link}>{emails[1]}</span>
      </a>
    </div>
  );
};

export default EmailLinks;
