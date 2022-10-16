import styles from './Event.module.scss';

export type EventProps = {
  date: string;
  weekDay: string;
  time: string;
  name: string;
  link: string;
};

const Event = ({
  date,
  weekDay,
  time,
  name,
  link,
}: EventProps): JSX.Element => (
  <div className={styles.events__row}>
    <span className={styles.events__cell__body_date}>
      <span className={styles.events__date__inner}>{date}</span>{' '}
      <span className={styles.events__day}>{weekDay}</span>
    </span>
    <span className={styles.events__cell__body_time}>{time}</span>
    <a href={link} className={styles.events__cell_body_name}>
      {name.length > 109 ? name.substring(0, 109) + '...' : name}
    </a>
    <a href={link} className={styles.events__cell_link}>
      Detaljnije
    </a>
  </div>
);

export default Event;
