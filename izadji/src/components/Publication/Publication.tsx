import styles from './Publication.module.scss';

export type PublicationProps = {
  imageSrc: string;
  text: string;
  title: string;
  buttonText: string;
  link: string;
};

const Publications = ({
  imageSrc,
  text,
  title,
  buttonText,
  link,
}: PublicationProps): JSX.Element => {
  const downloadPdf = (link: string) => {};
  return (
    <div className={styles.basic__block__holder}>
      <div className={styles.basic__block__row}>
        <div className={styles.basic__block__text}>
          <h3 className={styles.basic__block__head}>{title}</h3>
          <p className={styles.basic__block__par}>{text}</p>
          <a
            href={link}
            download=""
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
