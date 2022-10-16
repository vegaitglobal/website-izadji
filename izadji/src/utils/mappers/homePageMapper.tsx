import { ReactNode } from 'react';
import CollaboratorsSlider, {
  CollaboratorsSlideProps,
} from '../../components/CollaboratorsSlider/CollaboratorsSlider';
import { GallerySlideProps } from '../../components/GallerySlide/GallerySlide';
import GallerySlider from '../../components/GallerySlider/GallerySlider';
import Newsletter from '../../components/Newsletter/Newsletter';
import { TrendingArticleProps } from '../../components/TrendingArticle/TrendingArticle';
import TrendingArticles from '../../components/TrendingArticles/TrendingArticles';
import HomePageComponents from '../enums/homePageComponentEnums';
import { getWorkProgramSlider } from './workProgramMapper';

const getGallerySlides = (imagesData: any): GallerySlideProps[] => {
  return imagesData.map((imageData: any) => {
    return {
      imageSrc: `${process.env.REACT_APP_STRAPI_HOST}${imageData.attributes.url}`,
      thumbnailImageSrc: `${process.env.REACT_APP_STRAPI_HOST}${imageData.attributes.url}`,
      altText: imageData.attributes.alternativeText,
    };
  });
};

const getTrendingArticlesSlides = (
  trendingArticlesData: any
): TrendingArticleProps[] => {
  return trendingArticlesData.map((trendingArticle: any) => {
    const blogBanner = trendingArticle.attributes.blogBanner;
    const workProgramme =
      trendingArticle.attributes.work_program.data.attributes.banner.title;
    return {
      imageSrc: `${process.env.REACT_APP_STRAPI_HOST}${blogBanner.image.data.attributes.url}`,
      date: blogBanner.date,
      title: blogBanner.title,
      category: workProgramme,
    };
  });
};

const getCollaboratorsSlides = (
  collaborators: any
): CollaboratorsSlideProps[] => {
  return collaborators.map((collaboratorData: any) => {
    return {
      imageSrc: `${process.env.REACT_APP_STRAPI_HOST}${collaboratorData.attributes.url}`,
    };
  });
};

const getHomePageComponents = (
  homePageResponse: any,
  workPrograms: any
): ReactNode[] => {
  const pageComponents: ReactNode[] = [];
  const responseComponents = homePageResponse.data.data.attributes.components;
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
      case HomePageComponents.TRENDING_ARTICLES: {
        const trendingArticlesComponent = (
          <TrendingArticles
            slides={getTrendingArticlesSlides(component.blog_pages.data)}
          />
        );
        pageComponents.push(trendingArticlesComponent);
        break;
      }
      case HomePageComponents.COLLABORATORS_SWIPER: {
        const collaboratorsSliderComponent = (
          <CollaboratorsSlider
            title={component.title}
            collaborators={getCollaboratorsSlides(component.logos.data)}
          />
        );
        pageComponents.push(collaboratorsSliderComponent);
        break;
      }
      case HomePageComponents.WORK_PROGRAM_SLIDER: {
        pageComponents.push(getWorkProgramSlider(workPrograms));
        break;
      }
      case HomePageComponents.NEWSLETTER: {
        const newsletterComponent = (
          <Newsletter
            title={component.text}
            buttonText={component.buttonText}
          />
        );
        pageComponents.push(newsletterComponent);
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
