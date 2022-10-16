import { ComponentMeta, ComponentStory } from '@storybook/react';
import Event from './Event';

export default {
  title: 'Event',
  component: Event,
} as ComponentMeta<typeof Event>;

const Default: ComponentStory<typeof Event> = (args) => <Event {...args} />;

export const DefaultEvent = Default.bind({});
DefaultEvent.args = {
  date: '25.OKT',
  weekDay: 'NEDELJA',
  timeStart: '14:00',
  timeEnd: '17:00',
  name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
  link: '',
};
