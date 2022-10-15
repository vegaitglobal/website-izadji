import TrendingArticle from '../TrendingArticle/TrendingArticle';
import styles from './TrendingArticles.module.scss';

export type ProjectSlideProps = {
  imageSrc: string;
  date: string;
  title: string;
};

type ProjectSliderProps = {
  slides: ProjectSlideProps[];
};
const TrendingArticles = ({ slides }: ProjectSliderProps): JSX.Element => {
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
      </div>
    </div>
  );
};
export default TrendingArticles;
