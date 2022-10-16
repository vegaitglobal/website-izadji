import styles from './VolunteeringForm.module.scss';

export type VolunteeringFormProps = {
  title: string;
  description: string;
  buttonText: string;
};

const VolunteeringForm = ({
  title,
  description,
  buttonText,
}: VolunteeringFormProps): JSX.Element => {
  return (
    <section className={styles.contact__block}>
      <div className={styles.wrap}>
        <div className={styles.contact__block__inner}>
          <div className={styles.contact__block__text__holder}>
            <h2
              className={`${styles.contact__block__title} ${styles.section__title} ${styles.section__title__left}`}
            >
              {title}
            </h2>
            <p className={styles.contact__block__text}>{description}</p>
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
                  placeholder="Ime"
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
                  placeholder="Phone"
                />
                <label
                  htmlFor="vol-form-email"
                  className={styles.sr__only}
                ></label>
                <input
                  type="email"
                  id="vol-form-email"
                  className={styles.form__input}
                  placeholder="Email"
                />
              </div>
              <div className={styles.form__col}>
                <label className={styles.sr__only} htmlFor="form.message.id">
                  {}
                </label>
                <textarea
                  id="form.message.id"
                  className={styles.form__textarea}
                  placeholder="Poruka"
                ></textarea>
                <div className={styles.form__actions}>
                  {/* TODO poslati mail */}
                  <button
                    type="submit"
                    className={`${styles.form__button} ${styles.btn}`}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VolunteeringForm;
