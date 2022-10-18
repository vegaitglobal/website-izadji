import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import styles from './CollaboratorsSlider.module.scss';

export type CollaboratorsSlideProps = {
  imageSrc: string;
};

type ColaboratorsSliderProps = {
  title: string;
  collaborators: CollaboratorsSlideProps[];
};

const CollaboratorsSlider = ({
  collaborators,
  title,
}: ColaboratorsSliderProps): JSX.Element => {
  return (
    <section
      className={styles.logo__slider}
      style={{ backgroundColor: 'white' }}
    >
      <div className={styles.wrap}>
        <h2
          className={`${styles.logo__slider__title} ${styles.section__title}`}
        >
          {title}
        </h2>
        <Swiper slidesPerView={5} className={styles.logo__slider__container}>
          {collaborators.map((i: CollaboratorsSlideProps) => (
            <SwiperSlide key={i.imageSrc}>
              <div className={styles.logo__slider__item}>
                <a href="/" className={styles.logo__slider_inner}>
                  <img src={i.imageSrc} alt="al"></img>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CollaboratorsSlider;
