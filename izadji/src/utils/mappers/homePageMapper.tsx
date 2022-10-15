import { ReactNode } from 'react';
import { GallerySlideProps } from '../../components/GallerySlide/GallerySlide';
import GallerySlider from '../../components/GallerySlider/GallerySlider';
import HomePageComponents from '../enums/homePageComponentEnums';

export const getGallerySlides = (imagesData: any): GallerySlideProps[] => {
  return imagesData.map((imageData: any) => {
    return {
      imageSrc: `${process.env.REACT_APP_STRAPI_HOST}${imageData.attributes.formats.large.url}`,
      largeImageSrc: `${process.env.REACT_APP_STRAPI_HOST}${imageData.attributes.formats.large.url}`,
      altText: imageData.attributes.alternativeText,
    };
  });
};

const getHomePageComponents = (response: any): ReactNode[] => {
  const pageComponents: ReactNode[] = [];
  const responseComponents = response.data.data.attributes.components;
  responseComponents.forEach((component: any) => {
    switch (component['__component']) {
      case HomePageComponents.GALLERY_SWIPER: {
        const galleryComponent = (
          <GallerySlider
            key={component['__component'].id}
            slides={getGallerySlides(component.imageSwiper.data)}
          />
        );
        pageComponents.push(galleryComponent);
        break;
      }
      default: {
        return;
      }
    }
  });
  return pageComponents;
};

export default getHomePageComponents;
