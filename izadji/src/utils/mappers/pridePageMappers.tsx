import { ReactNode } from 'react';
import GallerySlider from '../../components/GallerySlider/GallerySlider';
import PridePageComponents from '../enums/pridePageComponentEnums';
import { getGallerySlides } from './homePageMapper';

const getPridePageComponents = (response: any): ReactNode[] => {
  const pageComponents: ReactNode[] = [];
  const responseComponents = response.data.data.attributes.components;
  responseComponents.forEach((component: any) => {
    switch (component['__component']) {
      case PridePageComponents.GALLERY_SWIPER: {
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

export default getPridePageComponents;
