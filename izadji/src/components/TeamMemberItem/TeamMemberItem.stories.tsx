import { ComponentMeta, ComponentStory } from '@storybook/react';
import TeamMemberItem from './TeamMemberItem';

export default {
  title: 'TeamMemberItem',
  component: TeamMemberItem,
} as ComponentMeta<typeof TeamMemberItem>;

const Default: ComponentStory<typeof TeamMemberItem> = (args) => (
  <TeamMemberItem {...args} />
);

export const DefaultTeamMemberItem = Default.bind({});
DefaultTeamMemberItem.args = {
  name: 'Aleksandar Mudric',
  jobTitle: 'Chief Officer',
  profileImage:
    'https://highwaystarmagazine.org/wp-content/uploads/2020/04/45585596_1046187348889475_7704271675109408768_o.jpg',
  email: 'aleksmudric@yahoo.com',
};
