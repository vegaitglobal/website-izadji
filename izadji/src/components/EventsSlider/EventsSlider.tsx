import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './EventsSlider.module.scss';
import Event, { EventProps } from '../Event/Event';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function createGroups(array: EventProps[]) {
  var numGroups =
    array.length % 4 == 0 ? array.length / 4 : Math.floor(array.length / 4) + 1;
  return new Array(numGroups)
    .fill('')
    .map((_, i) => array.slice(i * 4, (i + 1) * 4));
}

export type EventsSliderProps = {
  events: EventProps[];
};

const EventsSlider = ({ events }: EventsSliderProps): JSX.Element => {
  const groupedEvents = createGroups(events);

  return (
    <div className={styles.events__content}>
      <h2 className={styles.events__title}>DOGAĐAJI</h2>
      <div className={styles.events__nav}>
        <button
          type="button"
          className={styles.events__btn__prev}
          id="sliderPrev"
        >
          <span className={styles.sr__only}>Prev</span>
        </button>
        <button
          type="button"
          className={styles.events__btn__next}
          id="sliderNext"
        >
          <span className={styles.sr__only}>Next</span>
        </button>
      </div>
      <div className={styles.events__head}>
        <span className={styles.events__cell__date}>Datum</span>
        <span className={styles.events__cell__time}>Vreme</span>
        <span className={styles.events__cell__name}>Događaj</span>
      </div>
      <Swiper
        centeredSlides={true}
        initialSlide={0}
        slidesPerView={1}
        className={styles.swiper}
        navigation={{
          prevEl: '#sliderPrev',
          nextEl: '#sliderNext',
        }}
        modules={[Navigation]}
      >
        {groupedEvents.map((group, index) => (
          <SwiperSlide className={styles.swiper_slide} key={index}>
            {group.map((event) => (
              <Event
                key={event.name}
                date={event.date}
                weekDay={event.weekDay}
                time={event.time}
                name={event.name}
                link={event.link}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventsSlider;
