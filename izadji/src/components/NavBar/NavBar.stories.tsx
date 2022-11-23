import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar from './NavBar';
import './NavBar.module.scss';
import { routes } from '../../routes';
import { MemoryRouter } from 'react-router';

const navBarButtons = [
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
];

export default {
  title: 'NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Default: ComponentStory<typeof NavBar> = (args) => (
  <MemoryRouter>
    <NavBar {...args} />
  </MemoryRouter>
);

export const DefaultNavBar = Default.bind({});
DefaultNavBar.args = {
  buttons: navBarButtons,
};
