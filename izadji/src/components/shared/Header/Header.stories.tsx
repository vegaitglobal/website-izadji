import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './Header';
import './Header.module.scss';

const navBar = {
  buttons: [
    {
      title: 'Pocetna',
    },
    {
      title: 'Pride',
    },
    {
      title: 'Publikacije',
    },
    {
      title: 'Vesti/Blog',
    },
    {
      title: 'Dokumantacija',
    },
    {
      title: 'O Nama',
    },
    {
      title: 'Kontakt',
    },
  ],
};

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Default: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DefaultHeader = Default.bind({});
DefaultHeader.args = {
  emails: ['savetovaliste@izadji.rs', 'office@izadji.rs'],
  navBar: navBar,
};
