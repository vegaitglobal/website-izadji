import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import Banner from '../../components/Banner/Banner';
import CollaboratorsSlider from '../../components/CollaboratorsSlider/CollaboratorsSlider';
import GallerySlider from '../../components/GallerySlider/GallerySlider';
import Newsletter from '../../components/Newsletter/Newsletter';
import RichTextComponent from '../../components/RichTextComponent/RichTextComponent';
import TrendingArticles from '../../components/TrendingArticles/TrendingArticles';
import PridePageComponents from '../enums/pridePageComponentEnums';
import {
  getCollaboratorsSlides,
  getGallerySlides,
  getTrendingArticlesSlides,
} from './homePageMapper';
import { getWorkProgramSlider } from './workProgramMapper';

export type BannerProps = {
  imageSrc: string;
  title: string;
  text: string;
};

const getPridePageComponents = (
  response: any,
  workPrograms: any
): ReactNode[] => {
  const pageComponents: ReactNode[] = [];

  const responseComponents = response.data.data.attributes.components;
  const bannerData = response.data.data.attributes.banner;
  console.log(bannerData);

  const bannerComponent = (
    <Banner
      title={bannerData.title}
      text={bannerData.text}
      imageSrc={`${process.env.REACT_APP_STRAPI_HOST}${bannerData.image.data.attributes.url}`}
    />
  );
  pageComponents.push(bannerComponent);
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
      case PridePageComponents.TRENDING_ARTICLES: {
        const trendingArticlesComponent = (
          <TrendingArticles
            slides={getTrendingArticlesSlides(component.blog_pages.data)}
          />
        );
        pageComponents.push(trendingArticlesComponent);
        break;
      }
      case PridePageComponents.COLLABORATORS_SWIPER: {
        const collaboratorsSliderComponent = (
          <CollaboratorsSlider
            title={component.title}
            collaborators={getCollaboratorsSlides(component.logos.data)}
          />
        );
        pageComponents.push(collaboratorsSliderComponent);
        break;
      }
      case PridePageComponents.WORK_PROGRAM_SLIDER: {
        pageComponents.push(getWorkProgramSlider(workPrograms));
        break;
      }
      case PridePageComponents.NEWSLETTER: {
        const newsletterComponent = (
          <Newsletter
            title={component.text}
            buttonText={component.buttonText}
          />
        );
        pageComponents.push(newsletterComponent);
        break;
      }
      case PridePageComponents.RICH_TEXT_EDITOR: {
        const richTextComponent = (
          <RichTextComponent content={component.content} />
        );
        pageComponents.push(richTextComponent);
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
