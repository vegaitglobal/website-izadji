import { ComponentMeta, ComponentStory } from '@storybook/react';
import TeamMemberBio from './TeamMemberBio';

export default {
  title: 'TeamMemberBio',
  component: TeamMemberBio,
} as ComponentMeta<typeof TeamMemberBio>;

const Default: ComponentStory<typeof TeamMemberBio> = (args) => (
  <TeamMemberBio {...args} />
);

export const DefaultTeamMemberBio = Default.bind({});
DefaultTeamMemberBio.args = {
  name: 'Aleksandar Mudric',
  jobTitle: 'Chief Officer',
  profileImage:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKpnKJRxUKYcUZIEenUD3ya4ROG4VT8q94A&usqp=CAU',
  bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  \nLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  \nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
};
