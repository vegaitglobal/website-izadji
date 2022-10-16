import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './Header';
import './Header.module.scss';
import YouTubeIcon from '../../../assets/svg/ico-youtube.svg';
import InstagramIcon from '../../../assets/svg/ico-instagram.svg';
import FacebookIcon from '../../../assets/svg/ico-facebook.svg';
import TwitterIcon from '../../../assets/svg/ico-twitter.svg';
import LinkedinIcon from '../../../assets/svg/ico-linkedin.svg';

const navBarButtons = {
  buttons: [
    {
      buttons: [{ title: 'Pocetna', link: '' }],
      buttonTitle: 'Pocetna',
    },
    {
      buttons: [{ title: 'Pride', link: '' }],
      buttonTitle: 'Pride',
    },
    {
      buttons: [
        { title: 'Publikacije', link: '' },
        { title: 'Dokumentacije', link: '' },
      ],
      buttonTitle: 'Dokumenta',
    },
    {
      buttons: [{ title: 'Vesti/Blog', link: '' }],
      buttonTitle: 'Vesti/Blog',
    },
    {
      buttons: [{ title: 'O nama', link: '' }],
      buttonTitle: 'O nama',
    },
    {
      buttons: [{ title: 'Kontakt', link: '' }],
      buttonTitle: 'Kontakt',
    },
  ],
};
const social = [
  {
    src: InstagramIcon,
    altText: 'instagram',
    width: '20px',
  },
  {
    src: FacebookIcon,
    altText: 'facebook',
    width: '20px',
  },
  {
    src: LinkedinIcon,
    altText: 'linkedin',
    width: '20px',
  },
  {
    src: TwitterIcon,
    altText: 'twitter',
    width: '20px',
  },
  {
    src: YouTubeIcon,
    altText: 'youtube',
    width: '20px',
  },
];

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Default: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DefaultHeader = Default.bind({});
DefaultHeader.args = {
  emails: ['savetovaliste@izadji.rs', 'office@izadji.rs'],
  navBar: navBarButtons,
  social: social,
};
