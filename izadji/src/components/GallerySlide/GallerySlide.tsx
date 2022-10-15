import styles from './GallerySlide.module.scss';

export type GallerySlideProps = {
  imageSrc: string;
  largeImageSrc: string;
  altText: string;
};

const GallerySlide = ({
  imageSrc,
  largeImageSrc,
  altText,
}: GallerySlideProps) => {
  return (
    <div className={styles.gallery__slider__item}>
      <button type="button" className={styles.gallery__slider__thumb}>
        <img
          src={imageSrc}
          className={styles.gallery__slider__image}
          data-gallery-image={largeImageSrc}
          alt={altText}
        />
      </button>
    </div>
  );
};

export default GallerySlide;
