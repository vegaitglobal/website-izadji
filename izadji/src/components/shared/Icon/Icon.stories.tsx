import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from './Icon';
import LogoImage from '../../../assets/svg/logo.svg';
import YouTubeIcon from '../../../assets/svg/ico-youtube.svg';

export default {
  title: 'shared/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Default: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const LogoIcon = Default.bind({});
LogoIcon.args = {
  src: LogoImage,
  altText: 'Logo icon',
  width: '60px',
};

export const SocialNetworkIcon = Default.bind({});
SocialNetworkIcon.args = {
  src: YouTubeIcon,
  altText: 'YouTube icon',
  width: '60px',
};

export const SmallIcon = Default.bind({});
SmallIcon.args = {
  src: YouTubeIcon,
  altText: 'YouTube icon',
  width: '20px',
};
