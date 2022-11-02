import { ComponentMeta, ComponentStory } from '@storybook/react';
import SingleNewsBanner from './SingleNewsBanner';
import BannerImage from '../../assets/images/content/banner.png';

export default {
  title: 'SingleNewsBanner',
  component: SingleNewsBanner,
} as ComponentMeta<typeof SingleNewsBanner>;

const Default: ComponentStory<typeof SingleNewsBanner> = (args) => (
  <SingleNewsBanner {...args} />
);

export const DefaultSingleNewsBanner = Default.bind({});
DefaultSingleNewsBanner.args = {
  imageSrc: BannerImage,
  title: 'Let’s Challenge Gender Roles',
  category: 'Obuke i Treninzi',
  author: 'Lazar Jovic',
  date: 'Novembar 27, 2021',
};
