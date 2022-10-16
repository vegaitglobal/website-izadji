import EventsSlider from './EventsSlider';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const events = [
  {
    date: '1.okt',
    weekDay: 'nedelja',
    timeStart: '14.00',
    timeEnd: '17.00',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '2.nov',
    weekDay: 'četvrtak',
    timeStart: '14.00',
    timeEnd: '17.00',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '3.sep',
    weekDay: 'ponedeljak',
    timeStart: '14.00',
    timeEnd: '17.00',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '4.sep',
    weekDay: 'sreda',
    timeStart: '11.30',
    timeEnd: '14.45',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '5.okt',
    weekDay: 'nedelja',
    timeStart: '14.00',
    timeEnd: '17.00',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '6.nov',
    weekDay: 'četvrtak',
    timeStart: '14.00',
    timeEnd: '17.00',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis',
    link: 'Detaljnije',
  },
  {
    date: '7.sep',
    weekDay: 'ponedeljak',
    timeStart: '14.00',
    timeEnd: '17.00',
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
