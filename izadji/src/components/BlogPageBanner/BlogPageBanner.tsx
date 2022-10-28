import { Link } from 'react-router-dom';
import styles from './BlogNewsBanner.module.scss';

export type BlogNewsBannerProps = {
  imageSrc: string;
  title: string;
  category: string;
  text: string;
  url: string;
  date: string;
};

const BlogNewsBanner = ({
  imageSrc,
  title,
  category,
  text,
  url,
  date,
}: BlogNewsBannerProps): JSX.Element => {
  return (
    <div className={styles.blog__landing__banner}>
      <div className={styles.wrap}>
        <div
          className={`${styles.blog__landing__banner__inner} ${styles.has__cover}`}
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className={styles.blog__landing__banner__content}>
            <span
              className={`${styles.category} ${styles.blog__landing__banner__category}`}
            >
              {category}
            </span>
            <h2 className={styles.blog__landing__banner__heading}>{title}</h2>
            <p className={styles.blog__landing__banner__text}>{text}</p>
            <div className={styles.blog__landing__banner__footer}>
              <Link to={url} className={styles.blog__landing__banner__btn}>
                Pročitaj više
              </Link>
              <span className={styles.blog__landing__banner__date}>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNewsBanner;
