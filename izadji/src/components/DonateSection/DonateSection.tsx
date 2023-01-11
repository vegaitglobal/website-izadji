import { Link } from 'react-router-dom';
import styles from '../Newsletter/Newsletter.module.scss';
import parse from 'html-react-parser';

export type DonateSectionProps = {
  title: string;
  content: string;
  buttonText: string;
  buttonHref: string;
};

const DonateSection = ({
  title,
  content,
  buttonText,
  buttonHref,
}: DonateSectionProps): JSX.Element => {
  return (
    <section className={`${styles.newsletter} ${styles.newsletter__white}`}>
      <div className={styles.wrap}>
        <div className={styles.newsletter__inner}>
          <h2 className={`${styles.newsletter__heading}`}>{parse(title)}</h2>
          <p className={`${styles.newsletter__title}`}>{parse(content)}</p>
          <Link to="/donate" className={styles.btn}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
