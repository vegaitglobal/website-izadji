import TrendingArticle, {
  TrendingArticleProps,
} from '../TrendingArticle/TrendingArticle';
import styles from './TrendingArticles.module.scss';

type TrendingArticlesProps = {
  slides: TrendingArticleProps[];
  title?: string;
  loadMoreCallback?: () => void;
  hasMore?: boolean;
};

const TrendingArticles = ({
  slides,
  title,
  loadMoreCallback,
  hasMore,
}: TrendingArticlesProps): JSX.Element => {
  return (
    <div className={`${styles.feed} ${styles.feed__light__gray}`}>
      <div className={styles.wrap}>
        {title && (
          <h2 className={`${styles.feed__title} ${styles.section__title}`}>
            {title}
          </h2>
        )}
        <div className={styles.feed__list}>
          {slides.map((slide) => (
            <TrendingArticle
              key={slide.title}
              imageSrc={slide.imageSrc}
              date={slide.date}
              title={slide.title}
              category={slide.category}
              link={slide.link}
            />
          ))}
        </div>
        {loadMoreCallback && hasMore && (
          <div className={styles.feed__link__wrap}>
            <button className={styles.btn} onClick={loadMoreCallback}>
              Učitaj još
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default TrendingArticles;
