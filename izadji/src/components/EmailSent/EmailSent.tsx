import { Link } from 'react-router-dom';
import styles from './EmailSent.module.scss';

export type EmailSentProps = {
  title: string;
  description: string;
  buttonText: string;
};

const EmailSent = ({
  title,
  description,
  buttonText,
}: EmailSentProps): JSX.Element => {
  return (
    <div className={styles.contact__thank__you}>
      <span
        className={`${styles.contact__thank__you__icon} ${styles.font__ico__checked__circle}`}
      ></span>
      <h2 className={styles.contact__thank__you__title}>{title}</h2>
      <p className={styles.contact__thank__you__text}>{description}</p>
      <Link
        to="/"
        className={`${styles.btn} ${styles.contact__thank__you__link}`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default EmailSent;
