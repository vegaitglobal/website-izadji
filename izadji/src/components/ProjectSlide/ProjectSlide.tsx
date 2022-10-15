import styles from './ProjectSlide.module.scss';

export type ProjectSlideProps = {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
};

const ProjectSlide = ({
  imageSrc,
  date,
  title,
  description,
}: ProjectSlideProps): JSX.Element => {
  return (
    <div className={`${styles.hero__slider__item}`}>
      <div className={styles.hero__slider__inner}>
        <div
          className={`has-cover ${styles.hero__slider__image}`}
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="presentation"
        ></div>
        <div className={styles.hero__slider__text__holder}>
          <span className={styles.hero__slider__subtitle}>{date}</span>
          <h2 className={styles.hero__slider__title}>{title}</h2>
          <p className={styles.hero__slider__text}>{description}</p>
          {/* TODO: Add Button once it is implemented */}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
