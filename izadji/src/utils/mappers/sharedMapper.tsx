import SharedComponents from '../enums/sharedComponents';
import GallerySlider from '../../components/GallerySlider/GallerySlider';
import TrendingArticles from '../../components/TrendingArticles/TrendingArticles';
import CollaboratorsSlider, {
  CollaboratorsSlideProps,
} from '../../components/CollaboratorsSlider/CollaboratorsSlider';
import { getWorkProgramSlider } from './workProgramMapper';
import Newsletter from '../../components/Newsletter/Newsletter';
import { GallerySlideProps } from '../../components/GallerySlide/GallerySlide';
import { TrendingArticleProps } from '../../components/TrendingArticle/TrendingArticle';
import { ReactNode } from 'react';
import RichTextComponent from '../../components/RichTextComponent/RichTextComponent';
import DonateSection, {
  DonateSectionProps,
} from '../../components/DonateSection/DonateSection';
import Donate from '../../components/Donate/Donate';

const getGallerySlides = (imagesData: any): GallerySlideProps[] => {
  return imagesData.map((imageData: any) => {
    return {
      imageSrc: `${process.env.REACT_APP_STRAPI_HOST}${imageData.attributes.url}`,
      largeImageSrc: `${process.env.REACT_APP_STRAPI_HOST}${imageData.attributes.url}`,
      thumbnailImageSrc: `${process.env.REACT_APP_STRAPI_HOST}${imageData.attributes.url}`,
      altText: imageData.attributes.alternativeText,
    };
  });
};

const getTrendingArticlesSlides = (
  trendingArticlesData: any
): TrendingArticleProps[] => {
  console.log(trendingArticlesData);

  return trendingArticlesData.map((trendingArticle: any) => {
    const blogBanner = trendingArticle.attributes.blogBanner;
    const workProgramme =
      trendingArticle.attributes.work_program.data.attributes.banner.title;
    return {
      imageSrc: `${process.env.REACT_APP_STRAPI_HOST}${blogBanner.image.data.attributes.url}`,
      date: blogBanner.date,
      title: blogBanner.title,
      category: workProgramme,
      link: `/blogs/${trendingArticle.id}`,
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

export type SharedComponentsAdditionalData = {
  workPrograms?: any;
};

export type MappingResult = {
  success: boolean;
  mappedElement?: ReactNode;
};

export type MappingFunction = {
  (
    component: any,
    additionalData?: SharedComponentsAdditionalData
  ): MappingResult;
};

export const TryMapSharedComponents: MappingFunction = (
  component,
  additionalData
) => {
  switch (component['__component']) {
    case SharedComponents.GALLERY_SWIPER: {
      return {
        success: true,
        mappedElement: (
          <GallerySlider
            key={component['__component'].id}
            slides={getGallerySlides(component.imageSwiper.data)}
          />
        ),
      };
    }
    case SharedComponents.TRENDING_ARTICLES: {
      return {
        success: true,
        mappedElement: (
          <TrendingArticles
            slides={getTrendingArticlesSlides(component.blog_pages.data)}
          />
        ),
      };
    }
    case SharedComponents.COLLABORATORS_SWIPER: {
      return {
        success: true,
        mappedElement: (
          <CollaboratorsSlider
            title={component.title}
            collaborators={getCollaboratorsSlides(component.logos.data)}
          />
        ),
      };
    }
    case SharedComponents.WORK_PROGRAM_SLIDER: {
      return {
        success: true,
        mappedElement: getWorkProgramSlider(additionalData?.workPrograms),
      };
    }
    case SharedComponents.NEWSLETTER: {
      return {
        success: true,
        mappedElement: (
          <Newsletter
            title={component.text}
            buttonText={component.buttonText}
          />
        ),
      };
    }
    case SharedComponents.RICH_TEXT_EDITOR: {
      return {
        success: true,
        mappedElement: <RichTextComponent content={component.content} />,
      };
    }
    case SharedComponents.DONATE_SECTION: {
      return {
        success: true,
        mappedElement: (
          <DonateSection
            title={component.title}
            content={component.description}
            buttonHref={component.buttonHref}
            buttonText={component.buttonText}
          />
        ),
      };
    }
    default: {
      return { success: false };
    }
  }
};
