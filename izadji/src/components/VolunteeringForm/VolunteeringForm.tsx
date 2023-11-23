import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import formService from '../../services/formService';
import Toast from '../shared/Toast/Toast';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // TODO: Review response and error handling (messages)
  const onSubmit = (data: any) => {
    formService
      .sendVolunteerFormData(data)
      .then(() => toast.success('Uspešna prijava na projekat.'))
      .catch(() => {
        toast.error(
          'Trenutno postoje smetnje prilikom procesa prijave. Molimo, pokušajte ponovo.'
        );
      });
  };

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
                  placeholder="Ime"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <p className={styles.form__error__message}>
                    Polje <i>Ime</i> je obavezno za unos
                  </p>
                )}
                <label
                  htmlFor="vol-form-phone"
                  className={styles.sr__only}
                ></label>
                {/* TODO validacija za telefon */}
                <input
                  type="tel"
                  id="vol-form-phone"
                  className={styles.form__input}
                  placeholder="Mobilni telefon"
                  {...register('phone', { required: true })}
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
                  {...register('email', {
                    required: true,
                    pattern: new RegExp(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ),
                  })}
                />
                {errors.email && (
                  <p className={styles.form__error__message}>
                    Polje <i>Email</i> je obavezno za unos i mora biti validnog
                    email formata
                  </p>
                )}
              </div>
              <div className={styles.form__col}>
                <label className={styles.sr__only} htmlFor="form.message.id">
                  {}
                </label>
                <textarea
                  id="form.message.id"
                  className={styles.form__textarea}
                  placeholder="Poruka"
                  {...register('message', { required: true })}
                ></textarea>
                {errors.message && (
                  <p className={styles.form__error__message}>
                    Polje <i>Poruka</i> je obavezno za unos
                  </p>
                )}
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
      <Toast />
    </section>
  );
};

export default VolunteeringForm;
