import { Link, Navigate, useNavigate } from 'react-router-dom';
import projectPagesService from '../../services/projectService';
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
  const navigate = useNavigate();

  return (
    <div className={`${styles.hero__slider__item}`}>
      <div className={styles.hero__slider__inner}>
        <div
          className={`${styles.has__cover} ${styles.hero__slider__image}`}
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="presentation"
        ></div>
        <div className={styles.hero__slider__text__holder}>
          <span className={styles.hero__slider__subtitle}>{date}</span>
          <h2 className={styles.hero__slider__title}>{title}</h2>
          <p className={styles.hero__slider__text}>{description}</p>
          <Link to={link} className={styles.btn}>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
