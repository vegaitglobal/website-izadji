import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBarButton from './NavBarButton';

export default {
  title: 'NavBarButton',
  component: NavBarButton,
} as ComponentMeta<typeof NavBarButton>;

const Default: ComponentStory<typeof NavBarButton> = (args) => (
  <NavBarButton {...args} />
);

export const DefaultNavBarButton = Default.bind({});
DefaultNavBarButton.args = {
  buttons: [
    { title: 'opt1', link: '' },
    { title: 'opt2', link: '' },
  ],
  buttonTitle: 'Publikacije',
};
