import { ComponentMeta, ComponentStory } from '@storybook/react';
import WorkProgrammeCard from './WorkProgrammeCard';
import { MemoryRouter } from 'react-router';

export default {
  title: 'Work Programme Card',
  component: WorkProgrammeCard,
} as ComponentMeta<typeof WorkProgrammeCard>;

const Default: ComponentStory<typeof WorkProgrammeCard> = (args) => (
  <MemoryRouter>
    <WorkProgrammeCard {...args} />
  </MemoryRouter>
);

export const DefaultWorkProgrammeCard = Default.bind({});
DefaultWorkProgrammeCard.args = {
  heading: 'Omladinski rad',
  description:
    'Cilj programa omladinskog rada je poboljšanje kvaliteta života mladih LGBTI* osoba putem njihovog ličnog i profesionalnog razvoja...',
  link: '/omladinski-rad',
  linkText: 'Saznaj više',
};
