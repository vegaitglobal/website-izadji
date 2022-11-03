import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBarButton from './NavBarButton';
import './NavBarButton.module.scss';
import { routes } from '../../routes';
import { MemoryRouter } from 'react-router';

export default {
  title: 'NavBarButton',
  component: NavBarButton,
} as ComponentMeta<typeof NavBarButton>;

const Default: ComponentStory<typeof NavBarButton> = (args) => (
  <MemoryRouter>
    <NavBarButton {...args} />
  </MemoryRouter>
);

export const DefaultNavBarButton = Default.bind({});
DefaultNavBarButton.args = {
  title: 'Pocetna',
  href: routes.main,
};
