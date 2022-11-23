import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import styles from '../Newsletter/Newsletter.module.scss';

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
          <h2 className={`${styles.newsletter__heading}`}>
            <ReactMarkdown>{title}</ReactMarkdown>
          </h2>
          <p className={`${styles.newsletter__title}`}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </p>
          <Link to={buttonHref} className={styles.btn}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
