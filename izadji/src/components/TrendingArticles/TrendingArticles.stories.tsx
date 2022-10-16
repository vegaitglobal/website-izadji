import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProjectSlideImage1 from '../../assets/images/content/01.jpg';
import ProjectSlideImage2 from '../../assets/images/content/02.jpg';
import ProjectSlideImage3 from '../../assets/images/content/21.jpg';
import TrendingArticles from './TrendingArticles';

const trendingArticles = {
  slides: [
    {
      imageSrc: ProjectSlideImage1,
      date: '29. novembar',
      title: 'Novi Projekat udruzenja Ime Projekta',
    },
    {
      imageSrc: ProjectSlideImage2,
      date: '30. novembar',
      title: 'Novi Projekat udruzenja Ime Projekta',
    },
    {
      imageSrc: ProjectSlideImage3,
      date: '25. decembar',
      title: 'Novi Projekat udruzenja Ime Projekta',
    },
  ],
  buttonText: 'Pogledaj blog',
};

export default {
  title: 'Trending Artciles',
  component: TrendingArticles,
} as ComponentMeta<typeof TrendingArticles>;

const Default: ComponentStory<typeof TrendingArticles> = (args) => (
  <TrendingArticles {...args} />
);

export const DefaultTrendingArticles = Default.bind({});
DefaultTrendingArticles.args = {
  slides: trendingArticles.slides,
  buttonText: trendingArticles.buttonText,
};
