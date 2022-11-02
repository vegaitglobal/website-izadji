import styles from './DonationProject.module.scss';

export type DonationProjectProps = {
  title: string;
  description: string;
  projectName: string;
  paymentModel: string;
  paymentReferenceNumber: string;
  paymentAccountNumber: string;
  projectPageId: string;
  paymentReceiver: string;
};

const DonationProject = ({
  paymentAccountNumber,
  paymentReferenceNumber,
  title,
  paymentModel,
  description,
  paymentReceiver,
}: DonationProjectProps): JSX.Element => {
  return (
    <div className={styles.donation__info}>
      <div className={styles.donation__info__inner}>
        {title && <h3 className={styles.donation__info__title}>{title}</h3>}
        {description && (
          <p className={styles.donation__info__text}>{description}</p>
        )}
        <div className={styles.donation__payment}>
          <div className={styles.donation__row}>
            <div className={styles.donation__payment__item}>
              <span className={styles.donation__payment__label}>Primalac</span>
              <span className={styles.donation__payment__value}>
                {paymentReceiver}
              </span>
            </div>
          </div>
          <div className={styles.donation__row}>
            <div className={styles.donation__payment__item}>
              <span className={styles.donation__payment__label}>Model</span>
              <span className={styles.donation__payment__value}>
                {paymentModel}
              </span>
            </div>
            <div className={styles.donation__payment__item}>
              <span className={styles.donation__payment__label}>
                Poziv na broj
              </span>
              <span className={styles.donation__payment__value}>
                {paymentReferenceNumber}
              </span>
            </div>
          </div>
          <div className={styles.donation__row}>
            <div className={styles.donation__payment__item}>
              <span className={styles.donation__payment__label}>Racun:</span>
              <span className={styles.donation__payment__value}>
                {paymentAccountNumber}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationProject;
