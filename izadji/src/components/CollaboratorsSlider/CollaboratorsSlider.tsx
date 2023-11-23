import { Link } from 'react-router-dom';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import styles from './CollaboratorsSlider.module.scss';
import { useEffect, useState } from 'react';

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
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(5);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <Swiper
          slidesPerView={slidesPerView}
          className={styles.logo__slider__container}
        >
          {collaborators.map((i: CollaboratorsSlideProps) => (
            <SwiperSlide key={i.imageSrc}>
              <div className={styles.logo__slider__item}>
                <Link to="/" className={styles.logo__slider__inner}>
                  <img
                    className={styles.logo__slider__image}
                    src={i.imageSrc}
                    alt="al"
                  ></img>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CollaboratorsSlider;
