import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import formService from '../../services/formService';
import Toast from '../shared/Toast/Toast';
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
  showArrow: boolean;
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
  showArrow,
}: ContactUsFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // TODO: Review response and error handling (messages)
  const onSubmit = (data: any) => {
    formService
      .sendEmailData(data)
      .then(() => toast.success('Proces kontaktiranja uspešan.'))
      .catch(() => {
        toast.error(
          'Trenutno postoje smetnje prilikom procesa kontaktiranja. Molimo, pokušajte ponovo.'
        );
      });
  };

  return (
    <div>
      <section
        className={`${
          showArrow ? styles.contact__block : styles.contact__block_column
        }`}
      >
        <div className="wrap">
          <div
            className={`${
              showArrow
                ? styles.contact__block__inner
                : styles.contact__block__inner_column
            }`}
          >
            <div
              className={`${
                showArrow
                  ? styles.contact__block__text__holder
                  : styles.contact__block__text__holder_column
              }`}
            >
              <h2
                className={`${styles.contact__block__title} ${styles.section__title} ${styles.section__title__left}`}
              >
                {title}
              </h2>
              <p className={styles.contact__block__text}>{text}</p>
              {showArrow ? (
                <span className={styles.contact__block__arrow}></span>
              ) : (
                ''
              )}
            </div>

            <form
              className={`${styles.contact__block__form} ${styles.form}`}
              onSubmit={handleSubmit(onSubmit)}
            >
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
                    {...register('name', { required: true })}
                  />
                  {errors.name && (
                    <p className={styles.form__error__message}>
                      Polje <i>Ime i prezime</i> je obavezno za unos
                    </p>
                  )}
                  <label
                    htmlFor="vol-form-phone"
                    className={styles.sr__only}
                  ></label>
                  <input
                    type="tel"
                    id="vol-form-phone"
                    className={styles.form__input}
                    placeholder={phonePlaceholder}
                    {...register('phone')}
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
                    {...register('email', {
                      required: true,
                      pattern: new RegExp(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      ),
                    })}
                  />
                  {errors.email && (
                    <p className={styles.form__error__message}>
                      Polje <i>Email Adresa</i> je obavezno za unos i mora biti
                      validnog email formata
                    </p>
                  )}
                  <div className={styles.form__checkbox}>
                    <input
                      type="checkbox"
                      className={styles.form__checkbox__input}
                      id="messageCopy"
                      {...register('messageCopy')}
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
                  <label
                    className={styles.sr__only}
                    htmlFor="form.message.id"
                  ></label>
                  <textarea
                    id="form.message.id"
                    className={styles.form__textarea}
                    placeholder={messagePlaceholder}
                    {...register('message', { required: true })}
                  ></textarea>
                  {errors.message && (
                    <p className={styles.form__error__message}>
                      Polje <i>Poruka</i> je obavezno za unos
                    </p>
                  )}
                  <div className={styles.form__actions}>
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
      <Toast />
    </div>
  );
};

export default ContactUsForm;
