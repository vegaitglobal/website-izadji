import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './Header';
import './Header.module.scss';

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
    altText: 'instagram',
    iconClass: 'instagram',
    url: '/',
  },
  {
    altText: 'facebook',
    iconClass: 'facebook',
    url: '/',
  },
  {
    altText: 'linkedin',
    iconClass: 'linkedin',
    url: '/',
  },
  {
    altText: 'twitter',
    iconClass: 'twitter',
    url: '/',
  },
  {
    altText: 'youtube',
    iconClass: 'youtube',
    url: '/',
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
