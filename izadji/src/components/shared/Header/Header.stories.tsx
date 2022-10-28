import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './Header';
import './Header.module.scss';
import { routes } from '../../../routes';
import { MemoryRouter } from 'react-router';

const navBar = {
  buttons: [
    {
      title: 'Pocetna',
      href: routes.main,
    },
    {
      title: 'Pride',
      href: routes.pride,
    },
    {
      title: 'Publikacije',
      href: routes.main,
    },
    {
      title: 'Vesti/Blog',
      href: routes.blog,
    },
    {
      title: 'Dokumantacija',
      href: routes.main,
    },
    {
      title: 'O Nama',
      href: routes.aboutUs,
    },
    {
      title: 'Kontakt',
      href: routes.main,
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

const Default: ComponentStory<typeof Header> = (args) => (
  <MemoryRouter>
    <Header {...args} />
  </MemoryRouter>
);

export const DefaultHeader = Default.bind({});
DefaultHeader.args = {
  emails: ['savetovaliste@izadji.rs', 'office@izadji.rs'],
  navBar: navBar,
  social: social,
};
