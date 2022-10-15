import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styles from './WorkProgrammeSlider.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';

import WorkProgrammeCard, {
  WorkProgrammeCardProps,
} from '../WorkProgrammeCard/WorkProgrammeCard';

type WorkProgrammeSliderProps = {
  heading: string;
  slides: WorkProgrammeCardProps[];
};

const WorkProgrammeSlider = ({
  heading,
  slides,
}: WorkProgrammeSliderProps): JSX.Element => {
  return (
    <section className={styles.box__slider}>
      <div className={`${styles.wrap} ${styles.box__slider__wrap}`}>
        <h2 className={`${styles.box__slider__title} ${styles.section__title}`}>
          {heading}
        </h2>
        <Swiper
          loop={false}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: '#sliderPrev',
            nextEl: '#sliderNext',
          }}
          modules={[Navigation]}
        >
          {slides.map((slide: WorkProgrammeCardProps) => (
            <SwiperSlide key={slide.heading}>
              <WorkProgrammeCard
                heading={slide.heading}
                description={slide.description}
                link={slide.link}
                linkText={slide.linkText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className={`${styles.box__slider__btn} ${styles.box__slider__btn__prev}`}
          id="sliderPrev"
        >
          <span className={styles.sr__only}>Prev</span>
        </button>
        <button
          type="button"
          className={`${styles.box__slider__btn} ${styles.box__slider__btn__next}`}
          id="sliderNext"
        >
          <span className={styles.sr__only}>Next</span>
        </button>
      </div>
    </section>
  );
};

export default WorkProgrammeSlider;
