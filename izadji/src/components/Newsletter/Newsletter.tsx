import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import formService from '../../services/formService';
import Toast from '../shared/Toast/Toast';
import styles from './Newsletter.module.scss';
import parse from 'html-react-parser';

export type NavBarButtonProps = {
  title: string;
  buttonText: string;
};

const Newsletter = ({ title, buttonText }: NavBarButtonProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    formService
      .applyToNewsletter(data.newsletterEmail)
      .then(() => toast.success('Uspešna prijava.'))
      .catch(() => {
        toast.error(
          'Trenutno postoje smetnje prilikom procesa prijave na newsletter. Molimo, pokušajte ponovo.'
        );
      });
  };

  return (
    <section className={`${styles.newsletter} ${styles.newsletter__white}`}>
      <div className={styles.wrap}>
        <div className={styles.newsletter__inner}>
          <p className={`${styles.newsletter__title}`}>
            <>{parse(title)}</>
          </p>
          <form
            className={`${styles.newsletter__form} ${styles.form}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.div__col}>
              <div className={styles.div__row}>
                <label htmlFor="newsletter-email" className="sr__only"></label>
                <input
                  type="text"
                  id="newsletter-email"
                  className={styles.newsletter__input}
                  placeholder="Email Adresa"
                  {...register('newsletterEmail', {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                <button
                  type="submit"
                  className={`${styles.form__button} ${styles.newsletter__btn} ${styles.btn}`}
                >
                  {buttonText}
                </button>
              </div>
              {errors.newsletterEmail && (
                <p className={styles.newsletter_form_error_message}>
                  Polje <i>Email Adresa</i> je obavezno za unos i mora biti
                  validnog email formata
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <Toast />
    </section>
  );
};

export default Newsletter;
