import styles from './ContactUsForm.module.scss';

export type ContactUsFormProps = {
  title: string;
  text: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  checkboxPlaceholder: string;
  buttonLabel: string;
};

const ContactUsForm = ({
  title,
  text,
  namePlaceholder,
  phonePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  checkboxPlaceholder,
  buttonLabel,
}: ContactUsFormProps): JSX.Element => {
  return (
    <div>
      <section className={styles.contact__block}>
        <div className="wrap">
          <div className={styles.contact__block__inner}>
            <div className={styles.contact__block__text__holder}>
              <h2
                className={`${styles.contact__block__title} ${styles.section__title} ${styles.section__title__left}`}
              >
                {title}
              </h2>
              <p className={styles.contact__block__text}>{text}</p>
              <span className={styles.contact__block__arrow}></span>
            </div>

            <form className={`${styles.contact__block__form} ${styles.form}`}>
              <div className={styles.form__inner}>
                <div className={styles.form__col}>
                  <label
                    htmlFor="vol-form-name"
                    className={styles.sr__only}
                  ></label>
                  <input
                    type="text"
                    id="vol-form-name"
                    className={styles.form__input}
                    placeholder={namePlaceholder}
                  />
                  <label
                    htmlFor="vol-form-phone"
                    className={styles.sr__only}
                  ></label>
                  {/* TODO validacija za telefon */}
                  <input
                    type="tel"
                    pattern="(\+381)?(\s|-)?6(([0-6]|[8-9])\d{8}|(77|78)\d{7}){1}"
                    id="vol-form-phone"
                    className={styles.form__input}
                    placeholder={phonePlaceholder}
                  />
                  <label
                    htmlFor="vol-form-email"
                    className={styles.sr__only}
                  ></label>
                  <input
                    type="email"
                    id="vol-form-email"
                    className={styles.form__input}
                    placeholder={emailPlaceholder}
                  />
                  <div className={styles.form__checkbox}>
                    <input
                      type="checkbox"
                      className={styles.form__checkbox__input}
                      id="messageCopy"
                    />
                    <label
                      htmlFor="messageCopy"
                      className={styles.form__checkbox__label}
                    >
                      {checkboxPlaceholder}
                    </label>
                  </div>
                </div>
                <div className={styles.form__col}>
                  <label className={styles.sr__only} htmlFor="form.message.id">
                    {}
                  </label>
                  <textarea
                    id="form.message.id"
                    className={styles.form__textarea}
                    placeholder={messagePlaceholder}
                  ></textarea>
                  <div className={styles.form__actions}>
                    {/* TODO poslati mail */}
                    <button
                      type="submit"
                      className={`${styles.form__button} ${styles.btn}`}
                    >
                      {buttonLabel}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsForm;
