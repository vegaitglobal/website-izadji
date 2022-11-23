import styles from './Event.module.scss';

export type EventProps = {
  date: string;
  weekDay: string;
  timeStart: string;
  timeEnd: string;
  name: string;
  link: string;
};

const Event = ({
  date,
  weekDay,
  timeStart,
  timeEnd,
  name,
  link,
}: EventProps): JSX.Element => {
  return (
    <div className={styles.events__row}>
      <span className={styles.events__cell__body_date}>
        <span className={styles.events__date__inner}>{date}</span>{' '}
        <span className={styles.events__day}>{weekDay}</span>
      </span>
      <span className={styles.events__cell__body_time}>
        {timeStart} - {timeEnd}
      </span>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.events__cell_body_name}
      >
        {name.length > 109 ? name.substring(0, 109) + '...' : name}
      </a>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.events__cell_link}
      >
        Detaljnije
      </a>
    </div>
  );
};

export default Event;
