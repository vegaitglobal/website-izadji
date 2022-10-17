import { Link } from 'react-router-dom';
import styles from './WorkProgrammeCard.module.scss';

export type WorkProgrammeCardProps = {
  link: string;
  heading: string;
  description: string;
  linkText?: string;
};

const WorkProgrammeCard = ({
  link,
  heading,
  description,
}: WorkProgrammeCardProps) => {
  return (
    <div className={styles.box__slider__item}>
      <Link to={link} className={styles.box__slider__inner}>
        <h3 className={styles.box__slider__heading}>{heading}</h3>
        <p className={styles.box__slider__text}>{description}</p>
        <span className={styles.box__slider__link}>Saznaj više</span>
      </Link>
    </div>
  );
};

export default WorkProgrammeCard;
