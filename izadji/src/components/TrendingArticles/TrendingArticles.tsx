import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import TrendingArticle, {
  TrendingArticleProps,
} from '../TrendingArticle/TrendingArticle';
import styles from './TrendingArticles.module.scss';

type TrendingArticlesProps = {
  slides: TrendingArticleProps[];
};

const TrendingArticles = ({ slides }: TrendingArticlesProps): JSX.Element => {
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
              category={slide.category}
              link={slide.link}
            />
          ))}
        </div>
        <div className={styles.feed__link__wrap}>
          <Link to={routes.blog} className={styles.btn}>
            Pročitaj više
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TrendingArticles;
