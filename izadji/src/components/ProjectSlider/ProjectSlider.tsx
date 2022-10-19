import styles from './ProjectSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import ProjectSlide, { ProjectSlideProps } from '../ProjectSlide/ProjectSlide';

import 'swiper/scss';
import 'swiper/scss/pagination';

type ProjectSliderProps = {
  slides: ProjectSlideProps[];
};

const ProjectSlider = ({ slides }: ProjectSliderProps): JSX.Element => {
  return (
    <section className={styles.hero__slider}>
      <div className={styles.wrap}>
        <Swiper
          loop={true}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
        >
          {slides.map((slide: ProjectSlideProps) => (
            <SwiperSlide key={slide.title}>
              <ProjectSlide
                id={slide.id}
                imageSrc={slide.imageSrc}
                date={slide.date}
                title={slide.title}
                description={slide.description}
                link={slide.link}
                linkText={slide.linkText}
              />
            </SwiperSlide>
          ))}
          <div className={styles.hero__slider__nav}>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSlider;
