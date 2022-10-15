import styles from './WorkProgrammeCard.module.scss';

export type WorkProgrammeCardProps = {
  link: string;
  heading: string;
  description: string;
  linkText: string;
};

const WorkProgrammeCard = ({
  link,
  heading,
  description,
  linkText,
}: WorkProgrammeCardProps) => {
  return (
    <div className={styles.box__slider__item}>
      <a href={link} className={styles.box__slider__inner}>
        <h3 className={styles.box__slider__heading}>{heading}</h3>
        <p className={styles.box__slider__text}>{description}</p>
        <span className={styles.box__slider__link}>{linkText}</span>
      </a>
    </div>
  );
};

export default WorkProgrammeCard;
