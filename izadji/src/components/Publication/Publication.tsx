import styles from './Publication.module.scss';

export type PublicationProps = {
  imageSrc: string;
  text: string;
  title: string;
  buttonText: string;
};

const Publications = ({
  imageSrc,
  text,
  title,
  buttonText,
}: PublicationProps): JSX.Element => {
  return (
    <div className={styles.basic__block__holder}>
      <div className={styles.basic__block__row}>
        <div className={styles.basic__block__text}>
          <h3 className={styles.basic__block__head}>{title}</h3>
          <p className={styles.basic__block__par}>{text}</p>
          <a
            href="{{link.url}}"
            className={`${styles.btn} ${styles.btn__centered} ${styles.btn__large}`}
          >
            {buttonText}
          </a>
        </div>
        <img src={imageSrc} className={styles.basic__block__image} alt="" />
      </div>
    </div>
  );
};

export default Publications;
