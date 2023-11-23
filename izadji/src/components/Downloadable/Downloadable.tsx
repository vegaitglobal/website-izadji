import styles from './Downloadable.module.scss';
import DownloadableProps from '../../utils/DownloadableProps';
import RichTextComponent from '../RichTextComponent/RichTextComponent';

const Downloadable = ({
  imageSrc,
  text,
  title,
  buttonText,
  href,
  download,
}: DownloadableProps): JSX.Element => {
  return (
    <div className={styles.basic__block__holder}>
      <div className={styles.basic__block__row}>
        <div className={styles.basic__block__text}>
          <h3 className={styles.basic__block__head}>{title}</h3>
          <RichTextComponent content={text} narrow={false} />
          <a
            href={href}
            download={download}
            className={`${styles.btn} ${styles.btn__centered} ${styles.btn__large}`}
            target="blank"
          >
            {buttonText}
          </a>
        </div>
        {imageSrc && (
          <img src={imageSrc} className={styles.basic__block__image} alt="" />
        )}
      </div>
    </div>
  );
};

export default Downloadable;
