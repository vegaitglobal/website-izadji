import Team from '../../components/Team/Team';
import { TeamMemberItemProps } from '../../components/TeamMemberItem/TeamMemberItem';
import AboutUsPageComponents from '../enums/aboutUsPageComponents';
import { getApiUrl } from '../urlHelpers';
import { MappingFunction } from './sharedMapper';

const getOurTeamMembers = (teamMembers: any): TeamMemberItemProps[] => {
  return teamMembers.map((teamMember: any) => {
    return {
      name: teamMember.attributes.name,
      jobTitle: teamMember.attributes.jobTitle,
      bio: teamMember.attributes.biography,
      email: teamMember.attributes.emailField,
      profileImage: getApiUrl(
        teamMember.attributes.profileImage.data.attributes.url
      ),
    };
  });
};

const AboutUsPageMapper: MappingFunction = (component) => {
  switch (component['__component']) {
    case AboutUsPageComponents.OUR_TEAM: {
      return (
        <Team
          key={`our_team_${component.id}`}
          teamMembersList={getOurTeamMembers(component.team_members.data)}
          heading={component.team_members.title}
        />
      );
    }
  }
};

export default AboutUsPageMapper;
