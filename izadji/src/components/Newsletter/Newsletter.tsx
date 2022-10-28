import { FormEvent } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import formService from '../../services/formService';
import Toast from '../shared/Toast/Toast';
import styles from './Newsletter.module.scss';

export type NavBarButtonProps = {
  title: string;
  buttonText: string;
};

const Newsletter = ({ title, buttonText }: NavBarButtonProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // formService
    //   .sendEmailData(data)
    //   .then(() => toast.success('Uspešna prijava.'))
    //   .catch(() => {
    //     toast.error(
    //       'Trenutno postoje smetnje prilikom procesa prijave na newsletter. Molimo, pokušajte ponovo.'
    //     );
    //   });
  };

  return (
    <section className={`${styles.newsletter} ${styles.newsletter__white}`}>
      <div className={styles.wrap}>
        <div className={styles.newsletter__inner}>
          <p className={`${styles.newsletter__title}`}>
            <ReactMarkdown>{title}</ReactMarkdown>
          </p>
          <form
            className={`${styles.newsletter__form} ${styles.form}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="newsletter-email" className="sr__only"></label>
            <input
              type="text"
              id="newsletter-email"
              className={styles.newsletter__input}
              placeholder="Email Adresa"
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
            <button
              type="submit"
              className={`${styles.form__button} ${styles.newsletter__btn} ${styles.btn}`}
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
