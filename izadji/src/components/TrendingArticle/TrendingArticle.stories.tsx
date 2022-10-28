import ProjectSlideImage1 from '../../assets/images/content/01.jpg';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TrendingArticle from './TrendingArticle';
import { MemoryRouter } from 'react-router';

export default {
  title: 'Trending Article',
  component: TrendingArticle,
} as ComponentMeta<typeof TrendingArticle>;

const Default: ComponentStory<typeof TrendingArticle> = (args) => (
  <MemoryRouter>
    <TrendingArticle {...args} />
  </MemoryRouter>
);

export const DefaultProjectSlide = Default.bind({});
DefaultProjectSlide.args = {
  imageSrc: ProjectSlideImage1,
  date: '29. novembar',
  title: 'Novi Projekat udruzenja Ime Projekta',
  category: 'Kategorija',
  link: 'link',
};
