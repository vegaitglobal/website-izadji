import styles from './SingleNewsBanner.module.scss'

type SingleNewsBannerProps = {
  imageSrc: string;
  title: string;
  category: string;
  author: string;
  date: string;
};

const SingleNewsBanner = ({ imageSrc, title, category, author, date }: SingleNewsBannerProps): JSX.Element => {
  return (
    <section className={styles.blog__article__banner}>
        <div className={styles.wrap}>
            <div className={`${styles.blog__article__banner__inner} has-cover`}
                 style={{ backgroundImage: `url(${imageSrc})` }}
            >
                <div className={styles.blog__article__banner__content}>
                    <span className={`${styles.category} ${styles.blog__article__banner__category}`}>{category}</span>
                    <h1 className={styles.blog__article__banner__title}>{title}</h1>
                    <ul className={styles.blog__article__banner__meta}>
                        <li className={styles.blog__article__banner__item}>
                            <span className={styles.blog__article__banner__author}>
                                <p>Autor: <span className={styles.blog__article__banner__link}>{author}</span></p>
                            </span>
                        </li>
                        <li className={styles.blog__article__banner__item}>
                            <span className={styles.blog__article__banner__meta__text}>{date}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SingleNewsBanner;