import { ComponentMeta, ComponentStory } from '@storybook/react';
import Newsletter from './Newsletter';

export default {
  title: 'Newsletter',
  component: Newsletter,
} as ComponentMeta<typeof Newsletter>;

const Default: ComponentStory<typeof Newsletter> = (args) => (
  <Newsletter {...args} />
);

export const DefaultNewsletter = Default.bind({});
DefaultNewsletter.args = {
  title: 'Novi Projekat **udruzenja** Ime Projekta',
  buttonText: 'Prijavi se',
};
