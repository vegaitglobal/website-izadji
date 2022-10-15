import TrendingArticle from '../TrendingArticle/TrendingArticle';
import styles from './TrendingArticles.module.scss';

export type ProjectSlideProps = {
  imageSrc: string;
  date: string;
  title: string;
};

type ProjectSliderProps = {
  buttonText: string;
  slides: ProjectSlideProps[];
};
const TrendingArticles = ({
  slides,
  buttonText,
}: ProjectSliderProps): JSX.Element => {
  return (
    <div className={`${styles.feed} ${styles.feed__white}`}>
      <div className={styles.wrap}>
        <h2 className={`${styles.feed__title} ${styles.section__title}`}>
          Naslov
        </h2>
        <div className={styles.feed__list}>
          {slides.map((slide) => (
            <TrendingArticle
              key={slide.title}
              imageSrc={slide.imageSrc}
              date={slide.date}
              title={slide.title}
            />
          ))}
        </div>
        <div className={styles.feed__link__wrap}>
          <a href="/" className={styles.btn}>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};
export default TrendingArticles;
