import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar from './NavBar';
import './NavBar.module.scss';

const navBarButtons = [
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
];

export default {
  title: 'NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Default: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const DefaultNavBar = Default.bind({});
DefaultNavBar.args = {
  buttons: navBarButtons,
};
