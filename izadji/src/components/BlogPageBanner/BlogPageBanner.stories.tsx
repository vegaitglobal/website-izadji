import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlogNewsBanner from './BlogNewsBanner';
import BannerImage from '../../assets/images/content/banner.png';

export default {
  title: 'BlogNewsBanner',
  component: BlogNewsBanner,
} as ComponentMeta<typeof BlogNewsBanner>;

const Default: ComponentStory<typeof BlogNewsBanner> = (args) => (
  <BlogNewsBanner {...args} />
);

export const DefaultBlogNewsBanner = Default.bind({});
DefaultBlogNewsBanner.args = {
  imageSrc: BannerImage,
  title: 'Kako sam ovo preživeo_la? – Psihološka otpornost u zajednici',
  category: 'Obuke i Treninzi',
  date: 'Novembar 27, 2021',
  text: 'Veliki broj teorijskih modela u psihologiji polazi od pretpostavke da izloženost stresorima ili negativnim iskustvima značajno utiče na kvalitet psihološkog funkcionisanja. Stresor se može definisati kao ugrožavajući ili izazovno događaj i/ili iskustvo koje podrazumeva promenu i zahteva dodatne napore osobe da se prilagodi na novonastalu situaciju...',
  url: 'www.google.com',
};
