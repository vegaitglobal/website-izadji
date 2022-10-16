import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar from './NavBar';
import './NavBar.module.scss';

const navBarButtons = [
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
