import slideToContent from '../../utils/scrollToNearest';
import styles from './Banner.module.scss';

type BannerProps = {
  imageSrc: string;
  title: string;
  text: string;
};

const Banner = ({ imageSrc, title, text }: BannerProps): JSX.Element => {
  return (
    <section
      className={`${styles.banner} ${styles.has__cover}`}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={styles.wrap}>
        <div className={styles.banner__inner}>
          <div className={styles.banner__content}>
            <h2 className={styles.banner__heading}>{title}</h2>
            <p className={styles.banner__text}>{text}</p>
            <button
              type="button"
              className={styles.banner__btn}
              onClick={() => {
                const banners = document.getElementsByClassName('main-content');
                if (banners.length) {
                  slideToContent(banners[0]);
                }
              }}
            >
              Vidi više
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
