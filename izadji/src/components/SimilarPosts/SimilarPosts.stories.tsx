import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProjectSlideImage1 from '../../assets/images/content/01.jpg';
import ProjectSlideImage2 from '../../assets/images/content/02.jpg';
import ProjectSlideImage3 from '../../assets/images/content/21.jpg';
import SimilarPosts from './SimilarPosts';
import { MemoryRouter } from 'react-router';

const similarPosts = [
  {
    imageSrc: ProjectSlideImage1,
    date: '29. novembar',
    title: 'Novi Projekat udruzenja Ime Projekta',
    category: 'Kategorija',
    link: 'link',
  },
  {
    imageSrc: ProjectSlideImage2,
    date: '30. novembar',
    title: 'Novi Projekat udruzenja Ime Projekta',
    category: 'Kategorija',
    link: 'link',
  },
  {
    imageSrc: ProjectSlideImage3,
    date: '25. decembar',
    title: 'Novi Projekat udruzenja Ime Projekta',
    category: 'Kategorija',
    link: 'link',
  },
];

export default {
  title: 'Similar Posts',
  component: SimilarPosts,
} as ComponentMeta<typeof SimilarPosts>;

const Default: ComponentStory<typeof SimilarPosts> = (args) => (
  <MemoryRouter>
    <SimilarPosts {...args} />
  </MemoryRouter>
);

export const DefaultSimilarPosts = Default.bind({});
DefaultSimilarPosts.args = {
  cards: similarPosts,
};
