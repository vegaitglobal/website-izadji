import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';
import LogoImage from '../../../assets/svg/logo.svg';

const footerProps = {
  iconSrc: LogoImage,
  emails: ['office@izadji.rs', 'savetovaliste@izadji.rs'],
  copyText: '©Design by Elder Creative Agency',
  navItems: [
    {
      title: 'Explore',
      items: [
        {
          text: 'Podcast',
          href: '/podcast',
        },
        {
          text: 'Pride',
          href: '/pride',
        },
        {
          text: 'Publikacije',
          href: '/publikacije',
        },
        {
          text: 'Donacije',
          href: '/donacije',
        },
      ],
    },
    {
      title: 'Media',
      items: [
        {
          text: 'Vesti',
          href: '/vesti',
        },
        {
          text: 'Blog',
          href: '/blog',
        },
        {
          text: 'Program rada',
          href: '/program-rada',
        },
      ],
    },
    {
      title: 'O nama',
      items: [
        {
          text: 'Ko smo mi',
          href: '/ko-smo-mi',
        },
        {
          text: 'Nas tim',
          href: '/nas-tim',
        },
        {
          text: 'Dokumenta',
          href: '/dokumenta',
        },
      ],
    },
    {
      title: 'Informacije',
      items: [
        {
          text: 'Kontakt',
          href: '/kontakt',
        },
        {
          text: 'Savetovalište',
          href: '/savetovaliste',
        },
      ],
    },
  ],
};

// TODO: Check how to connect storybook with scss

export default {
  title: 'shared/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Default: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const DefaultFooter = Default.bind({});
DefaultFooter.args = {};
