import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styles from './GallerySlider.module.scss';
import GallerySlide, { GallerySlideProps } from '../GallerySlide/GallerySlide';

type GallerySliderProps = {
  slides: GallerySlideProps[];
};

const GallerySlider = ({ slides }: GallerySliderProps) => {
  return (
    <div className={styles.gallery__slider}>
      <div className={styles.wrap}>
        <Swiper
          loop={false}
          slidesPerView={2}
          spaceBetween={8}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: '#sliderPrevGallery',
            nextEl: '#sliderNextGallery',
          }}
          modules={[Navigation]}
        >
          {slides.map((slide: GallerySlideProps) => (
            <SwiperSlide key={slide.imageSrc}>
              <GallerySlide
                imageSrc={slide.imageSrc}
                largeImageSrc={slide.largeImageSrc}
                altText={slide.altText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className={`${styles.gallery__slider__btn} ${styles.gallery__slider__btn__prev}`}
          id="sliderPrevGallery"
        >
          <span className={styles.sr__only}>Prev</span>
        </button>
        <button
          type="button"
          className={`${styles.gallery__slider__btn} ${styles.gallery__slider__btn__next}`}
          id="sliderNextGallery"
        >
          <span className={styles.sr__only}>Next</span>
        </button>
      </div>
    </div>
  );
};

export default GallerySlider;
