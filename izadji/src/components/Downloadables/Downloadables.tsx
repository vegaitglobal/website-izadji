import Downloadable from '../Downloadable/Downloadable';
import DownloadableProps from '../../utils/DownloadableProps';
import styles from './Downloadables.module.scss';

type DownloadablesProps = {
  title: string;
  downloadables: DownloadableProps[];
};

const Downloadables = ({
  downloadables,
  title,
}: DownloadablesProps): JSX.Element => {
  return (
    <div className={styles.basic__block}>
      <div className={styles.wrap}>
        <div className={styles.basic__block__container}>
          <h1 className={styles.basic__block__heading}>{title}</h1>
          {downloadables.map((downloadable) => (
            <Downloadable
              key={downloadable.title}
              title={downloadable.title}
              text={downloadable.text}
              imageSrc={downloadable.imageSrc}
              buttonText={downloadable.buttonText}
              href={downloadable.href}
              download={downloadable.download}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Downloadables;
