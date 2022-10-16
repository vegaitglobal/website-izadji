import styles from './ContactForm.module.scss';

export type ContactFormProps = {
  email: string;
  address: string;
  phoneNumber: string;
};

const VolunteeringForm = ({
  email,
  address,
  phoneNumber,
}: ContactFormProps): JSX.Element => {
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
      <span className={`${styles.contact__info} ${styles.contact__info_pin}`}>
        {address}
      </span>
    </div>
  );
};

export default VolunteeringForm;
