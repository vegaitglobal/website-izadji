import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import styles from './CollaboratorsSlider.module.scss';
import CollaboratorImage1 from '../../assets/images/content/08.png';
import CollaboratorImage2 from '../../assets/images/content/06.png';
import CollaboratorImage3 from '../../assets/images/content/07.png';
import CollaboratorImage4 from '../../assets/images/content/09.png';
import CollaboratorImage5 from '../../assets/images/content/10.png';
import CollaboratorImage6 from '../../assets/images/content/11.png';

const collaboratorsSlides = [
  {
    imageSrc: CollaboratorImage1,
  },
  {
    imageSrc: CollaboratorImage2,
  },
  {
    imageSrc: CollaboratorImage3,
  },
  {
    imageSrc: CollaboratorImage4,
  },
  {
    imageSrc: CollaboratorImage5,
  },
  {
    imageSrc: CollaboratorImage6,
  },
];

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
        <Swiper
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.logo__slider__container}
        >
          {collaboratorsSlides.map((i: CollaboratorsSlideProps) => (
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
