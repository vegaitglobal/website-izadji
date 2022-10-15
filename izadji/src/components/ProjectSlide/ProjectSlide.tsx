import styles from './ProjectSlide.module.scss';

export type ProjectSlideProps = {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
};

const ProjectSlide = ({
  imageSrc,
  date,
  title,
  description,
  link,
  linkText,
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
          <a href={link} className={styles.btn}>
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
