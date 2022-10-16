import ReactMarkdown from 'react-markdown';
import styles from '../Newsletter/Newsletter.module.scss';

export type DonateSectionProps = {
  title: string;
  content: string;
  buttonText: string;
  buttonHref: string
};

const DonateSection = ({ title, content, buttonText, buttonHref }: DonateSectionProps): JSX.Element => {
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
          <a href={buttonHref} className={styles.btn}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
