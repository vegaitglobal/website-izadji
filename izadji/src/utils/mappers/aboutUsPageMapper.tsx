import { EventProps } from '../../components/Event/Event';
import EventsSlider from '../../components/EventsSlider/EventsSlider';
import { convertDate, convertWeekDay } from '../dateTimeConversion';
import AboutUsPageComponents from '../enums/aboutUsPageComponents';
import { MappingFunction } from './sharedMapper';

const getOurTeamMembers = (teamMembers: any): EventProps[] => {
  return teamMembers.map((teamMember: any) => {
    return {
      name: teamMember.attributes.name,
      jobTitle: teamMember.attributes.jobTitle,
      biography: teamMember.attributes.biography,
    };
  });
};

const AboutUsPageMapper: MappingFunction = (component) => {
  switch (component['__component']) {
    case AboutUsPageComponents.OUR_TEAM: {
      return (
        // <EventsSlider
        //   key={`our_team_${component['__component'].id}`}
        //   events={getOurTeamMembers(component.team_members.data)}
        // />
        <></>
      );
    }
  }
};

export default AboutUsPageMapper;
