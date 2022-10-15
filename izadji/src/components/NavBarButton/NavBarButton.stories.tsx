import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBarButton from './NavBarButton';
import './NavBarButton.module.scss';

export default {
  title: 'NavBarButton',
  component: NavBarButton,
} as ComponentMeta<typeof NavBarButton>;

const Default: ComponentStory<typeof NavBarButton> = (args) => (
  <NavBarButton {...args} />
);

export const DefaultNavBarButton = Default.bind({});
DefaultNavBarButton.args = {
  title: 'Pocetna',
};
