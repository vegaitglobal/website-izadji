import { ComponentMeta, ComponentStory } from '@storybook/react';
import VolunteeringForm from './VolunteeringForm';

export default {
  title: 'VolunteeringForm',
  component: VolunteeringForm,
} as ComponentMeta<typeof VolunteeringForm>;

const Default: ComponentStory<typeof VolunteeringForm> = (args) => (
  <VolunteeringForm {...args} />
);

export const DefaultVolunteeringForm = Default.bind({});
DefaultVolunteeringForm.args = {
  title: 'Prijavi se za volontiranje na projektu',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonText: 'Prijavi se',
};
