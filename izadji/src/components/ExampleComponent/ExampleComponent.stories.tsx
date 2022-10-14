import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExampleComponent from '../../components/ExampleComponent/ExampleComponent';

export default {
  title: 'Example Component',
  component: ExampleComponent,
} as ComponentMeta<typeof ExampleComponent>;

const Default: ComponentStory<typeof ExampleComponent> = (args) => (
  <ExampleComponent {...args} />
);

export const Primary = Default.bind({});
Primary.args = {
  text: 'PRIMARY Example component text prop',
};

export const Secondary = Default.bind({});
Secondary.args = {
  text: 'SECONDARY Example component text prop',
};
