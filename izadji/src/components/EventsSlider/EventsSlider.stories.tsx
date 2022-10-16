import EventsSlider from './EventsSlider';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const events = [
  {
    date: '1.okt',
    weekDay: 'nedelja',
    time: '14.00 - 17.00',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '2.nov',
    weekDay: 'četvrtak',
    time: '11.30 - 14.45',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '3.sep',
    weekDay: 'ponedeljak',
    time: '14.00 - 17.00',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '4.sep',
    weekDay: 'sreda',
    time: '11.30 - 14.45',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '5.okt',
    weekDay: 'nedelja',
    time: '14.00 - 17.00',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '6.nov',
    weekDay: 'četvrtak',
    time: '11.30 - 14.45',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '7.sep',
    weekDay: 'ponedeljak',
    time: '14.00 - 17.00',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
];

export default {
  title: 'EventsSlider',
  component: EventsSlider,
} as ComponentMeta<typeof EventsSlider>;

const Default: ComponentStory<typeof EventsSlider> = (args) => (
  <EventsSlider {...args} />
);

export const DefaultEventsSlider = Default.bind({});
DefaultEventsSlider.args = {
  events: events,
};
