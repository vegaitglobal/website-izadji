import { ComponentMeta, ComponentStory } from '@storybook/react';
import WorkProgrammeCard from './WorkProgrammeCard';

export default {
  title: 'Work Programme Card',
  component: WorkProgrammeCard,
} as ComponentMeta<typeof WorkProgrammeCard>;

const Default: ComponentStory<typeof WorkProgrammeCard> = (args) => (
  <WorkProgrammeCard {...args} />
);

export const DefaultWorkProgrammeCard = Default.bind({});
DefaultWorkProgrammeCard.args = {
  heading: 'Omladinski rad',
  description:
    'Cilj programa omladinskog rada je poboljšanje kvaliteta života mladih LGBTI* osoba putem njihovog ličnog i profesionalnog razvoja...',
  link: '/omladinski-rad',
  linkText: 'Saznaj više',
};
