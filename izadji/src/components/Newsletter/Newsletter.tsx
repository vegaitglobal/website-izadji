import ReactMarkdown from 'react-markdown';
import styles from './Newsletter.module.scss';

export type NavBarButtonProps = {
  title: string;
  buttonText: string;
};

const Newsletter = ({ title, buttonText }: NavBarButtonProps): JSX.Element => {
  return (
    <section className={`${styles.newsletter} ${styles.newsletter__white}`}>
      <div className={styles.wrap}>
        <div className={styles.newsletter__inner}>
          <p className={`${styles.newsletter__title}`}>
            <ReactMarkdown>{title}</ReactMarkdown>
          </p>
          <form className={styles.newsletter__form}>
            <label htmlFor="newsletterEmail" className="sr-only"></label>
            <input
              type="text"
              id="newsletterEmail"
              className={styles.newsletter__input}
              placeholder="Email Adresa"
            />
            <button
              type="submit"
              className={`${styles.newsletter__btn} ${styles.btn}`}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
