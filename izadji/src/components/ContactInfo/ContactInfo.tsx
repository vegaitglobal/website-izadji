import styles from './ContactInfo.module.scss';

export type ContactInfoProps = {
  email: string;
  address: string;
  phoneNumber: string;
};

const ContactInfo = ({
  email,
  address,
  phoneNumber,
}: ContactInfoProps): JSX.Element => {
  return (
    <div className={styles.contact__details}>
      <span className={`${styles.contact__info} ${styles.contact__info__mail}`}>
        {email}
      </span>
      <span
        className={`${styles.contact__info} ${styles.contact__info__phone}`}
      >
        {phoneNumber}
      </span>
      <span className={`${styles.contact__info} ${styles.contact__info__pin}`}>
        {address}
      </span>
    </div>
  );
};

export default ContactInfo;
