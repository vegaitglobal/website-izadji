import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Event, { EventProps } from '../Event/Event';
import styles from './EventsSlider.module.scss';

function createGroups(array: EventProps[]) {
  const numGroups =
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
          id="sliderPrevEvents"
        >
          <span className={styles.sr__only}>Prev</span>
        </button>
        <button
          type="button"
          className={styles.events__btn__next}
          id="sliderNextEvents"
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
          prevEl: '#sliderPrevEvents',
          nextEl: '#sliderNextEvents',
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
                timeStart={event.timeStart}
                timeEnd={event.timeEnd}
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
