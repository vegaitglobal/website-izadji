import styles from './TrendingArticle.module.scss';

export type ProjectSlideProps = {
  imageSrc: string;
  date: string;
  title: string;
  //   description: string;
};

const TrendingArticle = ({
  imageSrc,
  date,
  title,
}: ProjectSlideProps): JSX.Element => {
  return (
    <a href="/" className={styles.feed__card}>
      <div className={styles.feed__image__holder}>
        <div
          className={`${styles.feed__image} ${styles.has_cover}`}
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
      </div>
      <div className={styles.feed__text}>
        <h3 className={styles.feed__heading}>
          <span className={styles.feed__heading__text}>{title}</span>
        </h3>
        <span className={`${styles.feed__category} ${styles.category}`}>
          Kategorija
        </span>
        <div className={styles.feed__more}>
          {/*TODO add button */}
          <span className={styles.feed__read__more}>Procitaj vise</span>
          <span className={styles.feed__date}>{date}</span>
        </div>
      </div>
    </a>
  );
};

export default TrendingArticle;
