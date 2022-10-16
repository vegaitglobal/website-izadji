import Publication from '../Publication/Publication';
import styles from './Publications.module.scss';

export type PublicationProps = {
  imageSrc: string;
  text: string;
  title: string;
  buttonText: string;
};
type PublicationsProps = {
  title: string;
  publications: PublicationProps[];
};

const Publications = ({
  publications,
  title,
}: PublicationsProps): JSX.Element => {
  return (
    <div className={styles.basic__block}>
      <div className={styles.wrap}>
        <div className={styles.basic__block__container}>
          <h1 className={styles.basic__block__heading}>{title}</h1>
          {publications.map((publication) => (
            <Publication
              key={publication.title}
              title={publication.title}
              text={publication.text}
              imageSrc={publication.imageSrc}
              buttonText={publication.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
