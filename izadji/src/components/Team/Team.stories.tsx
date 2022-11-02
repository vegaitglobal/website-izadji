import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TeamMemberItemProps } from '../TeamMemberItem/TeamMemberItem';
import Team from './Team';

export default {
  title: 'Team',
  component: Team,
} as ComponentMeta<typeof Team>;

const Default: ComponentStory<typeof Team> = (args) => <Team {...args} />;

export const DefaultTeam = Default.bind({});

const mockSelectTeamMember = () => {
  return;
};

const teamMembers: TeamMemberItemProps[] = [
  {
    email: 'aleksmudric@yahoo.com',
    jobTitle: 'Majstor za popravke',
    name: 'Saša Mudrić',
    profileImage:
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Avatar_Aang.png/220px-Avatar_Aang.png',
    bio: `Najači tekst od svih. 
  \nLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  \nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    isActive: true,
    onClickHandler: mockSelectTeamMember,
  },
  {
    email: 'sasa@yahoo.com',
    jobTitle: 'Shamso69',
    name: 'Aleks Mudrić',
    profileImage:
      'https://highwaystarmagazine.org/wp-content/uploads/2020/04/45585596_1046187348889475_7704271675109408768_o.jpg',
    bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  \nLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  \nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    isActive: false,
    onClickHandler: mockSelectTeamMember,
  },
  {
    email: 'bojana@yahoo.com',
    jobTitle: 'Imač proizvoda',
    name: 'Bojana Kliska',
    profileImage: 'https://people.vegait.rs/media/41tfapga/kliska-bojana.png',
    bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  \nLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  \nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    isActive: true,
    onClickHandler: mockSelectTeamMember,
  },
  {
    email: 'bojanvujic@yahoo.com',
    jobTitle: 'Razvijač softvera',
    name: 'Bojan Vujić',
    profileImage:
      'https://people.vegait.rs/media/juvbdblp/bojan-vujic-people-at-vega.png',
    bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  \nLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  \nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    isActive: true,
    onClickHandler: mockSelectTeamMember,
  },
  {
    email: 'dusica@yahoo.com',
    jobTitle: 'Spadalo Malo',
    name: 'Dušica Vasić',
    profileImage:
      'https://people.vegait.rs/media/msbbd3z4/vasi%C4%87-du%C5%A1ica.png',
    bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  \nLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  \nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    isActive: true,
    onClickHandler: mockSelectTeamMember,
  },
  {
    email: 'miloš@yahoo.com',
    jobTitle: 'Razvijač stilova na sajtu',
    name: 'Miloš Gostović',
    profileImage:
      'https://people.vegait.rs/media/n54ptgc2/people-at-vega-zaposleni-milos-gostovic.png',
    bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  \nLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  \nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    isActive: true,
    onClickHandler: mockSelectTeamMember,
  },
];

DefaultTeam.args = {
  heading: 'Naš tim',
  teamMembersList: teamMembers,
};
