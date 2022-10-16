import { ComponentMeta, ComponentStory } from '@storybook/react';
import Banner from './Banner';
import BannerImage from '../../assets/images/content/banner.png';

export default {
  title: 'Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Default: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const DefaultBanner = Default.bind({});
DefaultBanner.args = {
  imageSrc: BannerImage,
  title: 'Zašto prajd?',
  text: 'Novosadski Prajd predstavlja jedan od najvažnijih rezultata rada Grupe IZAĐI. Novosadski Prajd predstavlja jednan od alta koje koristimo u svom radu, a koji je zasnovan na Ustavom zagarantovanom pravu građana na slobodno okupljanje.',
};
